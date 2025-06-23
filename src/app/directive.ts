import {
  Directive,
  ElementRef,
  forwardRef,
  HostListener,
  OnDestroy,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector:
    'fhi-text-input[formControlName], fhi-text-input[formControl], fhi-text-input[ngModel]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FhiTextInputValueAccessorDirective),
      multi: true,
    },
  ],
})
export class FhiTextInputValueAccessorDirective
  implements ControlValueAccessor, OnDestroy
{
  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  constructor(private elementRef: ElementRef<any>) {}

  @HostListener('input', ['$event.target.value'])
  _handleInput(value: any): void {
    this.onChange(value);
  }

  @HostListener('blur')
  _handleBlur(): void {
    this.onTouched();
  }

  writeValue(value: any): void {
    this.elementRef.nativeElement.value = value;
  }
  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.elementRef.nativeElement.disabled = isDisabled;
  }
  ngOnDestroy(): void {}
}
