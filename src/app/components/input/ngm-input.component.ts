import { Component, Input, ElementRef, HostListener, forwardRef, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type InputSize = 'sm' | 'md' | 'lg';

@Component({
    selector: 'ngm-input',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './ngm-input.component.html',
    styleUrls: ['./styles/ngm-input.component.less'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NgmInputComponent),
        multi: true
    }],
})
export class NgmInputComponent implements ControlValueAccessor {
    private _prefix = 'mag-input';
    private _el: HTMLElement;
    private _size: InputSize = 'md';
    private _classMap;
    private _composing = false; // 正在输入

    private _value: string;

    @Input() ngmPlaceholder: string;

    @Input()
    get ngmSize(): InputSize {
        return this._size;
    }
    set ngmSize(val: InputSize) {
        this._size = { large: 'lg', small: 'sm', middle: 'md' }[val];
        this._setClass();
    }

    private _setClass() {
        this._classMap = {
            [`${this._prefix}-${this._size}`]: true
        }
    }

    // ngModel hack
    onChange: (val: string) => void = () => null;
    onTouched: () => void = () => null;

    // 监听宿主元素的开始输入事件
    // todo: still no usage, need bugfix
    @HostListener('compositionstart', ['$event'])
    compositionStart(e) {
        console.log(e);
        this._composing = true;
    }

    @HostListener('compositionend', ['$event'])
    compositionEnd(e) {
        console.log(e)
        this._composing = false;
        this.onChange(this._value);
    }

    // ngModel 绑定数据

    get ngmValue() {
        return this._value;
    }

    set ngmValue(val: string) {
        if ((this._value === val) || ((this._value == null) && (val == null))) {
            return;
        }
        this._value = val;
        if (!this._composing) {
            this.onChange(val);
        }
    }

    constructor(private elementRef: ElementRef) {
        this._el = this.elementRef.nativeElement;
    }

    writeValue(val: string) {
        this._value = val;
    }

    registerOnChange(fn) {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }
}
