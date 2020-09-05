import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WarehouseMapComponent} from './warehouse-map/warehouse-map.component';
import {ProductPageComponent} from './product-page/product-page.component';
import {DynamicContentPageComponent} from './dynamic-content-page/dynamic-content-page.component';

const routes: Routes = [
  {path: 'home', component: WarehouseMapComponent},
  {path: 'product-management', component: ProductPageComponent},
  {path: 'dynamic', component: DynamicContentPageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
