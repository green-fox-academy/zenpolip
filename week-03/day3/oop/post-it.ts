'use strict'

class PostIt {
  backgroundColor: string;
  text: string;
  textColor: string;

  public PostIt(backgroundColor: string, text: string, textColor: string) {
    this.backgroundColor = backgroundColor;
    this.text = text;
    this.textColor = textColor;
  }
}

let postit = new PostIt();
postit.backgroundColor = 'orange';
postit.text = 'Idea 1';
postit.textColor = 'blue';
