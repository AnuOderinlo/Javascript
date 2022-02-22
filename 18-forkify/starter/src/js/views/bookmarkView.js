import View  from "./view";
import previewView from "./previewView";
import icons from 'url:../../img/icons.svg';

class BookmarkView extends View{
    _parentEl = document.querySelector('.bookmarks__list');
    _errMsg = 'No bookmarks yet. Find a nice recipe and bookmark it :)'
    _successMsg = 'awesome!!!!'

    _generateMarkup() {
        
        return this._data.map(bookmark=> previewView.render(bookmark, false)).join('');
       
    }
    

    addHandlerLoad(handler){
        window.addEventListener('load', handler)
    }
}



export default new BookmarkView();