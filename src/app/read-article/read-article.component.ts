import { Component } from '@angular/core';
import { ArticlesService } from '../articles.service';
@Component({
  selector: 'app-read-article',
  templateUrl: './read-article.component.html',
  styleUrls: ['./read-article.component.css']
  
})

export class ReadArticleComponent {
  currentDateTime: Date = new Date();

    constructor(private article: ArticlesService){}
    articleData: any=[];
    
    ngOnInit(): void{
      this.article.getAllArticles().subscribe((allData)=>{console.log(allData);
        this.articleData=allData;
      });
    }

    
}
