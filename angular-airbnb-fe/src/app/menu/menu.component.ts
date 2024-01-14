import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu'
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatButtonModule,MatMenuModule],
  templateUrl: './menu.component.html'
})
export class MenuComponent {

}
