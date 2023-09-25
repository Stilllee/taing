
import { getAuth } from 'firebase/auth';
import firebaseApp from '../../../firebase';

// 필요시 아래 처럼 파일 생성 후 사용
// export * from './useSignUp';
export * from './useSignIn';
export * from './useSignInWithGoogle';
export * from './useResetPassword';
export * from './useSignOut';
export * from './useAuthState';


export const auth = getAuth(firebaseApp);
auth.useDeviceLanguage();
