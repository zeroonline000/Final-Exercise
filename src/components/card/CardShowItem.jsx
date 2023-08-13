/* eslint-disable react/prop-types */
import { Box, CardMedia, Stack, Typography } from '@mui/material';
import Button from '../button/Button';
import VendorLogo from '../logo/VendorLogo';

const CardShowItem = ({ props }) => {
  const { name, member, thumbnail, button, vendorAvatar, vendorName, eventName, date } = props;
  return (
    <Box maxWidth={608} marginX="auto">
      <Box>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Stack direction="row" alignItems="center">
            <CardMedia
              component="img"
              image={thumbnail}
              sx={{ width: 76, height: 76, borderRadius: '16px', boxShadow: 1 }}
            />
            <Box ml={3}>
              {vendorAvatar && (
                <VendorLogo avatar={vendorAvatar} vendorName={vendorName} marginLeft="12px" fontSize="14px" />
              )}
              <Typography>{eventName}</Typography>
              <Typography>{date}</Typography>
              <Typography>{name}</Typography>
              {member && <Typography>{member} members</Typography>}
            </Box>
          </Stack>

          {button && <Button title={button} size="px-[14px] py-2 w-[102px]" bgColor="bg-[#FDC600]" />}
        </Stack>
      </Box>
    </Box>
  );
};

export default CardShowItem;
