/* eslint-disable react/no-unescaped-entities */
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { Link } from 'react-router-dom';

const Policy = () => {
  return (
    <FormGroup sx={{ color: 'white', marginTop: 5 }}>
      <FormControlLabel
        control={
          <Checkbox
            sx={{
              color: '#FEF0C7',
              backgroundColor: 'Primary/500',
              backgroundSize: '1px',
              borderRadius: '16px',
              '&.Mui-checked': {
                color: '#FDC600',
              },
            }}
          />
        }
        label="I agree to Trybe’s terms and conditions, end user license agreement, and privacy policy "
      />
      <FormControlLabel
        required
        control={
          <Checkbox
            sx={{
              color: '#FEF0C7',
              backgroundColor: 'Primary/500',
              backgroundSize: '1px',
              borderRadius: '16px',
              '&.Mui-checked': {
                color: '#FDC600',
              },
            }}
          />
        }
        label={
          <span>
            I agree to Trybe's <Link>terms and conditions</Link>, <Link>end user license agreement</Link>, and
            <Link>privacy policy</Link>
          </span>
        }
      />
      <FormControlLabel
        required
        control={
          <Checkbox
            sx={{
              color: '#FEF0C7',
              backgroundColor: 'Primary/500',
              backgroundSize: '1px',
              borderRadius: '16px',
              '&.Mui-checked': {
                color: '#FDC600',
              },
            }}
          />
        }
        label={<span>Keep me updated on Trybe news, events and offers</span>}
      />
    </FormGroup>
  );
};

export default Policy;
