import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { WarehouseMapComponent } from './warehouse-map/warehouse-map.component';
import { MenuComponent } from './menu/menu.component';
import {ProductPageAddDialogComponent, ProductPageComponent} from './product-page/product-page.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import {DynamicContentPageComponent} from './dynamic-content-page/dynamic-content-page.component';
import {DataCardComponent} from './data-card/data-card.component';
import {CardWrapperComponent} from './card-wrapper/card-wrapper.component';
import {AdDirective} from './card-wrapper/ad.directive';
import {DescriptionCardComponent} from './description-card/description-card.component';

@NgModule({
  declarations: [
    AppComponent,
    WarehouseMapComponent,
    MenuComponent,
    ProductPageComponent,
    ProductPageAddDialogComponent,
    DynamicContentPageComponent,
    DataCardComponent,
    CardWrapperComponent,
    AdDirective,
    DescriptionCardComponent
  ],
  entryComponents: [
    DataCardComponent,
    DescriptionCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
