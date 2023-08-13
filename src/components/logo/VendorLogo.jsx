/* eslint-disable react/prop-types */
import { Avatar, Stack, Typography } from '@mui/material';

const VendorLogo = ({ avatar, vendorName, marginLeft, fontSize }) => {
  return (
    <Stack direction="row" mb="6px" alignItems="center">
      <Avatar src={avatar} sx={{ width: 24, height: 24 }} />
      <Typography ml={marginLeft} fontSize={fontSize} fontWeight={600}>
        {vendorName}
      </Typography>
    </Stack>
  );
};

export default VendorLogo;
