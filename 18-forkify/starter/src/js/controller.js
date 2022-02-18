import * as model from './model';
import recipeView from './views/recipeView.js'
import searchView from './views/searchView.js'




import "core-js/stable";//this is for polyfill for others
import "regenerator-runtime/runtime";//this is polyfill async await
import { async } from 'regenerator-runtime';


const recipeContainer = document.querySelector('.recipe');



// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

// render spinner

const controlRecipe = async function () {
  try {
    
    const id = window.location.hash.slice(1);
    if (!id) return;
    
    recipeView.spinnerHTML();
    
    /*1. loading Recipe*/
    await model.loadRecipe(id)// this is from the model

    // const {recipe} = model.state

    /* 2. redering recipe*/
    recipeView.render(model.state.recipe)// this is from the view
    
  }catch (err) {
    // console.log(err);
    console.log(err);
    recipeView.errorMessage();
    
  }
}


const controlSearch = async function () {
  try {
    // 1. Get query
    const query = searchView.getQuery();

    if (!query) return

    // 2. Load search results
    await model.loadSearchRecipe(query);
  } catch (err) {
      console.log(err);
  }
}
// controlRecipe();
// const events = ['hashchange', 'load'];
// events.forEach(ev => window.addEventListener(ev, controlRecipe));

const init = function () {
  recipeView.addHandlerRender(controlRecipe);
  searchView.addHandlerSearchRender(controlSearch)
}

init()
// window.addEventListener('hashchange', controlRecipe);
// window.addEventListener('load', controlRecipe);
