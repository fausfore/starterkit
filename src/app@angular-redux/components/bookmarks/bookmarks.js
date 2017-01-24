import { BookmarksActions } from './bookmarks.state'

class Bookmarks {
    constructor($ngRedux, BookmarksModel) {
        'ngInject';
        this.store = $ngRedux
        this.BookmarksModel = BookmarksModel
    }
    $onInit() {
        this.BookmarksModel.getBookmarks()
            .then(result => this.bookmarks = results)

        this.deleteBookmark = this.BookmarksModel.deleteBookmark

        this.store.subscribe(() => {
            this.bookmarks = this.store.getState().bookmarks
            this.currentCategory = this.store.getState().category
        })

        this.store.dispatch({type:'GET_BOOKMARKS'})

        this.reset()
    }
}
