import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, OnInit, Output, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-mymodal',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatCheckboxModule, ReactiveFormsModule, CommonModule],
  templateUrl: './mymodal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MymodalComponent implements OnInit {
  // @Output() editCard = new EventEmitter<any>
  // @Output() deleteCard = new EventEmitter<any>
  fb = inject(FormBuilder);
  form = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    title:['',Validators.required],
    body:['',Validators.required]
  })
  constructor(
    public dialogRef: MatDialogRef<MymodalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  value: any;
  ngOnInit(): void {

  }
  onClose(): void {
    const user = this.form.getRawValue();
    console.log(this.form.getRawValue())
    this.dialogRef.close(user);
    // this.deleteCard.emit(user)
  }
}
