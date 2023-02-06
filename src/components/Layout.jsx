import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { NavBar } from './AppBar/AppBar';

export const Layout = ({ colorModeContext }) => {
  return (
    <Box
      margin="0 auto"
      sx={{
        backgroundColor: 'background.paper',
        minHeight: '100vh',
      }}
    >
      <NavBar colorModeContext={colorModeContext} />
      <Outlet />
    </Box>
  );
};