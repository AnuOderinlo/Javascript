import View  from "./view";
import previewView from './previewView';
import icons from 'url:../../img/icons.svg';

class ResultView extends View{
    _parentEl = document.querySelector('.results');
    _errMsg = 'Could not find the recipe search! please try again'
    _successMsg = 'awesome!!!!'

   _generateMarkup() {
        
        return this._data.map(result=> previewView.render(result, false)).join('');
       
    }
}



export default new ResultView();