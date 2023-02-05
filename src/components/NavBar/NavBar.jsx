import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

import { useAuth } from 'hooks/useAuth';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthMenu from 'components/AuthMenu/AuthMenu';

export default function NavBar() {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Typography variant="h4" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          PhoneBook
        </Typography>

        {isLoggedIn ? <UserMenu /> : <AuthMenu />}
      </Toolbar>
    </AppBar>
  );
}