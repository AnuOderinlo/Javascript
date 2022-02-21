import icons from 'url:../../img/icons.svg';
import { Fraction } from 'Fractional';

export default class View {
    _parentEl = document.querySelector('.recipe');
    _data;
    _errMsg = 'Could not find the recipe you are looking for!'
    _successMsg = 'awesome!!!!'

    render(data) {
        if (!data || (Array.isArray && data.length === 0) ) return this.errorMessage()


        this._data = data;
        const markup = this._generateMarkup();

        this._clear();
        this._parentEl.insertAdjacentHTML('afterbegin', markup);
    }

    update(data) {
        // if (!data || (Array.isArray && data.length === 0) ) return this.errorMessage()


        this._data = data;
        const newMarkup = this._generateMarkup();

        const newDom = document.createRange().createContextualFragment(newMarkup);
        const newElements = Array.from(newDom.querySelectorAll('*'));
        const currElements = Array.from(this._parentEl.querySelectorAll('*'));

        // console.log(newElements, currElements);
        newElements.forEach((newEl, i)=>{
            const currEl = currElements[i];


            // update changed Text in the DOM
            if (!newEl.isEqualNode(currEl) && newEl.firstChild.nodeValue.trim() !== '') {
                currEl.textContent = newEl.textContent;
            }
            
            // update changed Attributes in the DOM
            if (!newEl.isEqualNode(currEl)) {
                // console.log(newEl.attributes);
                Array.from(newEl.attributes).forEach(attr =>{
                    console.log(attr.name, attr.value);
                    currEl.setAttribute(attr.name, attr.value);
                })    
            }


        })


    }

    _clear() {
        this._parentEl.innerHTML = '';
    }

    spinnerHTML() {
        const markup =  ` 
            <div class="spinner">
                <svg>
                    <use href="${icons}#icon-loader"></use>
                </svg>
            </div>
            `
        this._clear();
        this._parentEl.insertAdjacentHTML('afterbegin', markup);
    }

    _generateIngredient(ing){
        return `<li class="recipe__ingredient">
                    <svg class="recipe__icon">
                        <use href="${icons}#icon-check"></use>
                    </svg>
                    <div class="recipe__quantity">
                        ${ing.quantity ? new Fraction(ing.quantity) : ''}
                    </div>
                    <div class="recipe__description">
                        <span class="recipe__unit">${ing.unit}</span>
                        ${ing.description}
                    </div>
                </li>`;
    }

    errorMessage(msg= this._errMsg){
        const markup = `
            <div class="error">
                <div>
                    <svg>
                        <use href="${icons}.svg#icon-alert-triangle"></use>
                    </svg>
                </div>
                <p>${msg}</p>
            </div> 
        
        `;
        this._clear();
        this._parentEl.insertAdjacentHTML('afterbegin', markup);
    }


    successMessage(msg= this._successMsg){
        const markup = `
            <div class="message">
                <div>
                    <svg>
                        <use href="${icons}.svg#icon-smile"></use>
                    </svg>
                </div>
                <p>Start by searching for a recipe or an ingredient. Have fun!</p>
            </div> 
        
        `;
        this._clear();
        this._parentEl.insertAdjacentHTML('afterbegin', markup);
    }
}