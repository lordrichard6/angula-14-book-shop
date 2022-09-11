

export class BooksService {

  constructor() { }

  getBooks() {
    return [
      {
        name: 'a game of thrones',
        author: 'George R.R. Martin',
        img: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/A1MExOEakfL.jpg',
        price: 8.99,
      },
      {
        name: 'A Clash of Kings',
        author: 'George R.R. Martin',
        img: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/91tgacu93CL.jpg',
        price: 7.99,
      },
      {
        name: 'A Storm of Swords',
        author: 'George R.R. Martin',
        img: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/91dlztjGOHL.jpg',
        price: 10.99,
      },
      {
        name: 'A Feast for Crows',
        author: 'George R.R. Martin',
        img: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/91FoEbMhFNL.jpg',
        price: 6.99,
      },
    ]
  }
}

class Name {
  constructor(name: string) {}
}