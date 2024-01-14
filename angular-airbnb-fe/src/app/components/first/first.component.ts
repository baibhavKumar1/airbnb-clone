import { Component, OnInit ,Input, OnChanges, SimpleChanges} from '@angular/core';
import { NoteComponent } from '../../pages/note/note.component';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [NoteComponent],
  templateUrl: './first.component.html'
})
export class FirstComponent {
  
}
