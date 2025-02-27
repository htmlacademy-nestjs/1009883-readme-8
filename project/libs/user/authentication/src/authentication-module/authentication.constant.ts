export enum AuthMessages {
  UserExists = 'User with this email exists',
  LoginFailed = 'Wrong password or email',
  UserNotFound = 'User not found',
  OldPasswordWrong = 'Old password is wrong.',
}

export const AuthenticationResponseMessage = {
  LoggedSuccess: 'User has been successfully logged.',
  LoggedError: 'Password or Login is wrong.',
  UserFound: 'User found',
  UserNotFound: 'User not found',
  UserExist: 'User with the email already exists',
  UserCreated: 'The new user has been successfully created.',
  ServerError: 'Internal server error',
  PasswordChanged: 'Password was successfully changed.',
  PasswordChangeUnauthorized: 'Authentication failed or old password is wrong.',
  RefreshSuccess: 'Get a new access/refresh tokens',
  RefreshFailure: 'Wrong refresh token',
  SubsciptionSucess: 'Successfullly subscribed or unsubscribed',
  JwtAuthFailed: 'JWT authentification failed',
  PostsCountSuccess: 'Posts count was successfully altered.',
} as const;

export const AuthenticationValidateMessage = {
  EmailNotValid: 'The email is not valid',
} as const;
