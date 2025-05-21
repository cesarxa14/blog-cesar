import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private API_BASE_URI: string = environment.API_URI + 'posts'

  constructor(private http: HttpClient) { }

  getPosts(){
    try{
      return this.http.get(`${this.API_BASE_URI}`)
    }catch(err) {
      console.log('error: ', err)
      throw err
    }
  }

  getPostById(id: number){
    try{
      return this.http.get(`${this.API_BASE_URI}/${id}`)
    }catch(err) {
      console.log('error: ', err)
      throw err
    }
  }

  searchPost(search: string){
    
    try{
      const queryParams = new URLSearchParams();
      queryParams.append('title', search);
      return this.http.get(`${this.API_BASE_URI}?${queryParams.toString()}`)
    }catch(err) {
      console.log('error: ', err)
      throw err
    }


  }
}
