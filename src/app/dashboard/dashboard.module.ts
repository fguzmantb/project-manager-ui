import { NgModule }      from '@angular/core';
import {DashboardComponent} from "./dashboard.component";
import {MenuBarModule} from "./menu-bar/menu-bar.module";
import {ButtonModule} from 'primeng/primeng';

@NgModule({
    imports:      [ MenuBarModule, ButtonModule],
    declarations: [ DashboardComponent ],
    exports: [ DashboardComponent]
})
export class DashBoardModule { }
