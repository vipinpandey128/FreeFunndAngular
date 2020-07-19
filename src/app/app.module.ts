import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule, } from 'ngx-bootstrap/datepicker';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatAutocomplete, MatAutocompleteModule } from '@angular/material/autocomplete';
import { AppComponent } from './app.component';
import { SchemeComponent } from './SchemeMasters/app.Scheme.Component';
import { AllSchemeComponent } from './SchemeMasters/app.AllScheme.Component';
import { EditSchemeComponent } from './SchemeMasters/app.EditScheme.Component';
import { PlanMasterComponent } from './PlanMaster/app.planmaster.component';
import { AllPlanMasterComponent } from './PlanMaster/app.allplanmaster.component';
import { EditPlanComponent } from './PlanMaster/app.EditPlan.component';
import { RoleComponent } from './RoleMaster/app.Role.component';
import { AllRoleComponent } from './RoleMaster/app.AllRole.component';
import { EditRoleComponent } from './RoleMaster/app.EditRole.component';
import { MatSidenavModule, MatSortModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatSnackBar, MatSnackBarConfig, MatSnackBarModule,MatCardModule, MatButtonModule, MatSelectModule, MatIconModule, MatCheckboxModule, MatToolbarModule, MatListModule } from '@angular/material';
import { UserRegistrationComponent } from './CreateUsers/app.UserRegistration.component';
import { AllUserRegistrationComponent } from './CreateUsers/app.AllUserRegistration.Component';
import { EditUserRegistrationComponent } from './CreateUsers/app.EditUserRegistration.Component';
import { AssignRoleComponent } from './AssignRole/app.AssignRole.Component';
import { AllAssignRoleComponent } from './AssignRole/app.AllAssignRole.component';
import { PaymentOverviewComponent } from './Payment/List/app.PaymentOverviewComponent';
import { PaymentListComponent } from './Payment/List/app.PaymentListComponent';
import { LoginComponent } from './Login/app.LoginComponent';
import { AppAdminLayoutComponent } from './_layout/app-adminlayout.component';
import { UserDashboardComponent } from './UserDashboard/app.UserDashboardComponent';
import { AdminDashboardComponent } from './AdminDashboard/app.AdminDashboardComponent';
import { MemberDetailsReportComponent } from './Reports/app.MemberDetailsReport.Component';
import { YearwiseReportComponent } from './Reports/app.YearwiseReport.Component';
import { MonthwiseReportComponent } from './Reports/app.MonthwiseReport.Component';
import { RenewalReportComponent } from './Reports/app.RenewalReport.Component';
import { AppUserLayoutComponent } from './_layout/app-userlayout.component';
import { AdminLogoutComponent } from './Login/app.AdminLogout.Component';
import { UserLogoutComponent } from './Login/app.UserLogout.Component';
import { AdminAuthGuardService } from './AuthGuard/AdminAuthGuardService';
import { UserAuthGuardService } from './AuthGuard/UserAuthGuardService';
import { GenerateRecepitComponent } from './Recepit/app.generateRecepit.Component';
//import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AddMoneyComponent } from './AddMoney/AddMoney.component';
import { DepositMoneyComponent } from './DepositMoney/DepositMoney.component';
import { AgentDashboardComponent } from './AgentDashboard/AgentDashboard.component';
import { ProfileComponent } from './Profile/Profile.component';
import { UserTransactionComponent } from './UserTransaction/UserTransaction.component';
import { AgentTransactionComponent } from './AgentTransaction/AgentTransaction.component';
import { AdminTransactionComponent } from './AdminTransaction/AdminTransaction.component';
import { AllTransactionComponent } from './AllTransaction/AllTransaction.component';

@NgModule({
   declarations: [
      AppComponent,
      AppAdminLayoutComponent,
      AppUserLayoutComponent,
      SchemeComponent,
      AllSchemeComponent,
      EditSchemeComponent,
      PlanMasterComponent,
      AllPlanMasterComponent,
      EditPlanComponent,
      RoleComponent,
      AllRoleComponent,
      EditRoleComponent,
      UserRegistrationComponent,
      AllUserRegistrationComponent,
      EditUserRegistrationComponent,
      AssignRoleComponent,
      AllAssignRoleComponent,
      PaymentOverviewComponent,
      PaymentListComponent,
      LoginComponent,
      AdminLogoutComponent,
      UserLogoutComponent,
      UserDashboardComponent,
      AdminDashboardComponent,
      MemberDetailsReportComponent,
      YearwiseReportComponent,
      MonthwiseReportComponent,
      RenewalReportComponent,
      GenerateRecepitComponent,
      AddMoneyComponent,
      DepositMoneyComponent,
      AgentDashboardComponent,
      ProfileComponent,
      UserTransactionComponent,
      AgentTransactionComponent,
      AdminTransactionComponent,
      AllTransactionComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      FormsModule,
      AppRoutingModule,
      HttpClientModule,
      //Ng4LoadingSpinnerModule.forRoot(),
      FlexLayoutModule,
      BsDatepickerModule.forRoot(),
      MatTableModule,
      MatAutocompleteModule,
      MatSortModule,
      MatPaginatorModule,
      MatCheckboxModule,
      MatFormFieldModule,
      MatCardModule,
      MatInputModule,
      MatSnackBarModule,
      //Ng4LoadingSpinnerModule,
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      MatInputModule,
      MatButtonModule,
      MatSelectModule,
      MatIconModule,
      MatToolbarModule,
      MatSidenavModule,
      MatListModule,
      RouterModule.forRoot([
         {
           path: 'Scheme',
           component: AppAdminLayoutComponent,
           children: [
             { path: 'Add', component: SchemeComponent , canActivate: [AdminAuthGuardService] },
             { path: 'Edit/:schemeId', component: EditSchemeComponent , canActivate: [AdminAuthGuardService] },
             { path: 'All', component: AllSchemeComponent, canActivate: [AdminAuthGuardService]  }
           ]
         },
   
   
         { path: 'Login', component: LoginComponent },
         { path: 'AdminLogout', component: AdminLogoutComponent },
         { path: 'UserLogout', component: UserLogoutComponent },
   
         { path: '', redirectTo: "Login", pathMatch: 'full' },
         { path: '**', redirectTo: "Login", pathMatch: 'full' },
   
   
       ], { useHash: true })
     ],
     exports: [BsDatepickerModule],
     providers: [DatePipe, AdminAuthGuardService,UserAuthGuardService],
     bootstrap: [AppComponent]
   })
   export class AppModule { }
   
