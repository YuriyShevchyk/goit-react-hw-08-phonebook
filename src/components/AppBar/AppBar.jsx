import { useDispatch, useSelector } from 'react-redux';
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import { AuthNav } from './Auth';
import { UserMenu } from './UserMenu';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
// import { toggleTheme } from 'redux/Theme/ThemeSlice';

export const NavBar = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <AppBar
      position="static"
      sx={{
        maxWidth: 'xl',
      }}
    >
      <Toolbar
        sx={{
          width: '100%',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <Typography
          variant="h6"
          component="span"
          mr={5}
          sx={{ display: { xs: 'none', md: 'inline-block' } }}
        >
          MyPhonebook
        </Typography>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
        
      </Toolbar>
    </AppBar>
  );
};

// function ThemeToggler() {
//   const dispatch = useDispatch();

//   const theme = useTheme();

//   return (
//     <>
//       <IconButton
//         sx={{ ml: 1 }}
//         onClick={() => {
//           dispatch(toggleTheme());
//         }}
//         color="inherit"
//       >
//         {theme.palette.mode === 'dark' ? (
//           <Brightness7Icon />
//         ) : (
//           <Brightness4Icon />
//         )}
//       </IconButton>
//     </>
//   );
// }