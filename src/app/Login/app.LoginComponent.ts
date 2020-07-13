import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from './Models/app.LoginModel';
import { LoginService } from './Services/app.LoginService';
import { MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition, MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
    templateUrl: './app.login.html',
    styleUrls: [
    ]
})

export class LoginComponent implements OnInit
{

    ngOnInit(): void {
        localStorage.clear();
    }
    private _loginservice;
    output: any;

    actionButtonLabel: string = 'Retry';
    action: boolean = false;
    setAutoHide: boolean = true;
    autoHide: number = 2000;
    verticalPosition: MatSnackBarVerticalPosition = 'top';
    horizontalPosition: MatSnackBarHorizontalPosition = 'center';


    constructor(private spinnerService: Ng4LoadingSpinnerService,private _Route: Router,public snackBar: MatSnackBar, loginservice: LoginService)
    {
        this._loginservice = loginservice;
    }

    LoginModel: LoginModel = new LoginModel();

    onSubmit()
    {
      this.spinnerService.show();
        this._loginservice.validateLoginUser(this.LoginModel).subscribe(
            response =>
            {
              this.spinnerService.hide();
                if (response.Token == null && response.Usertype == "0")
                {
                    let config = new MatSnackBarConfig();
                    config.duration = this.setAutoHide ? this.autoHide : 0;
                    config.verticalPosition = this.verticalPosition;

                    this.snackBar.open("Invalid Username and Password", this.action ? this.actionButtonLabel : undefined, config);

                    this._Route.navigate(['Login']);
                }

                if (response.Usertype == "1")
                {
                    let config = new MatSnackBarConfig();
                    config.duration = this.setAutoHide ? this.autoHide : 0;
                    config.verticalPosition = this.verticalPosition;

                    this.snackBar.open("Logged in Successfully", this.action ? this.actionButtonLabel : undefined, config);

                    this._Route.navigate(['/Admin/Dashboard']);
                }

                if (response.Usertype == "2")
                {
                    let config = new MatSnackBarConfig();
                    config.duration = this.setAutoHide ? this.autoHide : 0;
                    config.verticalPosition = this.verticalPosition;

                    this.snackBar.open("Logged in Successfully", this.action ? this.actionButtonLabel : undefined, config);
                    this._Route.navigate(['/User/Dashboard']);
                }
                if (response.Usertype == "3")
                {
                    let config = new MatSnackBarConfig();
                    config.duration = this.setAutoHide ? this.autoHide : 0;
                    config.verticalPosition = this.verticalPosition;

                    this.snackBar.open("Logged in Successfully", this.action ? this.actionButtonLabel : undefined, config);
                    this._Route.navigate(['/Agent/Dashboard']);
                }
            });
              
            }
}
