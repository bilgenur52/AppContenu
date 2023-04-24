import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  url='http://localhost:3000/articles';
  
  constructor(private http:HttpClient) { }
  getAllArticles(){
    return this.http.get(this.url);
  }
  saveArticleData(data: any){
      //console.log(data);   
      var currentDateTime = new Date();
      console.log( currentDateTime.toLocaleString());
     
      return this.http.post(this.url, data);
     
    
  }
}
