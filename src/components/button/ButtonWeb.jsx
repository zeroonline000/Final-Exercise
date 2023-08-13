/* eslint-disable react/prop-types */
const ButtonWeb = (props) => {
  return (
    <div>
      <button className={`${props.size} text-[14px] leading-4 rounded-[30px] border-[0.5px] border-[#1F3684]`}>
        {props.title}
      </button>
    </div>
  );
};

export default ButtonWeb;
