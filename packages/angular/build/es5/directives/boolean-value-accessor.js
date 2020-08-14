/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor } from './value-accessor';
var BooleanValueAccessor = /** @class */ (function (_super) {
    tslib_1.__extends(BooleanValueAccessor, _super);
    function BooleanValueAccessor(el) {
        return _super.call(this, el) || this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    BooleanValueAccessor.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.el.nativeElement.checked = this.lastValue = value == null ? false : value;
    };
    BooleanValueAccessor.decorators = [
        { type: Directive, args: [{
                    /* tslint:disable-next-line:directive-selector */
                    selector: 'my-checkbox',
                    host: {
                        '(myChange)': 'handleChangeEvent($event.target.checked)'
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: BooleanValueAccessor,
                            multi: true
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    BooleanValueAccessor.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return BooleanValueAccessor;
}(ValueAccessor));
export { BooleanValueAccessor };
