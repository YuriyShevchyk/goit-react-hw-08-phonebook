import { Box, Link, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { Link as NavLink } from 'react-router-dom';

export const WelcomePage = () => {
  return (
    <Container sx={{ maxWidth: '1400px' }}>
      <Box
        as={'main'}
        maxWidth="800px"
        mx="auto"
        textAlign="center"
        sx={{
          height: '90vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          color: 'text.primary',
        }}
      >
        <Typography variant="h2" component="h1" fontWeight={'800'}>
          Welcome to your phone book page.
        </Typography>
        <Typography variant="h4" component="p" fontWeight={'600'}>
          Please{' '}
          <Link
            to="/register"
            component={NavLink}
            sx={{ textDecoration: 'none' }}
          >
            register
          </Link>{' '}
          or{' '}
          <Link to="/login" component={NavLink} sx={{ textDecoration: 'none' }}>
            login
          </Link>
          .
        </Typography>
      </Box>
    </Container>
  );
};
