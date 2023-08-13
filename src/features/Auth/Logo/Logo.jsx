import logoApp from './assets/trybe.svg';
const LogoApp = () => {
  return (
    <div className="text-center w-[106px] h-[101px] mx-auto mb-[85px] pt-[38px]">
      <div className="mb-1">
        <img className="mx-auto" src={logoApp} alt="" />
      </div>
      <div className="title text-white font-black text-[30px] tracking-widest leading-none">Trybe</div>
      <div className="text-white text-[18px] font-medium leading-7 text-right">Beta</div>
    </div>
  );
};

export default LogoApp;
