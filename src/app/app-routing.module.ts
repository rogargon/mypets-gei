import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from './login-basic/loggedin.guard';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './error-handler/error-alert/not-found.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserDeleteComponent } from './user/user-delete/user-delete.component';
import { ShelterVolunteersListComponent } from './shelter/volunteer-list/volunteer-list.component';
import { ShelterVolunteersEditComponent } from './shelter/volunteer-edit/volunteer-edit.component';
import { ShelterVolunteersDeleteComponent } from './shelter/volunteer-delete/volunteer-delete.component';
import { ShelterVolunteersAddComponent } from './shelter/volunteer-add/volunteer-add.component';
import { ShelterListComponent } from './shelter/shelter-list/shelter-list.component';
import { CertificateAddComponent } from './shelter/certificate-add/certificate-add.component';

const routes: Routes = [
  { path: 'shelter/:id/certificate/add', component: CertificateAddComponent, canActivate: [LoggedInGuard]},
  { path: 'shelter/:id/volunteers/add', component: ShelterVolunteersAddComponent, canActivate: [LoggedInGuard]},
  { path: 'shelter/:id/volunteers/:vId/delete', component: ShelterVolunteersDeleteComponent, canActivate: [LoggedInGuard]},
  { path: 'shelter/:id/volunteers/:vId', component: ShelterVolunteersEditComponent, canActivate: [LoggedInGuard]},
  { path: 'shelter/:id/volunteers', component: ShelterVolunteersListComponent, canActivate: [LoggedInGuard]},
  { path: 'users/create', component: UserRegisterComponent},
  { path: 'users/:id/delete', component: UserDeleteComponent, canActivate: [LoggedInGuard]},
  { path: 'users/:id/edit', component: UserEditComponent, canActivate: [LoggedInGuard]},
  { path: 'users/:id', component: UserDetailComponent, canActivate: [LoggedInGuard]},
  { path: 'users', component: UserListComponent, canActivate: [LoggedInGuard]},
  { path: 'shelters', component: ShelterListComponent },
  { path: 'about', component: AboutComponent},
  { path: '404', component: NotFoundComponent},
  { path: '', redirectTo: 'about', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
