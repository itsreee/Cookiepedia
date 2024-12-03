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
  allRecipes:any = []
  cuisineArray:any = []
  mealTypeArray:any=[]

  constructor(private api:ApiService){}
  ngOnInit(){
    this.getAllRecipes()
  }

  getAllRecipes(){
    this.api.getAllRecipesAPI().subscribe((res:any)=>{
    this.allRecipes=res
    console.log(this.allRecipes);
    this.allRecipes.forEach((item:any)=>{
      !this.cuisineArray.includes(item.cuisine)&& this.cuisineArray.push(item.cuisine)   
 
    })
    console.log(this.cuisineArray);
    const dummyMeal = this.allRecipes.map((item:any)=>item.mealType)
    console.log(dummyMeal.flat(Infinity));
    const flatDummyArray = dummyMeal.flat(Infinity)
    flatDummyArray.forEach((item:any)=>{
    !this.mealTypeArray.includes(item)&& this.mealTypeArray.push(item)    
    })
    console.log(this.mealTypeArray);
    
    })
  }


}

