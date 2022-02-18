import { View } from './view';

class SearchView {
// class SearchView extends View{
  _parentEl = document.querySelector('.search');

  getQuery() {
    const inputVal = this._parentEl.querySelector('.search__field').value;
    console.log(inputVal);
    this._parentEl.querySelector('.search__field').value = '';
    return inputVal;
  }

  addHandlerSearchRender(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
