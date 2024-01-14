import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NavComponent } from '../nav/nav.component';
import {FooterComponent} from '../footer/footer.component'

@Component({
  selector: 'app-single',
  standalone: true,
  imports: [NavComponent,FooterComponent,RouterModule],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})

export class SingleComponent implements OnInit{
  data={
    id:1,
    image:'https://a0.muscache.com/im/pictures/miso/Hosting-50296444/original/c693610c-9fcb-4f59-8bea-345d619930e9.jpeg',
    image2:'https://a0.muscache.com/im/pictures/miso/Hosting-50296444/original/c693610c-9fcb-4f59-8bea-345d619930e9.jpeg',
    image3:'https://a0.muscache.com/im/pictures/miso/Hosting-50296444/original/c693610c-9fcb-4f59-8bea-345d619930e9.jpeg',
    city:'New Delhi,India',
    distance:'17 kms',
    price:'44506',
    name:'The Treehouse',
    description:'Treehouse in new delhi,india',

  };
 constructor(private route:ActivatedRoute){}
 ngOnInit(): void {
     this.route.params.subscribe(params=>{
      // this.data= params['id']i
      console.log(params['id'])
     })
 }
}
