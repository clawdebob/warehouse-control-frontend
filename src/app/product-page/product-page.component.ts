import {Component, Inject, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validator} from '@angular/forms';

const FORM = {
  SERIAL: 'SERIAL',
  NAME: 'NAME',
  COMPANY: 'COMPANY',
  ROW: 'ROW',
  COLUMN: 'COLUMN',
  PLACE: 'PLACE'
};

export interface Product {
  serial: string;
  name: string;
  company: string;
  place: number;
  row: number;
  column: number;
}

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  public displayedColumns: string[] = ['serial', 'name', 'company', 'place', 'row', 'column'];
  private productData = [
    {serial: 'cc80cf03', name: 'Apple Smart TV', company: 'Apple', place: 1, row: 1, column: 1},
    {serial: 'cc80cf06', name: 'Oculus Rift VR Headset', company: 'Facebook', place: 2, row: 1, column: 1},
    {serial: 'cc12cf06', name: 'Sony Playstation 4', company: 'Sony', place: 3, row: 1, column: 1},
    {serial: 'cc1200fa', name: 'Nintendo Switch', company: 'Nintendo', place: 4, row: 1, column: 1},
    {serial: 'cc11cfaa', name: 'Xbox One', company: 'Microsoft', place: 5, row: 1, column: 1},
    {serial: 'cc55cfaa', name: 'Honor 20', company: 'Huawei', place: 6, row: 1, column: 1},
  ];
  public dataSource = new MatTableDataSource(this.productData);

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(ProductPageAddDialogComponent , {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      this.productData.push(result);
      this.dataSource = new MatTableDataSource(this.productData);
    });
  }

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

}

@Component({
  selector: 'app-product-page-add-dialog',
  templateUrl: 'product-page-add-dialog.component.html',
})
export class ProductPageAddDialogComponent implements OnInit{
  public readonly FORM = FORM;
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ProductPageAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product
  ) {
    this.form = this.formBuilder.group({
      [FORM.SERIAL]: '',
      [FORM.NAME]: '',
      [FORM.COMPANY]: '',
      [FORM.ROW]: '',
      [FORM.COLUMN]: '',
      [FORM.PLACE]: ''
    });
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe((formData) => {
      this.data = {
        serial: formData[FORM.SERIAL],
        name: formData[FORM.NAME],
        company: formData[FORM.COMPANY],
        row: formData[FORM.ROW],
        column: formData[FORM.COLUMN],
        place: formData[FORM.PLACE]
      };
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

