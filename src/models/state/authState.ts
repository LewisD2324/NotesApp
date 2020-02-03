export interface AuthState {
  // loading: boolean;

  isLoggingIn: boolean;
  isLoggingOut: boolean;
  isVerifying: boolean;
  authError: string;
  logoutError: boolean;
  isAuthenticated: boolean;
  user: any;
  userid: string | undefined;
  verifyingError: boolean;
  isSigningUp: boolean;
  email: string;
  password: string;
}
