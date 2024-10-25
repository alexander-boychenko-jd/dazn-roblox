import {
  Box,
  Checkbox,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { fontColor } from '../../customStyles.js';
import { SubmitButton } from '../SubmitButton/SubmitButton.js';
import { PageWrapper } from '../PageWrapper/PageWrapper.js';
import { useState } from 'react';
import { config, content } from '../../consts.js';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const SignUpPage = () => {
  const {
    validation: { passwordNorValid },
    text: {
      signUpTitle,
      signUpDescription,
      signUpFirstNameInputLabel,
      signUpLastNameInputLabel,
      signUpEmailInputLabel,
      signUpPasswordInputLabel,
      signUpCheckbox,
    },
    inputs: { errorPassword },
  } = content;
  const { loadingTime } = config;

  const inputEmailValue = 'test@mail.com';

  const [isLoading, setIsLoading] = useState(false);
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
    <PageWrapper title={signUpTitle} description={signUpDescription}>
      <Box display="flex" flexDirection="column" gap={2}>
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
        />
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
        />
        <TextField
          label={signUpEmailInputLabel}
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
          value={inputEmailValue}
        />
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
        {Boolean(inputError) && (
          <Typography variant="body2" color="error">
            {inputError}
          </Typography>
        )}
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
