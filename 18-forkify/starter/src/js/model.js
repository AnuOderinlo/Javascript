import 'core-js/stable'; //this is for polyfill for others
import 'regenerator-runtime/runtime'; //this is polyfill async await
import { API_URL } from "./config";
import { getJSON } from "./helpers";

export const state = {
    recipe: {},
    search: {
        query:'',
        result: []
        
    }
};

export const loadRecipe = async function (id) {
    try {
       
        const data = await getJSON(`${API_URL}${id}`);

  
        const { recipe } = data.data;

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

        // console.log(state.recipe);
    } catch (err) {
        // console.log(`${err} from model`);
        throw err;
    }
};


export const loadSearchRecipe = async function (query) {
    try {
        const data = await getJSON(`${API_URL}?search=${query}`);
        state.search.query = query;
        const {recipes} = data.data;
        state.search.result = recipes.map(rec=>{
            // console.log(rec);
            return {
              id: rec.id,
              image: rec.image_url,
              publisher: rec.publisher,
              title: rec.title,
            };
        })
        

        console.log(state.search);


    } catch (err) {
        console.log(err);
    }
}

// loadSearchRecipe('chicken')
