import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgmButtonModule } from './button/ngm-button.module';
import { NgmInputModule } from './input/ngm-input.module';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    exports: [
        NgmButtonModule,
        NgmInputModule,
    ]
})
export class ComponentsModule { }
