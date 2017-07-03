"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var primeng_1 = require("primeng/primeng");
var menu_bar_component_1 = require("./menu-bar.component");
var MenuBarModule = (function () {
    function MenuBarModule() {
    }
    return MenuBarModule;
}());
MenuBarModule = __decorate([
    core_1.NgModule({
        imports: [primeng_1.MenubarModule],
        declarations: [menu_bar_component_1.MenuBarComponent],
        exports: [menu_bar_component_1.MenuBarComponent]
    })
], MenuBarModule);
exports.MenuBarModule = MenuBarModule;
//# sourceMappingURL=menu-bar.module.js.map