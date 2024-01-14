import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MymodalComponent } from '../mymodal/mymodal.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {  SearchComponent } from '../../search/search.component';
@Component({
  selector: 'app-second',
  standalone: true,
  imports: [MymodalComponent,SearchComponent],
  templateUrl: './second.component.html'
})
export class SecondComponent {
  constructor(
    public dialog: MatDialog,
 
  ) { }
  title = "login";
  openDialog(): void {
    const dialogRef = this.dialog.open(MymodalComponent, {
      data: this.title
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(result)
    })
  }
}
