import { Box, TextField, Typography } from '@mui/material';
import { fontColor } from '../../customStyles.js';
import { SubmitButton } from '../SubmitButton/SubmitButton.js';
import { PageWrapper } from '../PageWrapper/PageWrapper.js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { config, content, regExps } from '../../consts.js';
import { routes } from '../../routes.js';

export const EmailCheckPage = () => {
  const {
    text: { emailTitle, emailDescription, emailInputLabel },
    validation: { email },
  } = content;
  const { loadingTime } = config;
  const { emailRegExp } = regExps;
  const { login } = routes;
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');

  const onSubmit = () => {
    const isValid = inputValue.match(emailRegExp);
    if (isValid) {
      setInputError('');
      setIsLoading(true);
      setTimeout(() => {
        navigate(login);
        setIsLoading(false)
      }, loadingTime);      
    } else {
      setInputError(email);
    }
  };

  return (
    <PageWrapper title={emailTitle} description={emailDescription}>
      <Box>
        <TextField
          label={emailInputLabel}
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
          onChange={(event) => setInputValue(event.target.value)}
        />
        {Boolean(inputError) && (
          <Typography variant="body2" color="error">
            {inputError}
          </Typography>
        )}
        <SubmitButton onClick={onSubmit} isLoading={isLoading} />
      </Box>
    </PageWrapper>
  );
};
