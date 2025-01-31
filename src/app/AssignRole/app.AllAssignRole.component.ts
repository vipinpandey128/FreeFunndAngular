import { Component, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { MatTableDataSource, MatSort, MatPaginator, PageEvent } from '@angular/material';
import { AssignandRemoveRoleService } from './Services/app.AssignandRemoveRole.Service';
import { AssignRolesViewModel } from './Models/AssignRolesViewModel';


@Component({
    templateUrl: './app.AllAssignedRoles.html',
    styleUrls: [
    ]
})

export class AllAssignRoleComponent implements OnInit 
{
    private _assignservice;
    @ViewChild(MatSort, {static: false}) sort: MatSort;
    @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
    displayedColumns: string[] = ['RoleName', 'UserName'];
    dataSource: any;
    AssignModel : AssignRolesViewModel[]
    errorMessage: any;
    offset: any;

    ngOnInit(): void {
        this._assignservice.GetAllAssignedRoles().subscribe(
            assignModel => 
            {
   
                this.dataSource = new MatTableDataSource(assignModel);
                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;
            },
            error => this.errorMessage = <any>error
        );
    }

    constructor(private _Route: Router, assignservice: AssignandRemoveRoleService) {
        this._assignservice = assignservice;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
      }
      
      getNext(event: PageEvent) {
        this.offset = event.pageSize * event.pageIndex
        // call your api function here with the offset
        console.log(event.pageSize);
        console.log(event.pageIndex);
      }

}