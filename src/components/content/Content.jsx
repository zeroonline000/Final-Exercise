import ButtonWeb from '../button/ButtonWeb';
import Table from '../table/Table';
import { dashboardTable } from '../../constant/tableData';

const Content = () => {
  return (
    <div className=''>
      <div className="flex justify-between items-center mb-[25px] max-w-[1102px] mx-auto">
        <div className="mt-[84px] text-[25px] text-[#1F3684] font-light">My Wallets</div>
        <div className="flex gap-x-4 mt-[62px]">
          <ButtonWeb title="Send Funds" />
          <ButtonWeb title="Crypto" />
          <ButtonWeb title="Security" />
          <ButtonWeb title="View Transactions" />
        </div>
      </div>

      <div className="grid grid-cols-2 max-w-[1102px] mx-auto mb-[43px]">
        <div className="bg-[#F5F5F5] text-center">
          <div className="mt-[37px] mb-7">
            <p className="text-[#2D2E33] leading-normal mb-[10px]">Funds Wallet</p>
            <p className="text-[#1F3684] text-[25px] font-medium mb-[30px]">1,000,000.00 EUR</p>
            <ButtonWeb title="View Detail" />
          </div>
        </div>

        <div className="text-center">
          <div className="text-center">
            <div className="mt-[37px] mb-7">
              <p className="text-[#2D2E33] leading-normal mb-[10px]">Crypto Wallet</p>
              <p className="text-[#1F3684] text-[25px] font-medium mb-[30px]">1,000,000.00 ETH</p>
              <ButtonWeb title="View Detail" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1102px] mx-auto mb-28">
        <Table props={dashboardTable} />
      </div>
    </div>
  );
};

export default Content;
