import { Box, Stack, Typography } from '@mui/material';
import { communityData } from '../../constant/communityData';

const GroupList = () => {
  return (
    <Stack direction="row" spacing="24px" sx={{ marginX: 'auto', overflow: 'scroll' }}>
      {communityData.map((group) => (
        <Box key={group.id} sx={{ width: 100 }}>
          <img src={group.thumbnail} className="w-[100px] h-[100px] object-cover rounded-2xl" />
          <Typography width={100} textAlign="center" mt={1} fontWeight={600}>
            {group.name}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
};

export default GroupList;
