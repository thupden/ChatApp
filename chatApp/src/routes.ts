import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ChatroomComponent } from './app/chatroom/chatroom.component';
import { LoginFormComponent } from './app/login-form/login-form.component';
import { SignupFormComponent } from './app/signup-form/signup-form.component';

//setup route constant where you define your routes
const routes: Routes = [
    {path: 'signup', component: SignupFormComponent},
    {path: 'login', component: LoginFormComponent},
    {path: 'chat', component: ChatroomComponent},
    {path: '', redirectTo: '/login', pathMatch:'full'},
];

//configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutesModule{}