import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LandingPage } from './components/LandingPage/LandingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/another',
    element: <div>Hello another world!</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
