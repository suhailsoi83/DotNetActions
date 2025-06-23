import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: [
  ]
})
export class PaymentDetailFormComponent implements OnInit {

  constructor(public service:PaymentDetailService, private toaster:ToastrService ) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    if(this.service.formData.paymentDetailId==0)
    this.insertRecoed(form);
    else
    this.updatetRecoed(form);
  }
  insertRecoed(form:NgForm){
    this.service.postPaymentDetail().subscribe(
      res=>{
        this.resetForm(form);
        this.toaster.success('Submitted Sucessfully', 'Payment Detail Registered');
      },
      err=>{console.log();}
      
    );
  }
  updatetRecoed(form:NgForm){
    this.service.putPaymentDetail().subscribe(
      res=>{
        this.resetForm(form);
        this.service.refreshList();
        this.toaster.info('Updated Sucessfully', 'Payment Detail Registered');
      },
      err=>{console.log();}
      
    );
  }

  resetForm(form:NgForm)
  {
form.form.reset();
this.service.formData = new PaymentDetail();
  }
}
