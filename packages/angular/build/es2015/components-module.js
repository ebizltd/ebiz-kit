/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { defineCustomElements } from '@ebiz-kit/components/loader';
import { BooleanValueAccessor } from './directives/boolean-value-accessor';
import { NumericValueAccessor } from './directives/number-value-accessor';
import { RadioValueAccessor } from './directives/radio-value-accessor';
import { SelectValueAccessor } from './directives/select-value-accessor';
import { TextValueAccessor } from './directives/text-value-accessor';
import { MyComponent, MyButton, MyCheckbox, MyInput, MyPopover, MyRadio, MyRadioGroup, MyRange, } from './directives/proxies';
defineCustomElements(window);
/** @type {?} */
const DECLARATIONS = [
    // proxies
    MyComponent,
    MyButton,
    MyCheckbox,
    MyInput,
    MyPopover,
    MyRadio,
    MyRadioGroup,
    MyRange,
    // Value Accessors
    BooleanValueAccessor,
    NumericValueAccessor,
    RadioValueAccessor,
    SelectValueAccessor,
    TextValueAccessor,
];
export class ComponentsModule {
}
ComponentsModule.decorators = [
    { type: NgModule, args: [{
                declarations: DECLARATIONS,
                exports: DECLARATIONS,
                imports: [],
                providers: [],
            },] },
];
