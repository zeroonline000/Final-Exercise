/* eslint-disable react/prop-types */
import { Box, Stack, Typography } from '@mui/material';
import ButtonWeb from '../../../components/button/ButtonWeb';

const BarnerTrans = ({ height }) => {
  return (
    <Box>
      <Box sx={{ backgroundColor: '#F9F3ED', height: height, mt: '10px' }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          height={height}
          sx={{ maxWidth: 1103, marginX: 'auto' }}
        >
          <Typography fontSize={25} color="#1F3684">
            My Transactions
          </Typography>
          <Stack direction="row" columnGap="12px">
            <ButtonWeb title="Send Funds" size="px-[30px] py-[17px]" />
            <ButtonWeb title="Crypto" size="px-[30px] py-[17px]" />
            <ButtonWeb title="Security" size="px-[30px] py-[17px]" />
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default BarnerTrans;
