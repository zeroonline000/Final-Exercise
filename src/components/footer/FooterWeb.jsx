import LogoFooter from '../logo/LogoWeb/LogoFooter';

const FooterWeb = () => {
  return (
    <div className="h-[157px] bg-[#22377F]">
      <div className="flex justify-between items-center h-full max-w-[1102px] mx-auto">
        <div>
          <select
            className="text-white px-[15px] py-[14px] min-w-[168px] bg-[#737da0] cursor-pointer outline-none"
            name="language"
          >
            <option value="english">English</option>
            <option value="vietnamese">Tiếng Việt</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="flex flex-col">
          <LogoFooter />
          <div className="text-white text-sm font-light overflow-hidden">Copyright 2021, Valents Bank Ltd</div>
        </div>
      </div>
    </div>
  );
};

export default FooterWeb;
