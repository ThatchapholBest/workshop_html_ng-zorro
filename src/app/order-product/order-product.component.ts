import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.scss']
})
export class OrderProductComponent {
  orderForm: FormGroup;
  selectedValue = null;
  products = [
    { value: 'product1', label: 'สินค้าที่ 1' },
    { value: 'product2', label: 'สินค้าที่ 2' },
    { value: 'product3', label: 'สินค้าที่ 3' },
  ];

  isVisible = false;
  formData: any;

  constructor(private fb: FormBuilder) {
    this.orderForm = this.fb.group({
      customerName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      selectedProduct: [null, Validators.required],
      quantity: ['',Validators.required]
    });
  }

  submitForm(): void {
    if (this.orderForm.valid) {
      console.log('submit', this.orderForm.value);
      this.formData = this.orderForm.value;
      this.isVisible = true;
    } else {
      Object.values(this.orderForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity();
          this.isVisible = false;
        }
      });
    }
  }

  // showModal(): void {
  //   if (this.orderForm.valid) {
  //     this.isVisible = true;
  //   } else {
  //     this.isVisible = false;
  //   }
  // }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
