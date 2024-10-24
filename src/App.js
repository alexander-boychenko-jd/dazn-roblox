import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LandingPage } from './components/LandingPage/LandingPage';
import { EmailCheckPage } from './components/EmailCheckPage/EmailCheckPage';
import { routes } from './routes';

const { landing, emailCheck } = routes;

const router = createBrowserRouter([
  {
    path: landing,
    element: <LandingPage />,
  },
  {
    path: emailCheck,
    element: <EmailCheckPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
