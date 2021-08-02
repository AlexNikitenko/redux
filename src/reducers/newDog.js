// const initionalState = 'https://images.dog.ceo/breeds/terrier-norwich/n02094258_778.jpg';
const initionalState = { uri: 'https://images.dog.ceo/breeds/terrier-norwich/n02094258_778.jpg', dogBreed: 'terrier-norwich', prevDog: null };

const reducer = (state = initionalState, action) => {

  
  switch (action.type) {
    case 'DOG_REFRESH':
      console.log('reducer11 >>>', action, 'State>>>', state);
      initionalState.prevDog = state;
    return action.newUrl;
    case 'DOG_PREV':
      console.log('reducer12 >>>', action, 'State>>>', state);
    return initionalState.prevDog;
  default:
    return state.uri;
  }
};

export default reducer;
