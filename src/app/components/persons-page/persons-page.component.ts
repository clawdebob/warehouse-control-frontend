import { Component, OnInit } from '@angular/core';
import {WarehouseControlService} from '../../services/warehouse-control.service';
import {MatTableDataSource} from '@angular/material/table';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-persons-page',
  templateUrl: './persons-page.component.html',
  styleUrls: ['./persons-page.component.scss']
})
export class PersonsPageComponent implements OnInit {
  private personsList = null;
  public sourceData = null;
  public titleSource = [
    {columnDef: 'id', title: 'Person id'},
    {columnDef: 'name', title: 'Name'},
    {columnDef: 'type', title: 'Type'},
    {columnDef: 'address', title: 'Address'},
    {columnDef: 'email', title: 'Email'},
    {columnDef: 'phone', title: 'Phone'}
  ];

  constructor(
    private warehouse: WarehouseControlService
  ) { }

  ngOnInit(): void {
    this.warehouse.getPersons().pipe(
      map((persons) => persons.map(person => ({
        ...person,
        type: person.type === 1 ? 'Supplier' : 'Client'
      })))
    ).subscribe((persons) => {
      this.personsList = persons;
      this.sourceData = new MatTableDataSource(this.personsList);
    });
  }

}
