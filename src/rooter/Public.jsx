import { Route, Routes } from 'react-router-dom';
import { Home } from '../page/Home';
import { Verify } from '../page/verify';
import Register from '../page/Register';
import PersistAuth from '../components/PersistAuth'
const Public = () => {
  return (
    <>
      <Routes>
        {/* Public routes */}
        <Route element={<PersistAuth/>}>
          <Route
            exact
            path='/'
            element={<Home />}
          />
        </Route>
        <Route
          exact
          path='/verify/:token/:id'
          element={<Verify />}
        />
        <Route
          path='/register'
          element={<Register />}
        />
      </Routes>
    </>
  );
};

export default Public;
