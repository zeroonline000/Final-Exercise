import { Box, Container, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import FooterApp from '../../components/footer/FooterApp';
import HeaderApp from '../../components/header/HeaderApp';
import CourseList from '../../features/Course/CourseList';
import GroupList from '../../features/Group/CommunityList';
import MemberList from '../../features/Member/MemberList';
import EventList from '../../features/Event/EventList';

const Home = () => {
  return (
    <Container sx={{ maxWidth: { xs: 360, sm: 580, md: 640 } }}>
      <Box width="640px" minHeight={1494} mx="auto" bgcolor="white" position="relative">
        <HeaderApp />

        <Box mx="auto" sx={{ borderRadius: 24, maxWidth: { xs: 328, sm: 548, md: 608 } }}>
          <Stack direction="row" justifyContent="space-between">
            <Box mt={3}>
              <Typography lineHeight="28px">Your tools</Typography>
              <Typography marginBottom="29px">You haven not setup any tools yet!</Typography>
            </Box>
            <Button title="Setup" size="px-[14px] py-2 w-[102px] mt-10" bgColor="bg-[#FDC600]" />
          </Stack>
          <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
            <Typography sx={{ fontSize: 18, fontWeight: 600 }}>Get to know other mebers!</Typography>
            <Link to="/members">
              <Typography
                sx={{
                  color: 'black',
                  fontSize: 14,
                  fontWeight: 400,
                }}
              >
                View all
              </Typography>
            </Link>
          </Stack>
          <MemberList />

          <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
            <Typography sx={{ fontSize: 18, fontWeight: 600 }}>Join a community!</Typography>
            <Link to="/group">
              <Typography
                sx={{
                  color: 'black',
                  fontSize: 14,
                  fontWeight: 400,
                }}
              >
                View all
              </Typography>
            </Link>
          </Stack>
          <GroupList />

          <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
            <Typography sx={{ fontSize: 18, fontWeight: 600 }}>Courses for you</Typography>
            <Link to="/courses">
              <Typography
                sx={{
                  color: 'black',
                  fontSize: 14,
                  fontWeight: 400,
                }}
              >
                View all
              </Typography>
            </Link>
          </Stack>
          <CourseList />

          <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
            <Typography sx={{ fontSize: 18, fontWeight: 600 }}>Events</Typography>
            <Link to="/events">
              <Typography
                sx={{
                  color: 'black',
                  fontSize: 14,
                  fontWeight: 400,
                }}
              >
                View all
              </Typography>
            </Link>
          </Stack>
          <EventList />
        </Box>
        <FooterApp />
      </Box>
    </Container>
  );
};

export default Home;
