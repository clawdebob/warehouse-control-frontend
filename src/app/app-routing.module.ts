import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WarehouseMapComponent} from './warehouse-map/warehouse-map.component';

const routes: Routes = [
  {path: 'home', component: WarehouseMapComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
