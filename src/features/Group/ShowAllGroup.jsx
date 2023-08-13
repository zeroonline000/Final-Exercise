import { Box, Grid, Typography } from '@mui/material';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import CardShowItem from '../../components/card/CardShowItem';
import FooterApp from '../../components/footer/FooterApp';
import { communityData } from '../../constant/communityData';

const ShowAllGroup = () => {
  return (
    <Box maxWidth="640px" mx="auto" minHeight={2000}>
      <Breadcrumb location="Group"></Breadcrumb>
      <Typography
        mt="18px"
        mb="24px"
        px={2}
        sx={{
          fontSize: 16,
          fontWeight: 600,
        }}
      >
        Join a community!
      </Typography>
      <Grid container rowGap="18px">
        {communityData.map((community) => (
          <Grid item key={community.key} xs={12}>
            <CardShowItem props={{ ...community, button: 'Follow' }} />
          </Grid>
        ))}
      </Grid>
      <FooterApp />
    </Box>
  );
};

export default ShowAllGroup;
