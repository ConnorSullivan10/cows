import cowData from '../../helpers/data/cows';

import './cowList.scss';

const buildCows = () => {
  cowData.getCows()
    .then((response) => {
      const demCows = response.data.cows;
      const cows = [];
      Object.keys(demCows).forEach((cowId) => {
        // demCows['cow3']
        // object.keys gets you an array of all the keys in an object
        demCows[cowId].id = cowId;
        // .id assigns an id and creates (= sign) a string
        cows.push(demCows[cowId]);
        // use bracket notation since cowID is a string
      });
      console.log('it worked!', cows);
    })
    .catch((error) => {
      console.error('shit broke', error);
    });
};

export default { buildCows };
