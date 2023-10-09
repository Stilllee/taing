import { useAuthState } from './auth';
import { useCustomNavigate } from './useCustomNavigate';

const useRedirect = () => {
  const { user } = useAuthState();
  const { navigateTo } = useCustomNavigate();

  function userLoggedInCheck() {
    if (user) navigateTo('/', true);
  }

  return { userLoggedInCheck, user };
};

export default useRedirect;
