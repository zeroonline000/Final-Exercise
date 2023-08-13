import { Box, Grid, Typography } from '@mui/material';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import { memberData } from '../../constant/memberData';
import CardItem from '../../components/card/CardItem';
import FooterApp from '../../components/footer/FooterApp';

const ShowAllMember = () => {
  return (
    <Box maxWidth="680px" mx="auto" minHeight={2000}>
      <Breadcrumb location="Members"></Breadcrumb>
      <Typography
        mt="18px"
        mb="24px"
        px={2}
        sx={{
          fontSize: 16,
          fontWeight: 600,
        }}
      >
        Get to know other members!
      </Typography>
      <Grid container columnGap="12px" rowGap="18px" justifyContent="center">
        {memberData.map((member) => (
          <Grid item key={member.id}>
            <CardItem props={{ ...member, height: 286, width: 158, button: 'Follow' }} />
          </Grid>
        ))}
      </Grid>
      <FooterApp />
    </Box>
  );
};

export default ShowAllMember;
