import { useDispatch, useSelector } from 'react-redux';
import { Box, TextField } from '@mui/material';
import { Container } from '@mui/system';
import { ToastContainer } from 'react-toastify';
import { filterChange } from 'redux/filter/filterSlice';
import { ContactList } from 'components/FriendList/FriendList';

export const Contacts = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter);

  return (
    <Container>
      <Box as={'main'} pt={4} maxWidth="700px" mx="auto">
        <TextField
          fullWidth
          type="search"
          label="Search"
          value={value}
          variant="standard"
          onChange={evt => dispatch(filterChange(evt.currentTarget.value))}
        />
        <ContactList />
        <ToastContainer />
      </Box>
    </Container>
  );
};