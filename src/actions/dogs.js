import axios from 'axios';

const DOG_REFRESH = 'DOG_REFRESH';


const btnRDogs = () => (dispath) => {
  console.log('action dogs!');
  axios.get('https://dog.ceo/api/breeds/image/random')
    .then(r => {
      dispath({
        type: DOG_REFRESH,
        newUrl: r.data.message,
      }); 
    });
};

export default btnRDogs;

btnRDogs();