import 'core-js/stable'; //this is for polyfill for others
import 'regenerator-runtime/runtime'; //this is polyfill async await
import { API_URL, PER_PAGE } from './config';
import { getJSON } from "./helpers";

export const state = {
    recipe: {},
    search: {
        query:'',
        page: 1,
        result: [],
        searchPerPage: PER_PAGE
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
        

        
        
    } catch (err) {
        console.log(err);
    }
}

// loadSearchRecipe('chicken')

export const loadSearchResultPerPage = function (page = 1) {
    state.search.page = page;
    
    const start = (page - 1) * state.search.searchPerPage;
    const end = (page) * state.search.searchPerPage;
    
    // console.log(state.search);
    return state.search.result.slice(start, end)

}


export const updateServings = function (newServings = state.recipe.servings) {

    //updating the ingredients based on the new servings
    state.recipe.ingredients.forEach(ing => {
        ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
    });

    state.recipe.servings = newServings;
}
