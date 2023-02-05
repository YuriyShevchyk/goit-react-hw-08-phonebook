import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { useAuth } from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function UserMenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Button
        onClick={() => {
          navigate('/contacts');
        }}
        variant="button"
        color="text.primary"
        sx={{ my: 1, mx: 1.5 }}
      >
        Contacts
      </Button>
      <Avatar>{user.name[0]}</Avatar>
      <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
        {user.name}
      </Typography>
      <Button
        onClick={() => dispatch(logOut())}
        variant="outlined"
        sx={{ my: 1, mx: 1.5 }}
      >
        Log Out
      </Button>
    </Stack>
  );
}