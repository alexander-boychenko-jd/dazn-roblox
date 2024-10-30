export const content = {
  validation: {
    userName:
      'User name may consist letters, numbers and underscores only inside the name',
    userNameNotExt:
      'There is no such Roblox user name, please enter a valid name',
    email: 'Please enter a valid email address',
    passwordNorValid: 'Your password is not valid',
    required: 'Please enter a correct value',
  },
  text: {
    landingVanityTitle: 'DAZN landing page',
    landingVanityLink: 'Boxing bets',
    landingTitle: 'Enter your Roblox user name',
    landingDescription:
      "To proceed with gaming let us know your user name please, we'll check it to give you more oportunities",
    landingInputLabel: 'Username',
    signUpLoginText: 'Login / Sign Up',
    emailTitle: 'Enter your email to continue',
    emailDescription:
      "Login with your DAZN account. If you don't have one you will be prompted to create one on a next page",
    emailInputLabel: 'Email',
    loginTitle: 'Enter your password to continue',
    loginDescription:
      "Login with your DAZN account. If you don't have one you will be prompted to create one on an Email change button click",
    loginEmailInputLabel: 'Emai',
    loginPasswordInputLabel: 'Password',
    loginForgotPassword: 'Forgot your password?',
    signUpTitle: 'Create an account to continue',
    signUpDescription:
      'Add your name and password to access DAZN on any device at any time',
    signUpFirstNameInputLabel: 'First name',
    signUpLastNameInputLabel: 'Last name',
    signUpEmailInputLabel: 'Email address',
    signUpPasswordInputLabel: 'Choose password',
    signUpCheckbox:
      'Get ocassional emails about special offers, DAZN news and more. Check this box to opt out marketing messages',
      accountPageTitle: 'DAZN account page',
      subscriptionPageTitle: 'DAZN subscriptions page'
  },
  inputs: {
    errorPassword: 'password_error',
    loginEmail: 'login@mail.com',
    signUpEmail: 'signup@mail.com',
    robloxErrorName: 'roblox_error',
  },
};

export const regExps = {
  robloxNameRegExp: /^(?!_)[a-zA-Z0-9_]{3,20}(?<!_)$/,
  emailRegExp: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
};

export const config = {
  loadingTime: 2000,
};
