import { Typography } from '@mui/material';
import { PageWrapper } from './PageWrapper.js';
import { content } from '../consts.js';

export const SubscriptionPage = () => (
  <PageWrapper>
    <Typography variant="h4">{content.text.subscriptionPageTitle}</Typography>
  </PageWrapper>
);
