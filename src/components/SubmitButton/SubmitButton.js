import { Button, CircularProgress } from '@mui/material';

export const SubmitButton = ({ disabled = false, onClick, isLoading }) => (
  <Button
    borderRadius={8}
    style={{
      width: '100%',
      color: '#000000',
      fontWeight: 700,
      backgroundColor: '#f7ff1a',
      minHeight: '56px',
      margin: '16px 0',
    }}
    disabled={disabled}
    onClick={onClick}
  >
    {isLoading ? <CircularProgress color='secondary' /> : 'Continue'}
  </Button>
);
