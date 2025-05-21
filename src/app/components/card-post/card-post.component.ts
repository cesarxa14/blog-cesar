import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/IPost';
import {
  trigger,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class CardPostComponent implements OnInit {

  @Input() post!: IPost;
  constructor() { }

  ngOnInit(): void {
  }

}
