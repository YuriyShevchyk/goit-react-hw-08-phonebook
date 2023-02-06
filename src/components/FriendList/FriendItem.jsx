import { ModeEdit, PersonRemove } from '@mui/icons-material';
import { Box, IconButton, ListItem, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { FriendEditor } from 'components/FriendEdit/FriendEdit';
import { onDeleteContact } from 'utils/notify';

const style = {
  color: 'currentColor',
  '&:hover': {
    backgroundColor: 'primary',
    color: 'text.secondary',
  },
};

export const FriendItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [isEditOpen, setIsEditOpen] = useState(false);

  return (
    <ListItem
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: 4,
        backgroundColor: 'divider',
      }}
    >
      <Box
        sx={{
          width: '550px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: 'text.primary',
        }}
      >
        <Typography variant="body1" component="p">
          {name}:
        </Typography>
        <Typography variant="body1" component="span">
          {number}
        </Typography>
      </Box>
      <Box
        display="flex"
        sx={{
          color: 'text.primary',
        }}
      >
        <IconButton
          type="button"
          onClick={() => setIsEditOpen(true)}
          color="inherit"
          sx={style}
        >
          <ModeEdit />
        </IconButton>
        <IconButton
          type="button"
          onClick={() => {
            onDeleteContact(name);
            dispatch(deleteContact(id));
          }}
          sx={style}
        >
          <PersonRemove />
        </IconButton>
      </Box>
      {isEditOpen && (
        <FriendEditor
          id={id}
          name={name}
          number={number}
          isEditOpen={isEditOpen}
          onToggle={() => setIsEditOpen(false)}
        />
      )}
    </ListItem>
  );
};

FriendItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};