import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
      {name:'test',description:'test description',imagePath:''},
      {name:'test',description:'test description',imagePath:''},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
