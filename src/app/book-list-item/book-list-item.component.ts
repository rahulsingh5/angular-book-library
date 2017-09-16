import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.scss']
})
export class BookListItemComponent implements OnInit {
  @HostBinding('class') hostBindingClass = 'app-book-list-item';

  bookDetail = {
    title: 'perferendis assumenda eum',
    author: 'Chyna Gottlieb',
    author_image: 'https://s3.amazonaws.com/uifaces/faces/twitter/kevinjohndayy/128.jpg',
    release_date: '2017-09-15T12:25:26.674Z',
    image: 'http://lorempixel.com/640/480/abstract',
    price: '271.00',
    short_description: 'Dolores beatae architecto expedita labore dolore quidem aut voluptatum.',
    long_description: 'Molestiae incidunt modi veniam aut molestias quas aut sit aut. Et magni blanditiis ducimus ut officia id consequatur rerum quia. Earum dolorum animi numquam omnis unde. Dolorem quidem voluptas. Adipisci soluta voluptas.'
  };

  constructor() {
  }

  ngOnInit() {
  }

}
