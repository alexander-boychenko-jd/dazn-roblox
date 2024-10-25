import { Box, TextField, Typography } from '@mui/material';
import { fontColor } from '../../customStyles.js';
import { SubmitButton } from '../SubmitButton/SubmitButton.js';
import { PageWrapper } from '../PageWrapper/PageWrapper.js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../routes.js';
import { content, regExps } from '../../consts.js';

export const LandingPage = () => {
  const {
    text: { landingTitle, landingDescription, landingInputLabel },
    validation: { userName },
  } = content;
  const { robloxUserNameRegExp } = regExps;

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');

  const onSubmit = () => {
    const isValid = inputValue.match(robloxUserNameRegExp);
    if (isValid) {
      setInputError('');
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        navigate(routes.emailCheck);
      }, 2000);
    } else {
      setInputError(userName);
    }
  };

  return (
    <PageWrapper title={landingTitle} description={landingDescription}>
      <Box>
        <TextField
          label={landingInputLabel}
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
