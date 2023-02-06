import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { addContact } from 'redux/contacts/contactsOperations';
import { onExistContact, onSuccesAddContact } from 'utils/notify';
import { Box, Button, TextField } from '@mui/material';
import { PersonAdd } from '@mui/icons-material';
import { Container } from '@mui/system';

const initialValues = {
  name: '',
  number: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  number: Yup.string('Phone number must be a "Number" type').required(
    'Please, enter valid Phone Number'
  ),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(state => state.contacts.items);
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, actions) => {
      const findedContact = contactList.find(contact =>
        contact.name.toLowerCase().includes(values.name.toLowerCase())
      );

      if (findedContact) {
        onExistContact(findedContact);
        actions.resetForm();
        return;
      } else {
        onSuccesAddContact(values);
        dispatch(addContact(values, actions));
        actions.resetForm();
      }
    },
  });

  return (
    <Container>
      <Box
        p={4}
        mt={6}
        mx="auto"
        sx={{
          maxWidth: '400px',
          boxShadow: 3,
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            type="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            sx={{ mb: 4 }}
          />

          <TextField
            fullWidth
            id="number"
            name="number"
            label="Number"
            type="text"
            value={formik.values.number}
            onChange={formik.handleChange}
            error={formik.touched.number && Boolean(formik.errors.number)}
            helperText={formik.touched.number && formik.errors.number}
            sx={{ mb: 4 }}
          />

          <Button
            variant="contained"
            type="submit"
            endIcon={<PersonAdd />}
            sx={{
              display: 'flex',
              mx: 'auto',
            }}
          >
            Add contact
          </Button>
        </form>
      </Box>
    </Container>
  );
};