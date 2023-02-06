import { Button, Container, TextField, Box } from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/authOperations';
import * as Yup from 'yup';
import { LoginOutlined } from '@mui/icons-material';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string()
    .required('No password provided.')
    .min(6, 'Password is too short - should be 6 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

export const Login = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, actions) => {
      dispatch(loginUser(values));
      actions.resetForm();
    },
  });
  return (
    <main>
      <Container sx={{ pt: 5 }}>
        <Box
          p={4}
          mb={5}
          mx="auto"
          sx={{
            maxWidth: '400px',
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
          }}
        >
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="E-mail"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              sx={{ mb: 4 }}
            />

            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              sx={{ mb: 5 }}
            />

            <Button
              type="submit"
              variant="contained"
              endIcon={<LoginOutlined />}
              sx={{ mx: 'auto', display: 'flex' }}
            >
              Log In
            </Button>
          </form>
        </Box>
      </Container>
    </main>
  );
};