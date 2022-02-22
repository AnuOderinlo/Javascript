import 'core-js/stable'; //this is for polyfill for others
import { isGeneratorFunction } from 'regenerator-runtime';
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
    },
    bookmark: []
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

        if (state.bookmark.some(bookmark=> bookmark.id === id)){
            state.recipe.bookmarked = true;
        }else{
            state.recipe.bookmarked = false;

        }

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
        state.search.page = 1;
        
    } catch (err) {
        console.log(err);
    }
}


export const loadSearchResultPerPage = function (page= state.search.page) {
    state.search.page = page;
    
    const start = (page - 1) * state.search.searchPerPage;
    const end = (page) * state.search.searchPerPage;
    
    // console.log(state.recipe);
    return state.search.result.slice(start, end)

}


export const updateServings = function (newServings = state.recipe.servings) {

    //updating the ingredients based on the new servings
    state.recipe.ingredients.forEach(ing => {
        ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
    });

    state.recipe.servings = newServings;
}


// this stores the bookmarks locally
const persistBookmark = function () {
    localStorage.setItem('bookmarks', JSON.stringify(state.bookmark))
}


export const addBookmark = function (recipe) {
    state.bookmark.push(recipe);

    if (state.recipe.id === recipe.id) state.recipe.bookmarked = true;
    persistBookmark()
    
}


export const removeBookmark = function (id) {
    const index = state.bookmark.findIndex(el=> el.id === id);
    state.bookmark.splice(index,1)
    
    if (state.recipe.id === id) state.recipe.bookmarked = false;
    persistBookmark()
}


const init = function () {
    const storage =JSON.parse(localStorage.getItem('bookmarks'));

    if (storage) state.bookmark = storage;
}

init();

const clearBookmarkLocal =  function () {
    localStorage.clear('bookmarks');
}

// clearBookmarkLocal();

