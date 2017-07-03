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
var menu_bar_module_1 = require("./menu-bar/menu-bar.module");
var primeng_1 = require("primeng/primeng");
var DashBoardModule = (function () {
    function DashBoardModule() {
    }
    return DashBoardModule;
}());
DashBoardModule = __decorate([
    core_1.NgModule({
        imports: [menu_bar_module_1.MenuBarModule, primeng_1.ButtonModule],
        declarations: [dashboard_component_1.DashboardComponent],
        exports: [dashboard_component_1.DashboardComponent]
    })
], DashBoardModule);
exports.DashBoardModule = DashBoardModule;
//# sourceMappingURL=dashboard.module.js.map