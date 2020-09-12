import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WarehouseMapComponent} from './components/warehouse-map/warehouse-map.component';
import {ProductPageComponent} from './components/product-page/product-page.component';
import {PersonsPageComponent} from './components/persons-page/persons-page.component';

const routes: Routes = [
  {path: 'home', component: WarehouseMapComponent},
  {path: 'product-management', component: ProductPageComponent},
  {path: 'client-management', component: PersonsPageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
