import { BrowserRouter } from 'react-router-dom';
// import Private from './Private';
import Public from './Public';

const Root = () => {
  
  return (
    <>
      <BrowserRouter>
        <Public />
        {/* <Private /> */}
      </BrowserRouter>
    </>
  );
};

export default Root;
