import {Component} from "@angular/core";
import {MenuItem} from "primeng/components/common/api";

@Component({
    moduleId: module.id,
    selector: 'side-menu-component',
    templateUrl: 'side-menu.component.html'
})
export class SideMenuComponent{

    items: MenuItem[];

    ngOnInit() {
        this.items = [
            {label: 'Nuevo Projecto', icon: 'fa-plus'},
            {label: 'Mis HHRR', icon: 'fa-user'},
        ];
    }
}
