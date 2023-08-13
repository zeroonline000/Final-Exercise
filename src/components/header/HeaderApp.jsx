import { Avatar, Box, Stack, Typography } from '@mui/material';
import MenuToggle from '../../features/Menu/MenuToggle';
import avatarHeader from './lisa.svg';
import searchIcon from '../../assets/icon/Search.svg';
import messengerIcon from '../../assets/icon/Messenger.svg';
import groupIcon from '../../assets/icon/Group.svg';
import Button from '../button/Button';

const HeaderApp = () => {
  return (
    <Box height="158px" bgcolor="#000" marginX="auto" px={2} sx={{ maxWidth: { xs: 360, sm: 580, md: 640 } }}>
      <Stack direction="row" justifyContent="space-between">
        <Stack pt="29px" ml="-18px" direction="row" alignContent="center">
          <MenuToggle></MenuToggle>
          <Avatar
            src={avatarHeader}
            sx={{
              width: 56,
              height: 56,
              marginRight: 2,
            }}
          />
          <Box color="#fff">
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 400,
                lineHeight: '24px',
              }}
            >
              Hello,
            </Typography>
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 600,
                lineHeight: '30px',
              }}
            >
              Lisa
            </Typography>
          </Box>
        </Stack>

        <Stack direction="row" mt="27px">
          <Avatar
            src={searchIcon}
            sx={{
              width: 24,
              height: 24,
            }}
          />
          <Avatar
            src={messengerIcon}
            sx={{
              width: 24,
              height: 24,
              marginLeft: 2,
            }}
          />
        </Stack>
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        px={2}
        height={52}
        mt={1}
        bgcolor="rgba(255, 255, 255, 0.50)"
        borderRadius={2}
      >
        <Stack direction="row" alignItems="center">
          <Avatar src={groupIcon} />
          <Typography marginLeft="10px" color="#fff">
            Basic Level
          </Typography>
        </Stack>
        <Button
          title="Update"
          size="px-[14px] py-[6px] text-[#CCA000]"
          bgColor="bg-[#FFF]"
          borderColor="border-[#FDC600]"
        />
      </Stack>
    </Box>
  );
};

export default HeaderApp;
