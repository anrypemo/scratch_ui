import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild
} from "@angular/core";


@Component({
  selector: 'ui-field-input',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.less'],
  host: {"[class.ui-text-input]": "true"},
})
export class UiFieldInputComponent implements AfterViewInit, OnChanges {

  public textValue = "";

  @Input()
  get value() {
    return this.textValue;
  }

  set value(val) {
    this.textValue = val;
    this.valueChange.emit(this.textValue)
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

  constructor(cdr: ChangeDetectorRef) {

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

}
