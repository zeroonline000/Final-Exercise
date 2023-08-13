/* eslint-disable react/no-unescaped-entities */
import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import bgSignup from '../../../assets/image/background/BGImageSignup.png';
import Button from '../../../components/button/Button';
import InputField from '../../../components/form-control/InputField/InputField';
import PasswordField from '../../../components/form-control/PasswordField/PasswordField';
import Logo from '../Logo/Logo';
import Policy from '../Policy/Policy';

const RegisterForm = () => {
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
        <InputField
          title="First name"
          name="firstName"
          placeholder="Your first name"
          type="text"
          form={form}
          errors={errors}
        />
        <InputField
          title="Last name"
          name="lastName"
          placeholder="Your last name"
          type="text"
          form={form}
          errors={errors}
        />
        <InputField title="Email" name="email" placeholder="Your email" type="text" form={form} errors={errors} />

        <PasswordField title="Password" name="password" placeholder="Your password" form={form} />

        <Policy />

        <div className="mt-[38px] pb-5 mb-5">
          <Button type="submit" title="Register" size="w-full px-[18px] py-[10px]" borderColor="bg-[#FDC600]"></Button>
        </div>

        <div className="text-center pb-[50px] ">
          <p className="text-white text-[12px] font-medium leading-[18px]">
            Got an account? <span className="text-[#CCA000]">Log in here</span>
          </p>
        </div>
      </form>
    </Box>

    // </div>
  );
};

export default RegisterForm;
