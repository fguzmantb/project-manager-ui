import { NgModule }      from '@angular/core';
import {MenubarModule} from 'primeng/primeng';
import {MenuBarComponent} from "./menu-bar.component";

@NgModule({
    imports:      [ MenubarModule ],
    declarations: [ MenuBarComponent ],
    exports: [ MenuBarComponent]
})
export class MenuBarModule { }
