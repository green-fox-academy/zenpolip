'use strict'

class BlogPost {
  authorName:  string;
  title: string;
  text: string;
  publicationDate: string;

  constructor(authorName, title, text, publicationDate){
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.publicationDate = publicationDate;
  }

  post() {
    console.log(this.title + ' titled by ' + this.authorName + ' posted at ' + this.publicationDate + '\n' +this.text);
  }
}

let blogPost1 = new BlogPost('John Doe','Lorem Ipsum','Lorem ipsum dolor sit amet.','2000.05.04.');
blogPost1.post()
