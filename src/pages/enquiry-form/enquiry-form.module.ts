import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnquiryFormPage } from './enquiry-form';

@NgModule({
  declarations: [
    EnquiryFormPage,
  ],
  imports: [
    IonicPageModule.forChild(EnquiryFormPage),
  ],
})
export class EnquiryFormPageModule {}
