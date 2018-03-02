import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgmButtonComponent } from './ngm-button.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [NgmButtonComponent],
    exports: [NgmButtonComponent]
})
export class NgmButtonModule { }
