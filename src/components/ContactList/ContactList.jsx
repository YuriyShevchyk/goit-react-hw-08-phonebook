//import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contacts/operations';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';

export default function PhoneBookList({ items }) {
  const dispatch = useDispatch();

  const onRemoveContact = id => {
    dispatch(removeContact(id));
  };

  const elements = items?.map(({ name, number, id }) => {
    const itemText = `${name}: ${number}`;
    return (
      <ListItem
        key={id}
        sx={{ bgcolor: '#f1f3f9', mb: 2 }}
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            type="submit"
            onClick={() => onRemoveContact(id)}
          >
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemText primary={itemText} />
      </ListItem>
    );
  });
  return (
    <Grid item sx={{ width: '100%' }}>
      <List>{elements}</List>
    </Grid>
  );
}