export enum AuthMessages {
  UserExists = 'User with this email exists',
  LoginFailed = 'Wrong password or email',
  UserNotFound = 'User not found',
}

export const AuthenticationResponseMessage = {
  LoggedSuccess: 'User has been successfully logged.',
  LoggedError: 'Password or Login is wrong.',
  UserFound: 'User found',
  UserNotFound: 'User not found',
  UserExist: 'User with the email already exists',
  UserCreated: 'The new user has been successfully created.',
} as const;
