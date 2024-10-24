import { Box, TextField, Typography } from '@mui/material';
import { fontColor } from '../../customStyles.js';
import { SubmitButton } from '../SubmitButton/SubmitButton.js';
import { PageWrapper } from '../PageWrapper/PageWrapper.js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LandingPage = () => {
  const navigate = useNavigate();
  const robloxUserNameRegExp = /^(?!_)[a-zA-Z0-9_]{3,20}(?<!_)$/;

  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');

  const onSubmit = () => {
    const isValid = inputValue.match(robloxUserNameRegExp);
    if (isValid) {
      setInputError('');
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 3000);
      // navigate();
    } else {
      setInputError('User name should consist letters and numbers');
    }
  };

  return (
    <PageWrapper
      title="Enter your Roblox user name"
      description="To proceed with gaming let us know your user name please, we'll check it to give you more oportunities"
    >
      <Box>
        <TextField
          label="Username"
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
