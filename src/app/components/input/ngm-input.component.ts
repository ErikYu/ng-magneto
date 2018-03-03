import { Component, Input, ElementRef } from '@angular/core';

export type InputSize = 'sm' | 'md' | 'lg';

@Component({
    selector: 'ngm-input',
    templateUrl: './ngm-input.component.html',
    styleUrls: ['./styles/ngm-input.component.less']
})
export class NgmInputComponent {
    private _prefix = 'mag-input';
    private _el: HTMLElement;
    private _size: InputSize = 'md';
    private _classMap;

    private ngmValue = '123'

    @Input() ngmPlaceholder: string;

    @Input()
    get ngmSize():InputSize {
        return this._size;
    }
    set ngmSize(val: InputSize) {
        this._size = {large: 'lg', small: 'sm', middle: 'md'}[val];
        this._setClass();
    }

    private _setClass() {
        this._classMap = {
            [`${this._prefix}-${this._size}`]: true
        }
    }

    constructor(private elementRef: ElementRef) {
        this._el = this.elementRef.nativeElement;
    }
}
