import { NgModule }           from "@angular/core";
import { SharedModule }       from "src/app/core/shared/shared.module";
import { UsersComponent }     from "./users.component";
import { UsersRoutingModule } from "./users-routing.module";

@NgModule({
    imports:[
        SharedModule,
        UsersRoutingModule
    ],
    declarations:[
        UsersComponent
    ],
    exports:[],
    providers:[]
})

export class UsersModule {
    constructor() {  }
}