import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-recipies',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './recipies.component.html',
  styleUrl: './recipies.component.css'
})
export class RecipiesComponent {
  allRecipes:any = [],
  cuisineArray:any = []
  constructor(private api:ApiService){}
  ngOnInit(){
    this.getAllRecipes()
  }

  getAllRecipes(){
    this.api.getAllRecipesAPI().subscribe((res:any)=>{
    this.allRecipes=res
    console.log(this.allRecipes);
    this.allRecipes.forEach((item:any))=>{
      !this.cuisineArray.includes(item.cuisine)&& this.cuisineArray.push(item.cuisine)    }
    })
  }


}

