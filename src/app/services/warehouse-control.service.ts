import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Product} from '../types/product.const';
import {Person} from '../types/person.const';

// TODO: implement ajax calls to backend in future

@Injectable({
  providedIn: 'root'
})
export class WarehouseControlService {

  constructor() { }

  getProducts(): Observable<Array<Product>> {
    return of([
      {serial: 'cc80cf03', name: 'Apple Smart TV', company: 'Apple', place: 1, row: 1, column: 1},
      {serial: 'cc80cf06', name: 'Oculus Rift VR Headset', company: 'Facebook', place: 2, row: 1, column: 1},
      {serial: 'cc12cf06', name: 'Sony Playstation 4', company: 'Sony', place: 3, row: 1, column: 1},
      {serial: 'cc1200fa', name: 'Nintendo Switch', company: 'Nintendo', place: 4, row: 1, column: 1},
      {serial: 'cc11cfaa', name: 'Xbox One', company: 'Microsoft', place: 5, row: 1, column: 1},
      {serial: 'cc55cfaa', name: 'Honor 20', company: 'Huawei', place: 6, row: 1, column: 1},
    ]);
  }

  getPersons(): Observable<Array<Person>> {
    return of([
      {id: 1, name: 'Jonh Doe', type: 1, address: 'Vice city, Little Havana st, h. 5', email: 'john@mail.com', phone: '555-3456'},
      {id: 2, name: 'Claude Speed', type: 2, address: 'Liberty City, Vicita Gardens dr., h. 7', email: 'claude@mail.com', phone: '555-5678'},
      {id: 3, name: 'Carl Jonhson', type: 1, address: 'Los Santos, Groove st., h. 3', email: 'cj@mail.com', phone: '555-7777'}
    ]);
  }

  getOrders(): Observable<Array<Order>> {
    return of([
      {id: 1, serial: 'cc80cf03', type: 1, clientId: 1, date: '20.02.2018'}
    ]);
  }

}
