/* eslint-disable react/prop-types */
import { Avatar, Box, Card, CardMedia, Stack, Typography } from '@mui/material';
import Button from '../button/Button';
import ClockIcon from '../../assets/icon/ClockIcon';
import VendorLogo from '../logo/VendorLogo';

const CardItem = ({ props }) => {
  const {
    thumbnail,
    avatar,
    name,
    company,
    major,
    duration,
    courseName,
    vendorName,
    vendorAvatar,
    width,
    height,
    button,
  } = props;
  return (
    <div>
      <Box>
        <Card sx={{ width: { width }, height: { height }, padding: '8px', borderRadius: '16px', boxShadow: 2 }}>
          <CardMedia component="img" image={thumbnail} />
          {avatar && (
            <Avatar
              src={avatar}
              sx={{
                marginLeft: 'auto',
                marginRight: 'auto',
                width: 68,
                height: 68,
                marginTop: '-35px',
                borderColor: 'white',
                borderWidth: 3,
                boxShadow: 1,
                marginBottom: '10px',
              }}
            />
          )}

          {vendorName && <VendorLogo avatar={vendorAvatar} vendorName={vendorName} marginLeft="4px" fontSize="10px" />}

          {courseName && (
            <Typography mb="4px" sx={{ fontSize: 14, fontWeight: 600 }}>
              {courseName}
            </Typography>
          )}

          <Typography textAlign="center" mb="4px" sx={{ fontSize: 14, fontWeight: 600 }}>
            {name}
          </Typography>
          {duration && (
            <Stack direction="row" alignItems="center" marginBottom={2} spacing={1}>
              <ClockIcon />
              <Typography color="#808080" fontSize={12}>
                {duration}
              </Typography>
            </Stack>
          )}
          <Typography textAlign="center" mb="4px" sx={{ fontSize: 11, fontWeight: 500, color: '#808080' }}>
            {company}
          </Typography>
          <Typography textAlign="center" mb="8px" sx={{ fontSize: 10, color: '#808080' }}>
            {major}
          </Typography>

          {button && <Button title={button} size="px-[14px] py-2 w-[102px]" bgColor="bg-[#FDC600]"></Button>}
        </Card>
      </Box>
    </div>
  );
};

export default CardItem;
