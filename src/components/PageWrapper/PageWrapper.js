import { Box, createTheme, ThemeProvider, Typography } from '@mui/material';
import { bgColor, fontColor } from '../../customStyles.js';
import logo from '../../assets/dazn-logo.png';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#0e151b',
      light: '#F5EBFF',
      contrastText: '#47008F',
    },
  },
  components: {
    MuiInput: {
      styleOverrides: {
        underline: {
          '&&:hover::before': {
            borderColor: 'red',
          },
        },
      },
    },
  },
});

export const PageWrapper = ({ children, title, description }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box height="100vh" maxHeight="100vh" bgcolor={bgColor} color={fontColor}>
        <Box p={2} borderBottom="2px solid #939541">
          <img
            alt="logo"
            src={logo}
            style={{
              width: '24px',
              objectFit: 'cover',
            }}
          />
        </Box>
        <Box
          height="100%"
          width="100%"
          position="fixed"
          top="5%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box display="flex" flexDirection="column" gap={2} maxWidth="30%">
            <Typography variant="h5">{title}</Typography>
            <Typography variant="body2">{description}</Typography>
            {children}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
