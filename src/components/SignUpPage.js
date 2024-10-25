import {
  Box,
  Checkbox,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { disableInputRevert, fontColor } from '../customStyles.js';
import { SubmitButton } from './SubmitButton.js';
import { PageWrapper } from './PageWrapper.js';
import { useState } from 'react';
import { config, content } from '../consts.js';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../routes.js';

export const SignUpPage = () => {
  const {
    validation: { passwordNorValid, required },
    text: {
      signUpTitle,
      signUpDescription,
      signUpFirstNameInputLabel,
      signUpLastNameInputLabel,
      signUpEmailInputLabel,
      signUpPasswordInputLabel,
      signUpCheckbox,
    },
  } = content;
  const { loadingTime } = config;
  const { subscription } = routes;

  const location = useLocation();
  const navigate = useNavigate();

  const { email } = location.state;

  const [isLoading, setIsLoading] = useState(false);
  const [inputFirstNameValue, setInputFirstNameValue] = useState('');
  const [inputLastNameValue, setInputLastNameValue] = useState('');
  const [inputPasswordValue, setInputPasswordValue] = useState('');
  const [inputFirstNameError, setInputFirstNameError] = useState('');
  const [inputLastNameError, setInputLastNameError] = useState('');
  const [inputPasswordError, setInputPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const clearErrors = () => {
    setInputFirstNameError('');
    setInputLastNameError('');
    setInputPasswordError('');
  };

  const onSubmit = () => {
    clearErrors();

    const isEmpty = !(
      inputFirstNameValue &&
      inputLastNameValue &&
      inputPasswordValue
    );

    if (isEmpty) {
      !inputFirstNameValue && setInputFirstNameError(required);
      !inputLastNameValue && setInputLastNameError(required);
      !inputPasswordValue && setInputPasswordError(required);
    } else {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        navigate(subscription);
      }, loadingTime);
    }
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <PageWrapper title={signUpTitle} description={signUpDescription}>
      <Box display="flex" flexDirection="column" gap={2}>
        <Box>
          <TextField
            label={signUpFirstNameInputLabel}
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
              input: { disableUnderline: true },
            }}
            value={inputFirstNameValue}
            onChange={(event) => setInputFirstNameValue(event.target.value)}
          />
          {Boolean(inputFirstNameError) && (
            <Typography variant="body2" color="error">
              {inputFirstNameError}
            </Typography>
          )}
        </Box>
        <Box>
          <TextField
            label={signUpLastNameInputLabel}
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
              input: { disableUnderline: true },
            }}
            value={inputLastNameValue}
            onChange={(event) => setInputLastNameValue(event.target.value)}
          />
          {Boolean(inputLastNameError) && (
            <Typography variant="body2" color="error">
              {inputLastNameError}
            </Typography>
          )}
        </Box>
        <Box>
          <TextField
            label={signUpEmailInputLabel}
            variant="filled"
            fullWidth
            disabled
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
              input: { disableUnderline: true },
            }}
            value={email}
          />
        </Box>
        <Box>
          <TextField
            label={signUpPasswordInputLabel}
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
        <Box display="flex" gap={1}>
          <Checkbox
            disableRipple
            sx={{ color: fontColor }}
            inputProps={{ 'aria-label': 'Checkbox Roblox' }}
            style={{ padding: 0 }}
          />
          <Typography>{signUpCheckbox}</Typography>
        </Box>
        <SubmitButton onClick={onSubmit} isLoading={isLoading} />
      </Box>
    </PageWrapper>
  );
};
