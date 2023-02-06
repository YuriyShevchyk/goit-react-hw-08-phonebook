import { useDispatch, useSelector } from 'react-redux';
import { FriendItem } from './FriendItem';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { useEffect } from 'react';
import { Box } from '@mui/material';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contactList = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  const filteredContacts = contactList.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return (
    <Box
      as="ul"
      sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 2 }}
    >
      {filteredContacts.map(({ id, name, number }) => (
        <FriendItem key={id} id={id} name={name} number={number} />
      ))}
    </Box>
  );
};