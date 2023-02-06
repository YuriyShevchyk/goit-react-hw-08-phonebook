import { useState } from 'react';
import { Link as NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Box, IconButton, Link, Typography } from '@mui/material';
import { PersonAdd } from '@mui/icons-material';

import LogoutIcon from '@mui/icons-material/Logout';
import { logoutUser } from 'redux/auth/authOperations';
import { AddContact } from 'components/ContactForm/AddContact';

export const UserMenu = () => {
  const name = useSelector(state => state.auth.user.name);
  const dispatch = useDispatch();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
        <Link
          component={NavLink}
          to={'/contacts'}
          sx={{
            color: 'inherit',
            textDecoration: 'none',
            '&:hover': {
              color: 'text.secondary',
            },
          }}
        >
          My Contacts
        </Link>
        <Link
          sx={{
            color: 'inherit',
            textDecoration: 'none',
            cursor: 'pointer',
            display: { xs: 'none', sm: 'flex' },
            '&:hover': {
              color: 'text.secondary',
            },
          }}
          onClick={() => setIsDrawerOpen(true)}
        >
          Add Contact
        </Link>
        <IconButton
          onClick={() => setIsDrawerOpen(true)}
          sx={{
            color: 'inherit',
            display: { xs: 'flex', sm: 'none' },
          }}
        >
          <PersonAdd />
        </IconButton>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography
          mr={3}
          variant="h6"
          component="span"
          sx={{ display: { xs: 'none', sm: 'flex' } }}
        >
          Welcome, {name}
        </Typography>

        <IconButton
          onClick={() => dispatch(logoutUser())}
          sx={{
            color: 'inherit',
            '&:hover': {
              color: 'text.secondary',
            },
          }}
        >
          <LogoutIcon />
        </IconButton>
      </Box>

      <AddContact
        isDrawerOpen={isDrawerOpen}
        closeDrawer={() => setIsDrawerOpen(false)}
      />
    </Box>
  );
};