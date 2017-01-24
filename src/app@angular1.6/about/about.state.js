//---------------------------------------------------
// Reducers
//---------------------------------------------------

export const initialAbout = [
  {"id": 0, "name": "about"},
  {"id": 1, "name": "Design"},
  {"id": 2, "name": "Exercise"},
  {"id": 3, "name": "Humor"}
]

export const about = (state = initialAbout, {type, payload}) => {
  switch (type) {
    case GET_ABOUT:
      return payload || state;
    default:
      return state;
  }
}



export const currentAbouts = (state = {}, {type, payload}) => {
  switch (type) {
    case GET_CURRENT_ABOUT:
      return payload || state;
    default:
      return state;
  }
};

export const GET_CURRENT_ABOUT = 'GET_CURRENT_ABOUT'
export const GET_ABOUT = 'GET_ABOUT'