import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { setFilter } from 'redux/filter/slice';
import { useDispatch } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

export default function Filter({ filter }) {
  const dispatch = useDispatch();

  const handleChange = e => {
    const value = e.target.value;
    dispatch(setFilter(value));
  };

  const filterID = nanoid();
  return (
    <FormControl fullWidth sx={{ m: 1 }}>
      <InputLabel htmlFor={filterID}>Find contacts by name</InputLabel>
      <Input
        id={filterID}
        type="text"
        name="filter"
        onChange={handleChange}
        value={filter}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </FormControl>
  );
}

Filter.prototype = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};