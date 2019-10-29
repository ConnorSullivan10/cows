import cowData from '../../helpers/data/cows';

import './cowList.scss';

const buildCows = () => {
  cowData.getCows()
    .then((response) => {
      console.log('cow array from cowList', response);

      // call a domStringBuilder function and pass in cows
    })
    .catch((error) => {
      console.error('shit broke', error);
    });
};

export default { buildCows };
