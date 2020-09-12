import {Component, Inject, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Product} from '../../types/product.const';
import {WarehouseControlService} from '../../services/warehouse-control.service';

const FORM = {
  SERIAL: 'SERIAL',
  NAME: 'NAME',
  COMPANY: 'COMPANY',
  ROW: 'ROW',
  COLUMN: 'COLUMN',
  PLACE: 'PLACE'
};

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  private productData = null;
  public dataSource = null;
  public titleSource = [
    {columnDef: 'serial', title: 'Serial'},
    {columnDef: 'name', title: 'Name'},
    {columnDef: 'company', title: 'Company'},
    {columnDef: 'place', title: 'Place'},
    {columnDef: 'row', title: 'Row'},
    {columnDef: 'column', title: 'Column'}
  ];

  constructor(
    public dialog: MatDialog,
    private warehouse: WarehouseControlService
  ) {}

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

  ngOnInit(): void {
    this.warehouse.getProducts().subscribe((products) => {
      this.productData = products;
      this.dataSource = new MatTableDataSource(this.productData);
    });
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

