"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dashboard_component_1 = require("./dashboard.component");
var primeng_1 = require("primeng/primeng");
var side_menu_component_1 = require("./menu/side-menu.component");
var menu_bar_component_1 = require("./menu-bar/menu-bar.component");
var project_panel_component_1 = require("./project-panel/project-panel.component");
var animations_1 = require("@angular/platform-browser/animations");
var DashBoardModule = (function () {
    function DashBoardModule() {
    }
    return DashBoardModule;
}());
DashBoardModule = __decorate([
    core_1.NgModule({
        imports: [primeng_1.ButtonModule, primeng_1.MenuModule, primeng_1.InputTextModule, primeng_1.MenubarModule, primeng_1.PanelModule, animations_1.BrowserAnimationsModule],
        declarations: [dashboard_component_1.DashboardComponent, side_menu_component_1.SideMenuComponent, menu_bar_component_1.MenuBarComponent, project_panel_component_1.ProjectPanelComponent],
        exports: [dashboard_component_1.DashboardComponent]
    })
], DashBoardModule);
exports.DashBoardModule = DashBoardModule;
//# sourceMappingURL=dashboard.module.js.map