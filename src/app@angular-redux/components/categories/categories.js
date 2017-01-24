class Categories{
    constructor($timeout, $ngRedux, CategoriesActions) {
        'ngInject';
        this.$timeout = $timeout
        this.store = $ngRedux
        this.CategoriesActions = CategoriesActions
    }
    $$onInit(){
        this.store.subscribe(() => {
            this.categories = this.store.getState().categories
            this.currentCategory = this.store.getState().category
        })
    }
    onCategorySelected(category) {
        this.store.dispatch(
            this.CategoriesActions.selectCategory(category)
        )
    }
}
