import * as model from './model';
import recipeView from './views/recipeView.js'




import "core-js/stable";//this is for polyfill for others
import "regenerator-runtime/runtime";//this is polyfill async await


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
    alert(err)
  }
}

// controlRecipe();
const events = ['hashchange', 'load'];
events.forEach(ev => window.addEventListener(ev, controlRecipe));

// window.addEventListener('hashchange', controlRecipe);
// window.addEventListener('load', controlRecipe);

