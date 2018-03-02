import { Component, Input, ElementRef, Renderer2, AfterContentInit } from '@angular/core';

export type NgmButtonType = 'primary' | 'warning'  | 'success' | 'info' | 'danger';
export type NgmButtonSize = 'small' | 'large' | 'danger';

@Component({
    selector: '[ngm-button]',
    templateUrl: './ngm-button.component.html',
    // styleUrls: ['./ngm-button.component.less']
})

export class NgmButtonComponent implements AfterContentInit {
    private _prefix: string = 'mag-btn';
    private _el: HTMLElement;
    private _type: NgmButtonType;
    private _size: NgmButtonSize;
    private _classArr: Array<string> = [];

    @Input()
    get ngmType(): NgmButtonType {
        return this._type;
    }
    set ngmType(val: NgmButtonType) {
        this._type = val;
        this._setClass();
    }

    @Input()
    get ngmSize(): NgmButtonSize {
        return this._size;
    }
    set ngmSize(val: NgmButtonSize) {
        this._size = val;
        this._setClass();
    }

    private _setClass(): void {
        this._classArr = [
            this.ngmType && `${this._prefix}-${this.ngmType}`,
            this.ngmSize && `${this._prefix}-${this.ngmSize}`,
        ].filter(item => {
            return !!item;
        })
        for (let _class of this._classArr) {
            this._renderer.addClass(this._el, _class);
        }
    }

    constructor(
        private _elementRef: ElementRef,
        private _renderer: Renderer2,
    ) {
        this._el = this._elementRef.nativeElement;
        this._renderer.addClass(this._el, 'mag-btn')
    }

    ngAfterContentInit() {
        this._setClass()
    }
}
