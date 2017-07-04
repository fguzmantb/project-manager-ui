import {Component, OnInit} from "@angular/core";
import {MenuItem} from 'primeng/primeng';

@Component({
    moduleId: module.id,
    selector: 'menu-bar-component',
    templateUrl: 'menu-bar.component.html'
})
export class MenuBarComponent{

    items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'File',
                icon: 'fa-file-o',
                items: [{
                    label: 'New',
                    icon: 'fa-plus',
                    items: [
                        {label: 'Project'},
                        {label: 'Other'},
                    ]
                },
                    {label: 'Open'},
                    {label: 'Quit'}
                ]
            }
        ];
    }
}