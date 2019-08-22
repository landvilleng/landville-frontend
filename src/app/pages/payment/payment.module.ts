import { paymentRoutes } from './payment.routing';
import { PinPaymentComponent } from './pin-payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TokenizedCardComponent } from './tokenized-card.component';
import { PinValidateComponent } from './pin-validate.component';
import { InternationalPaymentComponent } from './international-payment/international-payment.component';
import { InputErrorsComponent } from 'src/app/shared/input-errors/input-errors.component';
import { InternationalPaymentStatusComponent } from './international-payment-status/international-payment-status.component';



@NgModule({
  declarations: [TokenizedCardComponent, PinValidateComponent, InternationalPaymentComponent, InputErrorsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(paymentRoutes),
    HttpClientModule,
    NgxSpinnerModule,
    AngularFontAwesomeModule,
  ]
})
export class PaymentModule { }
