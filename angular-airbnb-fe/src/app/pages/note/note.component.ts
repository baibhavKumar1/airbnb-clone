import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NoteService } from '../../service/note.service';
import { CommonModule } from '@angular/common';
import {
  MatDialog
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MymodalComponent } from '../../components/mymodal/mymodal.component';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MymodalComponent],
  templateUrl: './note.component.html',
  
})
export class NoteComponent implements OnInit {
  modal="note"
  notes: any = [];
  constructor( 
    private noteService: NoteService,
    public dialog: MatDialog,
  ) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(MymodalComponent, { data: this.modal });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result.title,result.body);
      this.noteService.createNote({title:result.title,body:result.body})
      .subscribe((response)=>console.log(response))
      this.refreshNote()
    })

  }
  ngOnInit(): void {
    this.refreshNote()
  }
  refreshNote():void{
    this.noteService.getNote()
      .subscribe((notes) => {
        console.log(notes);
        this.notes = notes;
      })
  }
  deletedNote(id:any):void{
    this.noteService.deleteNote(id).subscribe((res)=>console.log(res))
    this.refreshNote()
  }
}