import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, pluck } from 'rxjs';
import { comments } from './comment';
import { CommentService } from './comment.service';

@Component({
  selector: 'digiplus-app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  comments$ = this.commentService.getComments();
  comment$ = this.activatedRoute.data.pipe(pluck('comments'));
  comments : Comments[] = [];


  constructor(private commentService: CommentService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    // this.activatedRoute.data.subscribe((data) => console.log(data));
    // this.activatedRoute.data.subscribe((data) => console.log(data['comments']));
    // this.activatedRoute.data.subscribe((data: {comments: Comments[]} ) => 
    // console.log(data['comments'])
    // );
    this.activatedRoute.data.subscribe((data) => 
    this.comments =  data['comments']
    );

  }

}
