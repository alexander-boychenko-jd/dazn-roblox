import { createHashRouter, RouterProvider } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { EmailCheckPage } from './components/EmailCheckPage';
import { routes } from './routes';
import { LoginPage } from './components/LoginPage';
import { SignUpPage } from './components/SignUpPage';
import { AccountPage } from './components/AccountPage';
import { SubscriptionPage } from './components/SubscriptionPage';

const { landing, emailCheck, login, signUp, account, subscription } = routes;

const router = createHashRouter([
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
  {
    path: account,
    element: <AccountPage />,
  },
  {
    path: subscription,
    element: <SubscriptionPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
