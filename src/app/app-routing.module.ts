import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderProductComponent } from './order-product/order-product.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  { path: '', redirectTo: '/order-product', pathMatch: 'full'},
  { path: 'order-product', component: OrderProductComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'resume', component: ResumeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
