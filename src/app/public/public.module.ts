import { NgModule }            from '@angular/core';
import { SharedModule }        from '../core/shared/shared.module';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent }     from './public.component';
import { LoginComponent } from './auth/login/containers/login/login.component';

@NgModule({
    imports: [
        SharedModule,
        PublicRoutingModule
    ],
    declarations: [
        PublicComponent,
        LoginComponent
    ],
    exports: [],
    providers:[]
})

export class PublicModule {
    constructor() {  }
}