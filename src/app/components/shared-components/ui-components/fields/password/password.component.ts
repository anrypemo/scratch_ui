import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild
} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

const INPUT_TYPES = {
  text: "text",
  password: "password"
};


@Component({
  selector: 'ui-password-input',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UiFieldPasswordComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class UiFieldPasswordComponent implements AfterViewInit, OnChanges, ControlValueAccessor {

  public textValue = "";

  @Input()
  get value() {
    return this.textValue;
  }

  set value(val) {
    this.textValue = val;
    this.valueChange.emit(this.textValue);
    this.propagateChange(val);
  }

  @Output()
  valueChange = new EventEmitter<string>();

  @Input()
  public disabled: boolean = false;

  @Input()
  public placeholder: string = "";

  @Input()
  public autofocus: boolean = false;

  @ViewChild("uiText")
  protected uiInput: ElementRef;

  private viewInited: boolean;

  public focused: boolean = false;

  public type = INPUT_TYPES.password;

  /** @internal
   *  Only for ControlValueAccessor implementation
   */
  public propagateChange = (_: any) => {
  };

  /** @internal
   *  Only for ControlValueAccessor implementation
   */
  public propagateTouch = (_: any) => {
  };

  /** @internal
   *  Only for ControlValueAccessor implementation
   */
  public registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  /** @internal
   *  Only for ControlValueAccessor implementation
   */
  public registerOnTouched(fn: any): void {
    this.propagateTouch = fn;
  }

  /** @internal
   *  Only for ControlValueAccessor implementation
   */
  public writeValue(value: any): void {
    this.value = value;
    this.cdr.markForCheck();
  }

  /** @internal
   *  Only for ControlValueAccessor implementation
   */
  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.cdr.markForCheck();
  }


  constructor(private cdr: ChangeDetectorRef) {

  }

  public ngAfterViewInit(): void {
    this.viewInited = true;

    if (this.autofocus) {
      this.focus();
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.autofocus && this.viewInited) {
      this.focus();
    }
  }

  public focus(): void {
    this.focused = true;
  }

  public _onSubmitValueChange(event: Event): void {

  }

  public _onKeyDown(event) {
  }

  public _onFocus(event) {
    this.focus();
  }

  public _onBlur(event) {
    this.focused = false;
  }

  public unMaskValue() {
    this.type = INPUT_TYPES.text;
  }

  public maskValue(){
    this.type = INPUT_TYPES.password;
  }


}
