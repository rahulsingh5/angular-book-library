import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-container',
  templateUrl: './book-container.component.html',
  styleUrls: ['./book-container.component.scss']
})
export class BookContainerComponent implements OnInit {
  @HostBinding('class') hostBindingClass = 'app-book-container';

  folders = [
    {
      name: 'Technology',
      updated: new Date('1/1/16'),
      icon: 'memory'
    },
    {
      name: 'Business',
      updated: new Date('1/17/16'),
      icon: 'local_shipping'
    },
    {
      name: 'Fiction',
      updated: new Date('1/28/16'),
      icon: 'hot_tub'
    }
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

  bookList = [1, 2, 4, 5, 6, 8, 9, 3, 6];

  constructor() {
  }

  ngOnInit() {
  }

}
