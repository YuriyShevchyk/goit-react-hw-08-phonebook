import { useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { editContact } from 'redux/contacts/contactsOperations';
import { Backdrop, Button, Fade, Modal, TextField, Box } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 5,
  p: 4,
};

export const FriendEditor = ({ onToggle, id, name, number, isEditOpen }) => {
  const dispatch = useDispatch();

  const initialValues = {
    name,
    number,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    number: Yup.string().required('No number provided.'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, actions) => {
      dispatch(editContact({ id, values }));
      actions.resetForm();
      onToggle();
    },
  });

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isEditOpen}
      onClose={onToggle}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isEditOpen}>
        <Box sx={style}>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              type="text"
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
              type="submit"
              variant="contained"
              sx={{ mx: 'auto', display: 'flex' }}
            >
              confirm
            </Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

FriendEditor.propTypes = {
  onToggle: PropTypes.func,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  isEditOpen: PropTypes.bool,
};
