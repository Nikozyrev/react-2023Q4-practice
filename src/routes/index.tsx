import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '../pages/main';
import { Details } from '../components/details';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    children: [{ path: 'details/:id', element: <Details /> }],
  },
]);
