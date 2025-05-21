import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { IPost } from '../../models/IPost';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit {

  idPost: number | any;
  postDetail: IPost;
  constructor(
    private route: ActivatedRoute,
    private postService: PostService

  ) { }

  ngOnInit(): void {
    // I get the id that arrives through the parameter in the url
    this.idPost = this.route.snapshot.paramMap.get('id');

    console.log('idPost: ', this.idPost)
    this.getPostById(this.idPost);
  }

  // I call the service to fetch the post using the id obtained from the url
  getPostById(id: number){
    this.postService.getPostById(id).subscribe((post: any) => {
      console.log(post);
      this.postDetail = post;
    });
  }

}
