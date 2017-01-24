export const bookmarks = (state = initialBookmarks, {type, payload}) => {
  switch (type) {
    case GET_BOOKMARKS:
      return payload || state;
    default:
      return state;
  }
}

export const BookmarksAction = () => {
  const getBookmarks = bookmarks => {
    return { type: GET_BOOKMARKS, payload: bookmarks }
  };

  return {
    getBookmarks
  }
}

const initialBookmarks = [
  {"id":1, "title": "AngularJS", "url": "http://angularjs.org", "category": "Development"},
  {"id":2, "title": "Egghead.io", "url": "http://egghead.io", "category": "Development"},
  {"id":3, "title": "A List Apart", "url": "http://alistapart.com/", "category": "Design"}
]

export const GET_BOOKMARKS = 'GET_BOOKMARKS'