import axios from 'axios';

const CAT_REFRESH = 'CAT_REFRESH';

const btnR = () => (dispath) => {
  console.log('action!');
  axios.get('https://api.thecatapi.com/v1/images/search')
    .then(r => {
      dispath({
        type: CAT_REFRESH,
        newUrl: r.data[0].url,
      }); 
    });
};

export default btnR;

/////

// const dispath =() => {
//   // asdfasdf
// }

btnR();