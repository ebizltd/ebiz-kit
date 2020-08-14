/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';
var MyButton = /** @class */ (function () {
    function MyButton(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['myFocus', 'myBlur']);
    }
    MyButton.decorators = [
        { type: Component, args: [{
                    selector: 'my-button',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    inputs: ['buttonType', 'color', 'disabled', 'download', 'expand', 'fill', 'href', 'mode', 'rel', 'shape', 'size', 'strong', 'target', 'type'],
                    outputs: ['myFocus', 'myBlur']
                },] },
    ];
    /** @nocollapse */
    MyButton.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    MyButton = tslib_1.__decorate([
        ProxyCmp({
            inputs: ['buttonType', 'color', 'disabled', 'download', 'expand', 'fill', 'href', 'mode', 'rel', 'shape', 'size', 'strong', 'target', 'type']
        }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], MyButton);
    return MyButton;
}());
export { MyButton };
if (false) {
    /**
     * Emitted when the button has focus.
     * @type {?}
     */
    MyButton.prototype.myFocus;
    /**
     * Emitted when the button loses focus.
     * @type {?}
     */
    MyButton.prototype.myBlur;
    /**
     * @type {?}
     * @protected
     */
    MyButton.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    MyButton.prototype.z;
}
var MyCheckbox = /** @class */ (function () {
    function MyCheckbox(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['myChange', 'myFocus', 'myBlur']);
    }
    MyCheckbox.decorators = [
        { type: Component, args: [{
                    selector: 'my-checkbox',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    inputs: ['checked', 'color', 'disabled', 'indeterminate', 'mode', 'name', 'value'],
                    outputs: ['myChange', 'myFocus', 'myBlur']
                },] },
    ];
    /** @nocollapse */
    MyCheckbox.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    MyCheckbox = tslib_1.__decorate([
        ProxyCmp({
            inputs: ['checked', 'color', 'disabled', 'indeterminate', 'mode', 'name', 'value']
        }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], MyCheckbox);
    return MyCheckbox;
}());
export { MyCheckbox };
if (false) {
    /**
     * Emitted when the checked property has changed.
     * @type {?}
     */
    MyCheckbox.prototype.myChange;
    /**
     * Emitted when the toggle has focus.
     * @type {?}
     */
    MyCheckbox.prototype.myFocus;
    /**
     * Emitted when the toggle loses focus.
     * @type {?}
     */
    MyCheckbox.prototype.myBlur;
    /**
     * @type {?}
     * @protected
     */
    MyCheckbox.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    MyCheckbox.prototype.z;
}
var MyComponent = /** @class */ (function () {
    function MyComponent(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['myCustomEvent']);
    }
    MyComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-component',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    inputs: ['age', 'first', 'kidsNames', 'last', 'middle'],
                    outputs: ['myCustomEvent']
                },] },
    ];
    /** @nocollapse */
    MyComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    MyComponent = tslib_1.__decorate([
        ProxyCmp({
            inputs: ['age', 'first', 'kidsNames', 'last', 'middle']
        }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], MyComponent);
    return MyComponent;
}());
export { MyComponent };
if (false) {
    /**
     * Testing an event without value
     * @type {?}
     */
    MyComponent.prototype.myCustomEvent;
    /**
     * @type {?}
     * @protected
     */
    MyComponent.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    MyComponent.prototype.z;
}
var MyInput = /** @class */ (function () {
    function MyInput(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['myInput', 'myChange', 'myBlur', 'myFocus']);
    }
    MyInput.decorators = [
        { type: Component, args: [{
                    selector: 'my-input',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    inputs: ['accept', 'autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'clearInput', 'clearOnEdit', 'color', 'disabled', 'enterkeyhint', 'inputmode', 'max', 'maxlength', 'min', 'minlength', 'mode', 'multiple', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'size', 'spellcheck', 'step', 'type', 'value'],
                    outputs: ['myInput', 'myChange', 'myBlur', 'myFocus']
                },] },
    ];
    /** @nocollapse */
    MyInput.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    MyInput = tslib_1.__decorate([
        ProxyCmp({
            inputs: ['accept', 'autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'clearInput', 'clearOnEdit', 'color', 'disabled', 'enterkeyhint', 'inputmode', 'max', 'maxlength', 'min', 'minlength', 'mode', 'multiple', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'size', 'spellcheck', 'step', 'type', 'value'],
            methods: ['setFocus', 'getInputElement']
        }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], MyInput);
    return MyInput;
}());
export { MyInput };
if (false) {
    /**
     * Emitted when a keyboard input occurred.
     * @type {?}
     */
    MyInput.prototype.myInput;
    /**
     * Emitted when the value has changed.
     * @type {?}
     */
    MyInput.prototype.myChange;
    /**
     * Emitted when the input loses focus.
     * @type {?}
     */
    MyInput.prototype.myBlur;
    /**
     * Emitted when the input has focus.
     * @type {?}
     */
    MyInput.prototype.myFocus;
    /**
     * @type {?}
     * @protected
     */
    MyInput.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    MyInput.prototype.z;
}
var MyPopover = /** @class */ (function () {
    function MyPopover(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['myPopoverDidPresent', 'myPopoverWillPresent', 'myPopoverWillDismiss', 'myPopoverDidDismiss']);
    }
    MyPopover.decorators = [
        { type: Component, args: [{
                    selector: 'my-popover',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    inputs: ['animated', 'backdropDismiss', 'component', 'componentProps', 'cssClass', 'event', 'keyboardClose', 'mode', 'showBackdrop', 'translucent'],
                    outputs: ['myPopoverDidPresent', 'myPopoverWillPresent', 'myPopoverWillDismiss', 'myPopoverDidDismiss']
                },] },
    ];
    /** @nocollapse */
    MyPopover.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    MyPopover = tslib_1.__decorate([
        ProxyCmp({
            inputs: ['animated', 'backdropDismiss', 'component', 'componentProps', 'cssClass', 'event', 'keyboardClose', 'mode', 'showBackdrop', 'translucent'],
            methods: ['present', 'dismiss', 'onDidDismiss', 'onWillDismiss']
        }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], MyPopover);
    return MyPopover;
}());
export { MyPopover };
if (false) {
    /**
     * Emitted after the popover has presented.
     * @type {?}
     */
    MyPopover.prototype.myPopoverDidPresent;
    /**
     * Emitted before the popover has presented.
     * @type {?}
     */
    MyPopover.prototype.myPopoverWillPresent;
    /**
     * Emitted before the popover has dismissed.
     * @type {?}
     */
    MyPopover.prototype.myPopoverWillDismiss;
    /**
     * Emitted after the popover has dismissed.
     * @type {?}
     */
    MyPopover.prototype.myPopoverDidDismiss;
    /**
     * @type {?}
     * @protected
     */
    MyPopover.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    MyPopover.prototype.z;
}
var MyRadio = /** @class */ (function () {
    function MyRadio(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['myFocus', 'myBlur', 'mySelect']);
    }
    MyRadio.decorators = [
        { type: Component, args: [{
                    selector: 'my-radio',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    inputs: ['color', 'disabled', 'mode', 'name', 'value'],
                    outputs: ['myFocus', 'myBlur', 'mySelect']
                },] },
    ];
    /** @nocollapse */
    MyRadio.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    MyRadio = tslib_1.__decorate([
        ProxyCmp({
            inputs: ['color', 'disabled', 'mode', 'name', 'value']
        }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], MyRadio);
    return MyRadio;
}());
export { MyRadio };
if (false) {
    /**
     * Emitted when the radio button has focus.
     * @type {?}
     */
    MyRadio.prototype.myFocus;
    /**
     * Emitted when the radio button loses focus.
     * @type {?}
     */
    MyRadio.prototype.myBlur;
    /**
     * Emitted when the radio button loses focus.
     * @type {?}
     */
    MyRadio.prototype.mySelect;
    /**
     * @type {?}
     * @protected
     */
    MyRadio.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    MyRadio.prototype.z;
}
var MyRadioGroup = /** @class */ (function () {
    function MyRadioGroup(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['myChange']);
    }
    MyRadioGroup.decorators = [
        { type: Component, args: [{
                    selector: 'my-radio-group',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    inputs: ['allowEmptySelection', 'name', 'value'],
                    outputs: ['myChange']
                },] },
    ];
    /** @nocollapse */
    MyRadioGroup.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    MyRadioGroup = tslib_1.__decorate([
        ProxyCmp({
            inputs: ['allowEmptySelection', 'name', 'value']
        }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], MyRadioGroup);
    return MyRadioGroup;
}());
export { MyRadioGroup };
if (false) {
    /**
     * Emitted when the value has changed.
     * @type {?}
     */
    MyRadioGroup.prototype.myChange;
    /**
     * @type {?}
     * @protected
     */
    MyRadioGroup.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    MyRadioGroup.prototype.z;
}
var MyRange = /** @class */ (function () {
    function MyRange(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['myChange', 'myFocus', 'myBlur']);
    }
    MyRange.decorators = [
        { type: Component, args: [{
                    selector: 'my-range',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    inputs: ['color', 'debounce', 'disabled', 'dualKnobs', 'max', 'min', 'mode', 'name', 'pin', 'snaps', 'step', 'ticks', 'value'],
                    outputs: ['myChange', 'myFocus', 'myBlur']
                },] },
    ];
    /** @nocollapse */
    MyRange.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    MyRange = tslib_1.__decorate([
        ProxyCmp({
            inputs: ['color', 'debounce', 'disabled', 'dualKnobs', 'max', 'min', 'mode', 'name', 'pin', 'snaps', 'step', 'ticks', 'value']
        }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], MyRange);
    return MyRange;
}());
export { MyRange };
if (false) {
    /**
     * Emitted when the value property has changed.
     * @type {?}
     */
    MyRange.prototype.myChange;
    /**
     * Emitted when the range has focus.
     * @type {?}
     */
    MyRange.prototype.myFocus;
    /**
     * Emitted when the range loses focus.
     * @type {?}
     */
    MyRange.prototype.myBlur;
    /**
     * @type {?}
     * @protected
     */
    MyRange.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    MyRange.prototype.z;
}
