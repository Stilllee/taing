import { createBrowserRouter } from 'react-router-dom';
import App from '../App.tsx';
import Home from '@pages/Home/Home.tsx';
import OnBoarding from '@pages/OnBoarding/OnBoarding.tsx';
import ErrorPage from '@pages/ErrorPage/ErrorPage.tsx';
import SignUp from '@pages/SignUp/SignUp.tsx';
import LogIn from '@pages/LogIn/LogIn.tsx';
import LoginSelection from '@pages/LoginSelection/LoginSelection.tsx';
import Profile from '@pages/Profile/Profile.tsx';
import Detail from '@pages/Detail/Detail.tsx';
import FindId from '@pages/FindId/FindId.tsx';
import FindPassword from '@pages/FindPassword/FindPassword.tsx';
import ProfileEdit from '@pages/ProfileEdit/ProfileEdit.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'detail/:id',
        element: <Detail />,
      },
      {
        path: 'onboarding',
        element: <OnBoarding />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: 'login-selection',
        element: <LoginSelection />,
      },
      {
        path: 'login',
        element: <LogIn />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'profile-edit',
        element: <ProfileEdit />,
      },
      {
        path: 'find-id',
        element: <FindId />,
      },
      {
        path: 'find-password',
        element: <FindPassword />,
      },
    ],
  },
]);
