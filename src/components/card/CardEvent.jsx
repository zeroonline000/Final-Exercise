/* eslint-disable react/prop-types */
import { Box, Card, CardMedia, Stack, Typography } from '@mui/material';
import VendorLogo from '../logo/VendorLogo';
import LocationIcon from '../icons/LocationIcon';
import Button from '../button/Button';

const CardEvent = ({ props }) => {
  const { vendorAvatar, vendorName, thumbnail, eventName, date, location, button } = props;
  return (
    <Box>
      <Card sx={{ boxShadow: 1, width: '100%', height: 164, padding: 1 }}>
        <Stack direction="row" alignItems="center">
          <CardMedia component="img" image={thumbnail} sx={{ width: 100, height: 100 }} />
          <Box ml={2}>
            {vendorAvatar && (
              <VendorLogo avatar={vendorAvatar} vendorName={vendorName} marginLeft="12px" fontSize="14px" />
            )}
            <Typography fontSize={16} fontWeight={600} lineHeight="20px">
              {eventName}
            </Typography>
            <Typography fontSize={12} color="#808080">
              {date}
            </Typography>
            {location && (
              <Stack direction="row" alignItems="center">
                <LocationIcon />
                <Typography ml={1} color="#808080">
                  {location}
                </Typography>
              </Stack>
            )}
          </Box>
        </Stack>
        {button && (
          <Box>
            <Button title="Register" size="px-[14px] py-2 w-[102px] mt-[11px] float-right" bgColor="bg-[#FDC600]" />
            <div className="clear-both"></div>
          </Box>
        )}
      </Card>
    </Box>
  );
};

export default CardEvent;
