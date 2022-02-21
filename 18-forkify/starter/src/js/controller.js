import * as model from './model';
import recipeView from './views/recipeView.js'
import searchView from './views/searchView.js'
import resultView from './views/resultView.js'
import paginationView from './views/paginationView.js'




import "core-js/stable";//this is for polyfill for others
import "regenerator-runtime/runtime";//this is polyfill async await
import { async } from 'regenerator-runtime';


// if (module.hot) {
//   module.hot.accept();
// }

const recipeContainer = document.querySelector('.recipe');



// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////


const controlRecipe = async function () {
  try {
    
    const id = window.location.hash.slice(1);
    if (!id) return;
    
    recipeView.spinnerHTML();

    // 0. render the the search result with Marked highlight
    resultView.update(model.loadSearchResultPerPage());
    
    /*1. loading Recipe*/
    await model.loadRecipe(id)// this is from the model

    // const {recipe} = model.state

    /* 2. redering recipe*/
    recipeView.render(model.state.recipe)// this is from the view
    // controlServings()//temporary kept here
    
  }catch (err) {
    // console.log(err);
    console.log(err);
    recipeView.errorMessage();
    
  }
}


const controlSearch = async function () {
  try {
    resultView.spinnerHTML();
    // 1. Get query
    const query = searchView.getQuery();

    if (!query) return;

    // 2. Load search results
    await model.loadSearchRecipe(query);

    // 3. render the the search result
    resultView.render(model.loadSearchResultPerPage()); // this is from the view

    // 4. Render search result per page
    paginationView.render(model.state.search)


  } catch (err) {
    console.log(err);
    resultView.errorMessage();
  }
}
// controlRecipe();
// const events = ['hashchange', 'load'];
// events.forEach(ev => window.addEventListener(ev, controlRecipe));

const init = function () {
  recipeView.addHandlerRender(controlRecipe);
  recipeView.addHandlerForServings(controlServings);
  searchView.addHandlerSearchRender(controlSearch)
  paginationView.addHandlerForClick(controlPagination);
}

const controlPagination = function (page) {
  // 1. render the the search result
  resultView.render(model.loadSearchResultPerPage(page)); // this is from the view

  // 2. Render search result per page
  paginationView.render(model.state.search);
  // console.log();
}

const controlServings = function (newServings) {

  model.updateServings(newServings);
  // recipeView.render(model.state.recipe); // this is from the view
  recipeView.update(model.state.recipe); // this is from the view
}


init()
