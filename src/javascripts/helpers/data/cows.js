import axios from 'axios';

// const getCows = () => axios.get('https://teamtreehouse.com/ashleyclaiborne.json');
const getCows = () => new Promise((resolve, reject) => {
  // promise in a promise
  axios.get('../../../../db/cows.json').then((response) => {
    const demCows = response.data.cows;
    const cows = [];
    Object.keys(demCows).forEach((cowId) => {
      // demCows['cow3']
      // object.keys gets you an array of all the keys in an object
      demCows[cowId].id = cowId;
      // .id assigns an id and creates (= sign) a string that's pushed into the array
      cows.push(demCows[cowId]);
      // use bracket notation since cowID is a string
    });
    resolve(cows);
  }).catch((error) => reject(error));
  // take result of error and pass it as the error message in the new promise
});


// axios.get('../../../../db/cows.json');

export default { getCows };
