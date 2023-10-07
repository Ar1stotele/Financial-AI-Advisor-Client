import { Route, Routes } from 'react-router-dom';
import { Events, HomePage } from '../pages';

export function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/events" element={<Events />}></Route>
      <Route path="/*" element={<div>Not found</div>}></Route>
    </Routes>
  );
}

export default Navigation;
