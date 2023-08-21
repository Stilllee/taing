import { createBrowserRouter } from 'react-router-dom';
import App from '../App.tsx';
import Home from '@pages/Home/Home.tsx';
import OnBoarding from '@pages/OnBoarding/OnBoarding.tsx';
import ErrorPage from '@pages/ErrorPage/ErrorPage.tsx';
import Landing from '@pages/Landing/Landing.tsx';
import Live from '@pages/Live/Live.tsx';
import Tv from '@pages/Tv/Tv.tsx';
import Movie from '@pages/Movie/Movie.tsx';
import SignUp from '@pages/SignUp/SignUp.tsx';
import LogIn from '@pages/LogIn/LogIn.tsx';
import LogOut from '@pages/LogOut/LogOut.tsx';
import Profile from '@pages/Profile/Profile.tsx';
import Detail from '@pages/Detail/Detail.tsx';

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
        path: 'landing',
        element: <Landing />,
      },
      {
        path: 'live',
        element: <Live />,
      },
      {
        path: 'tv',
        element: <Tv />,
      },
      {
        path: 'movie',
        element: <Movie />,
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
        path: 'login',
        element: <LogIn />,
      },
      {
        path: 'logout',
        element: <LogOut />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
]);
