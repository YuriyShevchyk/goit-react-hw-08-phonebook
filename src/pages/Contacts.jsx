import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';

import FormAddContacts from 'components/ContactForm/ContactForm';
import PhoneBookList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

import { getState } from 'redux/contacts/selectors';
import { getFilteredContacts } from 'redux/contacts/selectors';
import { getFilter } from 'redux/filter/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);
  const { isLoading, error } = useSelector(getState);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {error && <Alert severity="error">Oops, something went wrong</Alert>}

        <FormAddContacts />
        {!isLoading && contacts.length > 0 && (
          <>
            <Typography
              component="div"
              variant="h5"
              sx={{ textAlign: 'center', mb: 3, mt: 3 }}
            >
              Contacts List
            </Typography>
            <Filter filter={filter} />
            <PhoneBookList items={contacts} />
          </>
        )}
        {isLoading && <p>...loading</p>}
      </Box>
    </Container>
  );
}