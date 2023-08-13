/* eslint-disable react/prop-types */
import { Avatar, Box, Button, Stack, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import searchIcon from '../../assets/icon/Search-grey.svg';
import messengerIcon from '../../assets/icon/Messenger-grey.svg';
import { Link } from 'react-router-dom';

const Breadcrumb = (props) => {
  return (
    <Box height={56}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        p={2}
        height={56}
        borderBottom="1px solid #F2F2F2"
      >
        <Stack direction="row" alignItems="center">
          <Link to="/home">
            <Button>
              <ArrowBackIosIcon />
            </Button>
          </Link>

          <Typography
            ml={2}
            sx={{
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            {props.location}
          </Typography>
        </Stack>
        <Stack direction="row">
          <Avatar
            src={searchIcon}
            sx={{
              width: 24,
              height: 24,
              marginRight: 2,
            }}
          />
          <Avatar
            src={messengerIcon}
            sx={{
              width: 24,
              height: 24,
            }}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Breadcrumb;
