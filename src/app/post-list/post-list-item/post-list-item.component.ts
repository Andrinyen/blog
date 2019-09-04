import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

    @Input() postTitle: string;
    @Input() postContent: string;
    @Input() postloveIts: number;
    @Input() postCreatedAt: Date ;


  constructor() { }

  ngOnInit() {
  }

  onLoveIt() {
      this.postloveIts += 1;
  }
  onDontLoveIt() {
      this.postloveIts -= 1;
 }
 getColor() {
   if (this.postloveIts > 0) {
     return 'green';
   } else if (this.postloveIts < 0 ){
    return 'red';
   }
 }
}
