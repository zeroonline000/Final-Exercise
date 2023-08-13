import { Avatar, Box, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import dashboardIcon from '../../assets/icon/Dashboard.svg';
import CommunityIcon from '../icons/CommunityIcon';
import EducationIcon from '../icons/EducationIcon';
import HomeIcon from '../icons/HomeIcon';

const FooterApp = () => {
  return (
    <Box height={56} bgcolor="black" sx={{ position: 'fixed', bottom: 0, width: { xs: 360, sm: 580, md: 640 } }}>
      <Stack direction="row" justifyContent="space-between" columnGap="auto" alignItems="center" height={56} px={2}>
        <Link to="/home">
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <HomeIcon />
            <Typography color="#999" fontSize={10} fontWeight={500} mt={1}>
              Home
            </Typography>
          </Box>
        </Link>

        <Link to="/dashboard">
          <Box>
            <Avatar
              src={dashboardIcon}
              sx={{
                width: 20,
                height: 20,
                objectFit: 'cover',
                objectPosition: 'center',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
            <Typography color="#999" fontSize={10} fontWeight={500} mt={1}>
              Dashboard
            </Typography>
          </Box>
        </Link>

        <Link to="/communities">
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CommunityIcon />
            <Typography color="#999" fontSize={10} fontWeight={500} mt={1}>
              Community
            </Typography>
          </Box>
        </Link>

        <Link to="/courses">
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <EducationIcon />
            <Typography color="#999" fontSize={10} fontWeight={500} mt={1}>
              Course
            </Typography>
          </Box>
        </Link>
      </Stack>
    </Box>
  );
};

export default FooterApp;
