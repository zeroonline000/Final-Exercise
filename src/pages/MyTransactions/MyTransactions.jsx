import { Box, Pagination, Stack, Typography } from '@mui/material';
import FooterWeb from '../../components/footer/FooterWeb';
import HeaderWeb from '../../components/header/HeaderWeb';
import Table from '../../components/table/Table';
import { transactionTable } from '../../constant/tableData';
import BarnerTrans from './component/BarnerTrans';

const MyTransactions = () => {
  return (
    <Box>
      <HeaderWeb />
      <BarnerTrans height={95} />

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth={1103}
        marginX="auto"
        marginY={5}
      >
        <Stack direction="row" columnGap="37px">
          <Typography>Fund</Typography>
          <Typography>Securities</Typography>
          <Typography>Crypto</Typography>
        </Stack>
        <select
          className="text-[#1F3684] border-[0.5px] border-[#1F3684] px-[22px] py-2 rounded-[30px] cursor-pointer "
          name="language"
        >
          <option value="english">English</option>
          <option value="vietnamese">Tiếng Việt</option>
          <option value="other">Other</option>
        </select>
      </Stack>

      <Box sx={{ maxWidth: 1103, marginX: 'auto', mb: 5 }}>
        <Table props={transactionTable} />
      </Box>

      <Stack spacing={2} marginX="auto" mb="105px" alignItems="center">
        <Pagination count={10} />
      </Stack>

      <FooterWeb />
    </Box>
  );
};

export default MyTransactions;
