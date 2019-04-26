import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GuestGuard } from '../core/guards/guest.guard';

const routes: Routes = [
    { path: 'sign-up', loadChildren: './sign-up/sign-up.module#SignUpModule', canActivate: [GuestGuard] },
    { path: 'sign-in', loadChildren: './sign-in/sign-in.module#SignInModule', canActivate: [GuestGuard] },
    { path: '', redirectTo: 'sign-in', pathMatch: 'full'}
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [GuestGuard]
})
export class AuthRoutingModule {}
