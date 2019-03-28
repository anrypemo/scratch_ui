import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {UiFieldInputComponent} from "./fields/text/text.component";
import {UiButtonComponent} from "./button/button.component";
import {UiErrorLabelComponent} from "./error-label/error.label.component";
import {UiFieldPasswordComponent} from "./fields/password/password.component";
import {UiOverlayComponent} from "./overlay/overlay.component";
import {ClickOutsideDirective} from "./ui-directives/click-outside/click-outside";
import {UiLoaderComponent} from './loader/loader.component';
import {BrowserModule} from "@angular/platform-browser";
import {UiPopupComponent} from './popup/popup.component';
import {UiAttachmentComponent} from './attachment/attachment.component';
import {DropFilesDirective} from "./ui-directives/drop-files/drop-files";


@NgModule({
  declarations: [
    UiFieldInputComponent,
    UiButtonComponent,
    UiErrorLabelComponent,
    UiFieldPasswordComponent,
    UiOverlayComponent,
    ClickOutsideDirective,
    UiLoaderComponent,
    UiPopupComponent,
    UiAttachmentComponent,
    DropFilesDirective
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  exports: [
    UiFieldInputComponent,
    UiButtonComponent,
    UiErrorLabelComponent,
    UiFieldPasswordComponent,
    ClickOutsideDirective,
    UiLoaderComponent,
    UiOverlayComponent,
    UiPopupComponent,
    UiAttachmentComponent,
    DropFilesDirective
  ],
  bootstrap: [
    UiFieldInputComponent,
    UiButtonComponent,
    UiErrorLabelComponent,
    UiFieldPasswordComponent,
    UiLoaderComponent,
    UiOverlayComponent,
    UiPopupComponent,
    UiAttachmentComponent
  ]
})
export class UiComponentsModule {
}
