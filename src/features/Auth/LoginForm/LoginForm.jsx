/* eslint-disable react/no-unescaped-entities */
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import bgSignup from '../../../assets/image/background/BGImageSignup.png';
import Button from '../../../components/button/Button';
import InputField from '../../../components/form-control/InputField/InputField';
import PasswordField from '../../../components/form-control/PasswordField/PasswordField';
import Logo from '../Logo/Logo';
import Powered from '../../../assets/image/powered/Powered.svg';

const LoginForm = () => {
  const schema = yup
    .object({
      firstName: yup.string().required('Please enter your first name.').min(5, 'Title is too short.'),
      password: yup.string().required('Please enter your password.').min(5, 'Title is too short.'),
      lastName: yup.string().required('Please enter yout last name.').min(5, 'Title is too short.'),
      email: yup.string().required('Please enter your email.').email('Please enter a valid email address.'),
    })
    .required();

  const form = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const {
    formState: { errors },
  } = form;

  const onHandleSubmit = (data) => {
    console.log('onsubmit', data);
  };

  return (
    // <div className="bg-[wheat] max-w-[640px] mx-auto">
    <Box
      maxWidth={640}
      mx="auto"
      sx={{
        backgroundImage: `url(${bgSignup})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Logo />
      <form onSubmit={form.handleSubmit(onHandleSubmit)} className="px-4 mt-28">
        <InputField title="Email" name="email" placeholder="Your email" type="text" form={form} errors={errors} />
        <PasswordField title="Your Password" placeholder="Your Password" name="password" form={form} />
        <Link to="/Forgot">
          <Typography sx={{ fontSize: 12, fontWeight: 500, color: 'white', marginTop: 3, marginBottom: 6 }}>
            Forgot your password?
          </Typography>
        </Link>
        <div className="mt-[38px] pb-5 mb-5">
          <Button type="submit" title="Log in" size="w-full px-[18px] py-[10px]" borderColor="bg-[#FDC600]"></Button>
        </div>

        <Box sx={{ textAlign: 'center' }}>
          <Typography sx={{ fontSize: 12, fontWeight: 500, color: 'white', marginTop: 4, marginBottom: 3 }}>
            Don't have an account
          </Typography>
          <Link to="/register">
            <Typography sx={{ color: '#CCA000', fontWeight: 600, fontSize: 14, marginBottom: '51px' }}>
              Sign up now
            </Typography>
          </Link>
          <img src={Powered} className="mx-auto pb-8"></img>
        </Box>
      </form>
    </Box>

    // </div>
  );
};

export default LoginForm;
