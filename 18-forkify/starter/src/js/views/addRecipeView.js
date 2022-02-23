import View  from "./view";
import icons from 'url:../../img/icons.svg';

class AddRecipeView extends View{
    _parentEl = document.querySelector('.upload');
    _overlayEl = document.querySelector('.overlay');
    _windowEl = document.querySelector('.add-recipe-window');
    _btnClose = document.querySelector('.btn--close-modal');
    _btnOpen = document.querySelector('.nav__btn--add-recipe');


    constructor(){
        super();
        this.addHandleOpenWindow();
        this.addHandleCloseWindow();
        // this.closeWindow();
    }

    addHandleOpenWindow(){
        this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
    }


    addHandleCloseWindow(){
        this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
        this._overlayEl.addEventListener('click', this.toggleWindow.bind(this));
    }

    toggleWindow(){
        this._windowEl.classList.toggle('hidden')
        this._overlayEl.classList.toggle('hidden')
    }


    addHandleUpload(handler){
        this._parentEl.addEventListener('submit', function (e) {
            e.preventDefault();
            const dataArr = [...new FormData(this)]
            const data = Object.fromEntries(dataArr)//Converts the array key-value to object
            handler(data);
        })
    }

    _generateMarkup() {
       
    }
   
}




export default new AddRecipeView();