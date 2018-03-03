import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgmInputComponent } from './ngm-input.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    declarations: [NgmInputComponent],
    exports: [NgmInputComponent]
})
export class NgmInputModule { }
