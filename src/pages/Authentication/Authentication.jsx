import Button from '../../components/button/Button';
import LogoApp from '../../features/Auth/Logo/Logo';
import Powered from '../../assets/image/powered/Powered.svg';
import { Link } from 'react-router-dom';
import background from '../../assets/image/background/BGImageYellowTheme.png';
import { Box } from '@mui/material';

const Authentication = () => {
  return (
    // <div className="max-w-[640px] mx-auto bg-black px-4 h-[850px]">
    <Box
      maxWidth={640}
      minHeight="100%"
      mx="auto"
      px={4}
      sx={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="pt-[352px]">
        <LogoApp></LogoApp>
        <div className="mb-4">
          <Link to="/register">
            <Button
              title="Sign up"
              size="w-full px-5 py-3 text-[#FDC600]"
              bgColor="bg-white"
              borderColor="border-[#FDC600]"
            />
          </Link>
        </div>
        <div className="mb-[79px]">
          <Link to="/login">
            <Button title="Log in" size="w-full px-5 py-3" bgColor="bg-[#FDC600]" borderColor="border-black"></Button>
          </Link>
        </div>
        <div className="pb-[51px]">
          <img className="mx-auto" src={Powered} alt="" />
        </div>
      </div>
    </Box>
    // </div>
  );
};

export default Authentication;
