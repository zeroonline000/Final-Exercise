import { Box } from '@mui/material';
import BarnerWeb from '../../components/barner/BarnerWeb';
import Content from '../../components/content/Content';
import FooterWeb from '../../components/footer/FooterWeb';
import HeaderWeb from '../../components/header/HeaderWeb';

const Dashboard = () => {
  return (
    <Box>
      <HeaderWeb />
      <BarnerWeb />
      <Content />
      <FooterWeb />
    </Box>
  );
};

export default Dashboard;
