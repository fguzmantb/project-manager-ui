import { NgModule }      from '@angular/core';
import {DashboardComponent} from "./dashboard.component";
import {ButtonModule, MenubarModule, InputTextModule, MenuModule, PanelModule} from 'primeng/primeng';
import {SideMenuComponent} from "./menu/side-menu.component";
import {MenuBarComponent} from "./menu-bar/menu-bar.component";
import {ProjectPanelComponent} from "./project-panel/project-panel.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    imports:      [ ButtonModule, MenuModule, InputTextModule, MenubarModule, PanelModule, BrowserAnimationsModule],
    declarations: [ DashboardComponent, SideMenuComponent, MenuBarComponent, ProjectPanelComponent],
    exports: [ DashboardComponent]
})
export class DashBoardModule { }
