import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import {
  disableInputRevert,
  fontColor,
  smothContent,
} from '../customStyles.js';
import { SubmitButton } from './SubmitButton.js';
import { PageWrapper } from './PageWrapper.js';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { config, content } from '../consts.js';
import { routes } from '../routes.js';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const LoginPage = () => {
  const {
    validation: { passwordNorValid, required },
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
  const { emailCheck, account } = routes;

  const location = useLocation();
  const navigate = useNavigate();

  const { email } = location.state;

  const [isLoading, setIsLoading] = useState(false);
  const [inputPasswordValue, setInputPasswordValue] = useState('');
  const [inputPasswordError, setInputPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = () => {
    setInputPasswordError('');

    if (!inputPasswordValue) {
      setInputPasswordError(required);
    } else {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
        inputPasswordValue === errorPassword
          ? setInputPasswordError(passwordNorValid)
          : navigate(account);
      }, loadingTime);
    }
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <PageWrapper title={loginTitle} description={loginDescription}>
      <Box display="flex" flexDirection="column" gap={2}>
        <Box>
          <TextField
            label={loginEmailInputLabel}
            variant="filled"
            disabled
            fullWidth
            style={{
              color: fontColor,
              border: '1px solid #54595D',
              borderRadius: '8px',
            }}
            sx={{
              input: { color: fontColor },
              label: { color: fontColor },
              ...disableInputRevert,
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
            value={email}
          />
        </Box>
        <Box>
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
          {Boolean(inputPasswordError) && (
            <Typography variant="body2" color="error">
              {inputPasswordError}
            </Typography>
          )}
        </Box>
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
