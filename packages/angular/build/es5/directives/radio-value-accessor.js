/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor } from './value-accessor';
var RadioValueAccessor = /** @class */ (function (_super) {
    tslib_1.__extends(RadioValueAccessor, _super);
    function RadioValueAccessor(el) {
        return _super.call(this, el) || this;
    }
    RadioValueAccessor.decorators = [
        { type: Directive, args: [{
                    /* tslint:disable-next-line:directive-selector */
                    selector: 'my-radio',
                    host: {
                        '(mySelect)': 'handleChangeEvent($event.target.checked)'
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: RadioValueAccessor,
                            multi: true
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    RadioValueAccessor.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return RadioValueAccessor;
}(ValueAccessor));
export { RadioValueAccessor };
