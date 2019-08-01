import { Recipe } from "./../recipe.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "First Recipe",
      "Description for First Recipe",
      "https://assets.epicurious.com/photos/57a37c0be4857f9f1047d1a0/master/pass/slow-cooker-pork-shoulder-with-zesty-basil-sauce-recipe-03082016.jpg"
    ),
    new Recipe(
      "First Recipe",
      "Description for First Recipe",
      "https://assets.epicurious.com/photos/57a37c0be4857f9f1047d1a0/master/pass/slow-cooker-pork-shoulder-with-zesty-basil-sauce-recipe-03082016.jpg"
    )
  ];
  constructor() {}

  ngOnInit() {}
}
