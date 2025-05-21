import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { IPost } from '../../models/IPost';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchForm: FormGroup;
  postsList: IPost[] = [];
  filteredpostsList: IPost[] = []; // copy of the postsList
  constructor(
    private postService: PostService,
    private router: Router,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.searchForm = this._builderSearchForm();
    this.getPosts();
  }

  // Function to create the form I use to search by title
  _builderSearchForm() {
    // const pattern = '[a-zA-Z ]{2,254}';
    const form = this._formBuilder.group({
      search: [null],
    });

    return form;
  }

  get search() {return this.searchForm.controls["search"]}


  // Function to get all posts
  getPosts(){
    this.postService.getPosts().subscribe((res:any) => {
      console.log('res: ', res)
      this.postsList = res;
      this.filteredpostsList = this.postsList;
    })
  }

  // Function to navigate to the detail view of the post
  goToPost(post: IPost) {
    // console.log(post)
    this.router.navigate(['/post', post.id])
  }

  // Function to filter posts by title
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.filteredpostsList = this.postsList.filter(post =>
      post.title.toLowerCase().includes(filterValue)
    );
  
  }

  // Function to fetch posts by title from the database (data mock)
  searchPost(){
    this.postService.searchPost(this.search.value).subscribe((res: any) => {
      console.log('res: ', res);
      this.postsList = res;
    })
  }

}
