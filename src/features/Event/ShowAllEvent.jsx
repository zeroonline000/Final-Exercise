import { Box, Grid, Typography } from '@mui/material';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import CardShowItem from '../../components/card/CardShowItem';
import FooterApp from '../../components/footer/FooterApp';
import { eventData } from '../../constant/eventData';

const ShowAllEvent = () => {
  return (
    <Box maxWidth="640px" mx="auto" minHeight={1000}>
      <Breadcrumb location="Events"></Breadcrumb>
      <Typography
        mt="18px"
        mb="24px"
        px={2}
        sx={{
          fontSize: 16,
          fontWeight: 600,
        }}
      >
        Participate in our awesome events!
      </Typography>
      <Grid container rowGap="18px">
        {eventData.map((event) => (
          <Grid item key={event.id} xs={12} mb={3}>
            <CardShowItem props={{ ...event, button: 'Register' }} />
          </Grid>
        ))}
      </Grid>
      <FooterApp />
    </Box>
  );
};

export default ShowAllEvent;
