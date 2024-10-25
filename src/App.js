import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LandingPage } from './components/LandingPage/LandingPage';
import { EmailCheckPage } from './components/EmailCheckPage/EmailCheckPage';
import { routes } from './routes';
import { LoginPage } from './components/LoginPage/LoginPage';
import { SignUpPage } from './components/SignUpPage/SignUpPage';

const { landing, emailCheck, login, signUp } = routes;

const router = createBrowserRouter([
  {
    path: landing,
    element: <LandingPage />,
  },
  {
    path: emailCheck,
    element: <EmailCheckPage />,
  },
  {
    path: login,
    element: <LoginPage />,
  },
  {
    path: signUp,
    element: <SignUpPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
