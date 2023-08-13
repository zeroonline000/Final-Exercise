/* eslint-disable react/prop-types */
import { Box, Stack, Typography } from '@mui/material';
import ButtonWeb from '../button/ButtonWeb';

const BarnerWeb = ({ height }) => {
  return (
    <Box>
      <Box sx={{ backgroundColor: '#F9F3ED', height: height }}>
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
            <ButtonWeb title="Send Funds" size="" />
            <ButtonWeb title="Crypto" size="" />
            <ButtonWeb title="Security" size="" />
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default BarnerWeb;
