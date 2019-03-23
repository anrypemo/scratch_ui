import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {UiFieldInputComponent} from "./fields/text/text.component";
import {UiButtonComponent} from "./button/button.component";
import {UiErrorLabelComponent} from "./error-label/error.label.component";
import {UiFieldPasswordComponent} from "./fields/password/password.component";


@NgModule({
  declarations: [
    UiFieldInputComponent,
    UiButtonComponent,
    UiErrorLabelComponent,
    UiFieldPasswordComponent
  ],
  imports: [
    FormsModule,
  ],
  exports: [
    UiFieldInputComponent,
    UiButtonComponent,
    UiErrorLabelComponent,
    UiFieldPasswordComponent
  ],
  bootstrap: [
    UiFieldInputComponent,
    UiButtonComponent,
    UiErrorLabelComponent,
    UiFieldPasswordComponent
  ]
})
export class UiComponentsModule {
}
