import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {


  postList = [{
    title: 'Mon premier article',
    content: 'Donec vitae nisl tortor. Sed vel odio eu diam rhoncus ultricies in a libero. Etiam posuere ac tellus ut cursus.',
    created_at: new Date,
    loveIts: 0
  },
  {
    title: 'Visite du van',
    content: 'Cras a sodales massa, eget posuere ante. Nunc fringilla vulputate orci, in pretium est pretium vitae. Aenean vel aliquam lacus.',
    created_at: new Date,
    loveIts: 0
  },
  {
    title: 'Première destination',
    content: 'In eget urna sodales, ornare turpis vel, pulvinar sem. Fusce tincidunt massa sit amet metus tincidunt ullamcorper. Nullam varius tempus ante sit amet malesuada. ',
    created_at: new Date,
    loveIts: 0
  }];
  
  constructor() { }

  ngOnInit() {
  }

}
