import View from './view';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
    _parentEl = document.querySelector('.pagination');


    addHandlerForClick(handler){
        this._parentEl.addEventListener('click', function (e) {
            e.preventDefault();
            const btn = e.target.closest('.btn--inline');
            if (!btn) return;
            
            const goToPage = +btn.dataset.page;
            handler(goToPage);
        })
    }

    _generateMarkup(){
        const currPage = this._data.page;
        const totalPages = Math.ceil(this._data.result.length / this._data.searchPerPage);

        // Page 1 and other pages
        if (currPage === 1 && totalPages > currPage) {
            return `
                <button data-page="${currPage + 1}" class="btn--inline pagination__btn--next">
                    <span>Page ${currPage + 1}</span>
                    <svg class="search__icon">
                        <use href="${icons}#icon-arrow-right"></use>
                    </svg>
                </button>
            `
        }

        // last page
        if (currPage === totalPages) {
            return `
                <button data-page="${currPage - 1}" class="btn--inline pagination__btn--prev">
                    <svg class="search__icon">
                    <use href="${icons}#icon-arrow-left"></use>
                    </svg>
                    <span>Page ${currPage - 1}</span>
                </button>
            `;
        }

        // other pages
        if (currPage > 1 && totalPages > currPage) {
          return `
           <button data-page="${currPage + 1}" class="btn--inline pagination__btn--next">
                <span>Page ${currPage + 1}</span>
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-right"></use>
                </svg>
            </button>
            <button data-page="${currPage - 1}" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${currPage - 1}</span>
            </button>
          `;
        }

        // Page 1 and no pages
        return '';
    }

    
}


export default new PaginationView();
