import { NgModule }                         from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }                     from '@angular/router';
import { LoginBoxComponent }                from './components/login-box/login-box.component';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    declarations: [LoginBoxComponent],
    exports: [
        LoginBoxComponent,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    providers: []
})

export class SharedModule {
    constructor() {  }
}