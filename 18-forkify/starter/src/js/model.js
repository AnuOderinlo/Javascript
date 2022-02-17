import 'core-js/stable'; //this is for polyfill for others
import 'regenerator-runtime/runtime'; //this is polyfill async await
import { API_URL } from "./config";
import { getJSON } from "./helpers";

export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
    try {
       
        const data = await getJSON(`${API_URL}/${id}`);

  
        let { recipe } = data.data;

        state.recipe = {
            id: recipe.id,
            image: recipe.image_url,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients,
            publisher: recipe.publisher,
            servings: recipe.servings,
            sourceUrl: recipe.source_url,
            title: recipe.title,
        };

        console.log(state.recipe);
    } catch (err) {
        console.log(`${err} from model`);
    }
};
