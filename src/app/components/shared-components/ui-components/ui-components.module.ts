import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {UiFieldInputComponent} from "./fields/text/text.component";
import {UiButtonComponent} from "./button/button.component";


@NgModule({
  declarations: [
    UiFieldInputComponent,
    UiButtonComponent
  ],
  imports: [
    FormsModule,
  ],
  exports: [UiFieldInputComponent,
    UiButtonComponent],
  bootstrap: [UiFieldInputComponent,
    UiButtonComponent]
})
export class UiComponentsModule {
}
