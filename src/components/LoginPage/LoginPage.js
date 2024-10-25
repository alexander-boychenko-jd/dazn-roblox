import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { fontColor, smothContent } from '../../customStyles.js';
import { SubmitButton } from '../SubmitButton/SubmitButton.js';
import { PageWrapper } from '../PageWrapper/PageWrapper.js';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { config, content } from '../../consts.js';
import { routes } from '../../routes.js';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const LoginPage = () => {
  const {
    validation: { passwordNorValid },
    text: {
      loginTitle,
      loginDescription,
      loginEmailInputLabel,
      loginPasswordInputLabel,
      loginForgotPassword,
    },
    inputs: { errorPassword },
  } = content;
  const { forgotPassword } = routes;
  const { loadingTime } = config;
  const { emailCheck } = routes;

  const [isLoading, setIsLoading] = useState(false);
  const [inputEmailValue, setInputEmailValue] = useState('');
  const [inputPasswordValue, setInputPasswordValue] = useState('');
  const [inputError, setInputError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = () => {
    setInputError('');
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      inputPasswordValue === errorPassword && setInputError(passwordNorValid);
    }, loadingTime);
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <PageWrapper title={loginTitle} description={loginDescription}>
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField
          label={loginEmailInputLabel}
          variant="filled"
          fullWidth
          style={{
            color: fontColor,
            border: '1px solid #54595D',
            borderRadius: '8px',
          }}
          sx={{
            input: { color: fontColor },
            label: { color: fontColor },
          }}
          slotProps={{
            input: {
              disableUnderline: true,
              endAdornment: (
                <Link
                  to={emailCheck}
                  style={{
                    color: smothContent,
                    fontSize: 14,
                    textDecoration: 'none',
                  }}
                >
                  CHANGE
                </Link>
              ),
            },
          }}
          value={inputEmailValue}
          onChange={(event) => setInputEmailValue(event.target.value)}
        />
        <TextField
          label={loginPasswordInputLabel}
          variant="filled"
          type={showPassword ? 'text' : 'password'}
          fullWidth
          style={{
            color: fontColor,
            border: '1px solid #54595D',
            borderRadius: '8px',
          }}
          sx={{
            input: { color: fontColor },
            label: { color: fontColor },
          }}
          slotProps={{
            input: {
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? 'hide the password'
                        : 'display the password'
                    }
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? (
                      <VisibilityOff color="primary" />
                    ) : (
                      <Visibility color="primary" />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
          onChange={(event) => setInputPasswordValue(event.target.value)}
        />
        {Boolean(inputError) && (
          <Typography variant="body2" color="error">
            {inputError}
          </Typography>
        )}
        <Link
          to={forgotPassword}
          style={{ textDecoration: 'none', color: smothContent }}
        >
          {loginForgotPassword}
        </Link>
        <SubmitButton onClick={onSubmit} isLoading={isLoading} />
      </Box>
    </PageWrapper>
  );
};
