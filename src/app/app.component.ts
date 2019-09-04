import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';
   date = new Date();
   date1 = new Date(this.date.getTime() + (60 * 60 * 24) * 1000);
   date2 = new Date(this.date1.getTime() + (60 * 60 * 24) * 1000);
   date3 = new Date(this.date2.getTime() + (60 * 60 * 24) * 1000);

posts = [
  {
   title : '1st post',
   content : 'ceci est mon premier post',
   loveIts: 0,
   created_at: this.date
  },
  {
   title : '2nd post',
   content : 'ceci est mon deuxieme post',
   loveIts: 0,
   created_at: this.date1
  },
  {
    title : '3rd post',
    content : 'ceci est mon troisième post',
    loveIts: 0,
    created_at: this.date2
  },
  {
    title : '4th post',
    content : 'ceci est mon qautrième post',
    loveIts: 0,
    created_at: this.date3
  }
];


}
