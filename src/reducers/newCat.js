const initionalState = 'https://cdn2.thecatapi.com/images/e9e.jpg';

const reducer = (state = initionalState, action) => {
  
  switch (action.type) {
    case 'CAT_REFRESH':
      console.log('reducer11 >>>',action)
    return action.newUrl;
  default:
    return state;
  }
};

export default reducer;
