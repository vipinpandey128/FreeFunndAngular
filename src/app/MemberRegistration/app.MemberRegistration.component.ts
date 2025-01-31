import { Component, OnInit } from '@angular/core';
import { SchemeService } from '../SchemeMasters/Services/app.Scheme.Service';
import { Router } from '@angular/router';
import { SchemeDropdownModel } from '../SchemeMasters/Models/app.SchemeDropdownModel';
import { PlanService } from '../PlanMaster/Services/app.planmaster.service';
import { MemberRegistrationModel } from './Models/app.memberRegistrationModel';
import { MemberRegistrationService } from './Services/app.MemberRegistration.service';
import { ActivePlanModel } from '../PlanMaster/Models/app.ActivePlanModel';
import { DatePipe } from '@angular/common';


@Component({
    templateUrl: './app.MemberRegistration.html',
    styleUrls: [
       


    ]
})

export class MemberRegistrationComponent implements OnInit {
    AllActiveSchemeList: SchemeDropdownModel[];
    AllActivePlanModel: ActivePlanModel[];
    MemberModel: MemberRegistrationModel = new MemberRegistrationModel();
    errorMessage: any;
    output: any;
    genderList: any[];
    bsRangeValue: Date[];
    bsValue = new Date();
    joinminDate: Date;
    joinmaxDate: Date;
   
    dobminDate: Date;

    ngOnInit(): void 
    {
        
        this.joinminDate = new Date();
        this.joinmaxDate = new Date();
        this.joinminDate.setDate(this.joinminDate.getDate() - 5);
        this.joinmaxDate.setDate(this.joinmaxDate.getDate() + 10);

        this.dobminDate = new Date();
        this.dobminDate.setDate(this.dobminDate.getDate() - 6570);

        this._memberregistration.GetAllActiveSchemeList().subscribe(
            allActiveScheme => {
                this.AllActiveSchemeList = allActiveScheme
            },
            error => this.errorMessage = <any>error
        );

        this.genderList = [
            { "id": 1, "name": "Male" },
            { "id": 2, "name": "Female" }
        ];
    }

    private _memberregistration;
    public age: number;

    constructor(
        private datePipe: DatePipe,
        private _Route: Router,
        private memberregistration: MemberRegistrationService
    ) {
        this._memberregistration = memberregistration;
    }

    onSubmit() {

        console.log(this.MemberModel);
        let demo = this.bsValue
        this._memberregistration.SaveMember(this.MemberModel).subscribe(
            response => 
            {
                this.output = response
                if (this.output.StatusCode == "409") {
                    alert('Member Already Exists');
                }
                else if (this.output.StatusCode == "200") {
                    alert('Member Added Successfully');
                    this._Route.navigate(['/Member/All']);
                }
                else {
                    alert('Something Went Wrong');
                }
            });

       
    }

    OnChange(schemeId) {

        if (schemeId != null) {
            this._memberregistration.GetAllActivePlans(schemeId).subscribe(
                allactivePlans => {
                    this.AllActivePlanModel = allactivePlans
                },
                error => this.errorMessage = <any>error
            );
        }
    }


    CalcuateAge(birthdate) {
        if (birthdate) {
            var timeDiff = Math.abs(Date.now() - birthdate);
            this.MemberModel.Age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
        }
    }


    numberOnly(event): boolean {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;

    }

    GetAmount(PlanID: number, SchemeID: number) {
        if (PlanID != null && SchemeID != null) {
            this._memberregistration.GetAmount(PlanID, SchemeID).subscribe(
                amount => {
                    this.MemberModel.Amount = amount
                },
                error => this.errorMessage = <any>error
            );
        }
    }

    
}