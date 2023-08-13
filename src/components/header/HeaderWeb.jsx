import ButtonWeb from '../button/ButtonWeb';
import LogoHeader from '../logo/LogoWeb/LogoHeader';

const HeaderApp = () => {
  return (
    <div className="h-24">
      <div className="flex justify-between max-w-[1102px] mx-auto items-center h-full">
        <div>
          <LogoHeader />
        </div>
        <ul className="flex items-center gap-x-[50px]">
          <li className="text-sm text-[#1F3684] font-normal">
            <a href="#">Dashboard</a>
          </li>
          <li className="text-sm text-[#1F3684] font-normal">
            <a href="#">Products</a>
          </li>
          <li className="text-sm text-[#1F3684] font-normal">
            <a href="#">My Transactions</a>
          </li>
          <li className="text-sm text-[#1F3684] font-normal">
            <a href="#">Profile</a>
          </li>
          <ButtonWeb title="Logout" size="px-[34px] py-[10px]" />
        </ul>
      </div>
    </div>
  );
};

export default HeaderApp;
