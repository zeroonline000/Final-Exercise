/* eslint-disable react/prop-types */
import VisibilityIcon from '@mui/icons-material/Visibility';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useState } from 'react';
import { Controller } from 'react-hook-form';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const PasswordField = (props) => {
  const { name, form, title, placeholder } = props;
  const {
    formState: { errors },
  } = form;

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((x) => !x);
  };
  return (
    <div>
      {/* <Controller
        name={name}
        // rules={rules}
        control={form.control}
        render={({ field }) => <TextField {...field} fullWidth label={label} variant="outlined" margin="normal" />}
      />
      {errors[name] && <span style={{ color: 'red' }}>{errors[name].message}</span>} */}
      <InputLabel sx={{ color: 'white', fontSize: 14, fontWeight: 500, marginBottom: '10px' }}>{title}</InputLabel>
      <FormControl fullWidth sx={{ borderRadius: 2 }}>
        <Controller
          name={name}
          control={form.control}
          id={name}
          render={({ field }) => (
            <OutlinedInput
              {...field}
              fullWidth
              placeholder={placeholder}
              type={showPassword ? 'text' : 'password'}
              sx={{ height: '44px', backgroundColor: 'white' }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="toggle password visibility" onClick={toggleShowPassword} edge="end">
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              }
            />
          )}
        />
        {errors[name] && <span style={{ color: '#f5a3a3' }}>{errors[name].message}</span>}
      </FormControl>
    </div>
  );
};

export default PasswordField;
