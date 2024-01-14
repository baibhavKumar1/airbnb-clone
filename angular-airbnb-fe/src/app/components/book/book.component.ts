import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  
})
export class BookComponent {
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
  onAlert(){
    alert("booked")
  }
}
