import 'bootstrap';
import '../styles/main.scss';
import cowList from './components/cowList/cowList';

const init = () => {
  console.error('hi');
  cowList.buildCows();
};

init();
