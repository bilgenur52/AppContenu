import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { ArticlesService } from '../articles.service';
@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent {
    constructor(private article: ArticlesService){}
/*    updateLastModified(){
      var currentDateTime = new Date();
      console.log("lheure modifie est");
      console.log(currentDateTime.toLocaleString());
      
    }*/
    addArticle=new FormGroup({
      titre: new FormControl(''),
      auteur: new FormControl(''),
      contenu:new FormControl(''),
      datemodif: new FormControl('')
});
    ngOnInit():void{}
    SaveData(){
      //console.log(this.addArticle.value);
      this.article.saveArticleData(this.addArticle.value).subscribe((result)=>{console.log(result)});
    }
}
