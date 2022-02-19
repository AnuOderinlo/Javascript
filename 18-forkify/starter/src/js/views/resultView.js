import View  from "./view";
import icons from 'url:../../img/icons.svg';

class ResultView extends View{
    _parentEl = document.querySelector('.results');
    _errMsg = 'Could not find the recipe search! please try again'
    _successMsg = 'awesome!!!!'

    _generateMarkup() {
        // console.log(this._data);

        return this._data.map(this._generateMarkupPreview);
       
    }
    
    _generateMarkupPreview(dt){
        return `
                <li class="preview">
                    <a class="preview__link " href="#${dt.id}">
                    <figure class="preview__fig">
                        <img src="${dt.image}" alt="Test" />
                    </figure>
                    <div class="preview__data">
                        <h4 class="preview__title">${dt.title}</h4>
                        <p class="preview__publisher">${dt.publisher}</p>
                    </div>
                    </a>
                </li>
        `;
    }
}



export default new ResultView();