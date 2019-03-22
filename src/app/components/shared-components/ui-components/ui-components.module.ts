import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {UiFieldInputComponent} from "./fields/text/text.component";
import {UiButtonComponent} from "./button/button.component";
import {UiErrorLabelComponent} from "./error-label/error.label.component";


@NgModule({
  declarations: [
    UiFieldInputComponent,
    UiButtonComponent,
    UiErrorLabelComponent
  ],
  imports: [
    FormsModule,
  ],
  exports: [
    UiFieldInputComponent,
    UiButtonComponent,
    UiErrorLabelComponent
  ],
  bootstrap: [
    UiFieldInputComponent,
    UiButtonComponent,
    UiErrorLabelComponent
  ]
})
export class UiComponentsModule {
}
