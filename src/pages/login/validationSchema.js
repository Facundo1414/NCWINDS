import * as yup from 'yup';

export default yup.object({
  username: yup
    .string()
    .min(4, 'Username must contain at least 4 characters.')
    .required('Username is required')
    .matches(/^[0-9a-zA-Z_.]+$/, 'Username must be valid.'),
  email: yup
    .string()
    .email('Email must be valid.')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*|#?`&~^_+(){}[:;"'<>,.=\-\]/\\?])[A-Za-z\d@$!%`*|#?&~^_+(){}[:;"'<>,.=\-\]/\\?]{8,}$/,
      'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special case character.'
    ),
});
