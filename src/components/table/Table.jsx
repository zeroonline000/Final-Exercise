/* eslint-disable react/prop-types */
import sort from '../../assets/icon/Sort.svg';

const Table = ({ props }) => {
  // eslint-disable-next-line no-unused-vars

  return (
    <table className="w-full text-left h-[282px] border-collapse">
      <thead className="border-b border-black h-[47px] text-[#1F3684]">
        <tr className="">
          <th className="font-normal w-[9%]">Order Date</th>
          <th className="font-normal w-[8%]">
            <img src={sort} alt=""></img>
          </th>
          {props[0].type && <th className="font-normal">Type</th>}
          <th className="font-normal w-[12%]">Action</th>
          <th className="font-normal w-[12%]">Amount</th>
          <th className="font-normal">Currency</th>
          <th className="font-normal">Remarks</th>
          <th className="font-normal">Order Status</th>
        </tr>
      </thead>

      <tbody className="[&>*:nth-child(even)]:bg-[#F5F5F5] font-light">
        {props.map((prop) => (
          <tr key={prop.id}>
            <td>{prop.date}</td>
            <td></td>
            {}
            {prop.type && <td>{prop.type}</td>}
            <td>{prop.action}</td>
            <td>{prop.amount}</td>
            <td>{prop.currency}</td>
            <td>{prop.remarks}</td>
            <td>{prop.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
