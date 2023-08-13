import { Box, Stack } from '@mui/material';
import CardEvent from '../../components/card/CardEvent';
import { eventData } from '../../constant/eventData';

const EventList = () => {
  return (
    <div>
      <Stack sx={{ marginLeft: 'auto', marginRight: 'auto', overflow: 'scroll' }}>
        <Box>
          <CardEvent props={{ ...eventData[0], button: 'Register' }} />
        </Box>
      </Stack>
    </div>
  );
};

export default EventList;
