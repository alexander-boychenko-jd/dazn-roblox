import { Box, IconButton, Modal, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { fontColor, smothContent } from '../customStyles.js';
import { SubmitButton } from './SubmitButton.js';
import { PageWrapper } from './PageWrapper.js';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '../routes.js';
import { config, content, regExps } from '../consts.js';

export const LandingPage = () => {
  const {
    text: {
      landingTitle,
      landingDescription,
      landingInputLabel,
      landingVanityTitle,
      landingVanityLink,
      signUpLoginText,
    },
    validation: { userName, userNameNotExt, required },
    inputs: { robloxErrorName },
  } = content;
  const { robloxNameRegExp } = regExps;
  const { loadingTime } = config;
  const searchParams = window.location.search;

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showActionButton, setShowActionButton] = useState(false);

  const onSubmit = () => {
    const isValid = inputValue.match(robloxNameRegExp);
    if (isValid) {
      setInputError('');
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);

        if (inputValue === robloxErrorName) {
          setInputError(userNameNotExt);
        } else {
          assignParameter();
        }
      }, loadingTime);
    } else {
      setInputError(inputValue ? userName : required);
    }
  };

  const assignParameter = () => {
    const urlParams = new URLSearchParams(searchParams);

    urlParams.set('aref', 'roblox_id_146');
    window.location.search = urlParams;
  };

  useEffect(() => {
    searchParams.match('aref') && setShowActionButton(true);
  }, [searchParams]);

  return (
    <>
      <PageWrapper>
        <Box>
          <Typography variant="h4">{landingVanityTitle}</Typography>
          <Typography
            variant="h6"
            color="success"
            onClick={() => setShowModal(true)}
            style={{
              cursor: 'pointer',
              textAlign: 'center',
            }}
          >
            {landingVanityLink}
          </Typography>
          {showActionButton && (
            <SubmitButton
              onClick={() => navigate(routes.emailCheck)}
              text={signUpLoginText}
            />
          )}
        </Box>
        <Modal open={showModal} onClose={() => setShowModal(false)}>
          <Box
            height="100%"
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              height="fit-content"
              width="fit-content"
              style={{
                padding: '24px',
                backgroundColor: '#000000',
                border: `1px solid ${smothContent}`,
                borderRadius: '8px',
              }}
            >
              <Box display="flex" justifyContent="flex-end">
                <IconButton
                  onClick={() => setShowModal(false)}
                  style={{ padding: 0 }}
                >
                  <CloseIcon color="primary" />
                </IconButton>
              </Box>
              <Box mb={2} display="flex" flexDirection="column" gap={1}>
                <Typography variant="h5" color="primary">
                  {landingTitle}
                </Typography>
                <Typography variant="body2" color="primary">
                  {landingDescription}
                </Typography>
              </Box>
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
          </Box>
        </Modal>
      </PageWrapper>
    </>
  );
};
