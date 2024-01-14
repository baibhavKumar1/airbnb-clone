import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs'
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu'
import {MatDatepickerModule} from '@angular/material/datepicker'
import { FormGroup,FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  AfterViewInit,Component,TemplateRef,ViewChild,ViewContainerRef,ElementRef,} from '@angular/core';
import {ComponentPortal,DomPortal,Portal,TemplatePortal,PortalModule} from '@angular/cdk/portal';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-home', 
  standalone: true,
  imports: [MatDividerModule,CommonModule,RouterModule,PortalModule,MatMenuModule,MatNativeDateModule,MatDatepickerModule,MatFormFieldModule,ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl:'./home.component.css'
})
export class HomeComponent implements AfterViewInit{
 constructor(private _viewContainerRef: ViewContainerRef){}
 @ViewChild('templatePortalContent') templatePortalContent!: TemplateRef<unknown>;
  @ViewChild('domPortalContent') domPortalContent!: ElementRef<HTMLElement>;

  selectedPortal!: Portal<any>;
  templatePortal!: TemplatePortal<any>;
  domPortal!: DomPortal<any>;  
  head:Number=1;
  ngAfterViewInit() {
    this.templatePortal = new TemplatePortal(this.templatePortalContent, this._viewContainerRef);
    this.selectedPortal= this.templatePortal
    this.domPortal = new DomPortal(this.domPortalContent);
  }
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  data=[{
    id:1,
    image:'https://a0.muscache.com/im/pictures/miso/Hosting-50296444/original/c693610c-9fcb-4f59-8bea-345d619930e9.jpeg',
    city:'New Delhi,India',
    distance:'17 kms',
    price:'44506',
    name:'Treehouse',
    description:'Treehouse in new delhi,india',

  },
  {
    id:2,
    image:'https://a0.muscache.com/im/pictures/miso/Hosting-50296444/original/c693610c-9fcb-4f59-8bea-345d619930e9.jpeg',
    city:'New Delhi,India',
    distance:'17 kms',
    price:'44506'
  },
  {
    id:3,
    image:'https://a0.muscache.com/im/pictures/miso/Hosting-50296444/original/c693610c-9fcb-4f59-8bea-345d619930e9.jpeg',
    city:'New Delhi,India',
    distance:'17 kms',
    price:'44506'
  },
  {
    id:4,
    image:'https://a0.muscache.com/im/pictures/miso/Hosting-50296444/original/c693610c-9fcb-4f59-8bea-345d619930e9.jpeg',
    city:'New Delhi,India',
    distance:'17 kms',
    price:'44506'
  },
  {
    id:5,
    image:'https://a0.muscache.com/im/pictures/miso/Hosting-50296444/original/c693610c-9fcb-4f59-8bea-345d619930e9.jpeg',
    city:'New Delhi,India',
    distance:'17 kms',
    price:'44506'
  },
  {
    id:6,
    image:'https://a0.muscache.com/im/pictures/miso/Hosting-50296444/original/c693610c-9fcb-4f59-8bea-345d619930e9.jpeg',
    city:'New Delhi,India',
    distance:'17 kms',
    price:'44506'
  },
];
}
