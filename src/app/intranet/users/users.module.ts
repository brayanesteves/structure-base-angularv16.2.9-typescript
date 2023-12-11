import { NgModule }                from "@angular/core";
import { SharedModule }            from "src/app/core/shared/shared.module";
import { UsersComponent }          from "./users.component";
import { UsersRoutingModule }      from "./users-routing.module";
import { UsersListComponent }      from "./containers/users-list/users-list.component";
import { UsersListTableComponent } from "./components/user-list-table/users-list-table.component";

@NgModule({
    imports:[
        SharedModule,
        UsersRoutingModule
    ],
    declarations:[
        UsersComponent,
        UsersListComponent,
        UsersListTableComponent
    ],
    exports:[],
    providers:[]
})

export class UsersModule {
    constructor() {  }
}