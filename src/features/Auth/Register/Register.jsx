import RegisterForm from '../RegisterForm/RegisterForm';

const Register = () => {
  const handleFormSubmit = (data) => {
    console.log('Form submit', data);
  };
  return (
    <div>
      <RegisterForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default Register;
