import { NavLink } from 'react-router-dom';
import { Box, Button } from '@mui/material';

const navLinkStyle = {
  color: 'text.secondary',
  marginRight: 4,
  '&:hover': {
    color: 'text.primary',
  },

  '&.active': {
    color: 'white',
  },
};

export const AuthNav = () => {
  return (
    <Box ml="auto" display="flex">
      <Button
        variant="text"
        component={NavLink}
        to="/register"
        sx={navLinkStyle}
      >
        Register
      </Button>
      <Button variant="text" component={NavLink} to="/login" sx={navLinkStyle}>
        Log IN
      </Button>
    </Box>
  );
};