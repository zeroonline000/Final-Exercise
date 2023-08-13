/* eslint-disable react/prop-types */

const Button = (props) => {
  // console.log(props);
  return (
    <div className="text-center">
      <button
        className={`${props.borderColor} ${props.size} ${props.bgColor}
        rounded-lg text-center font-semibold text-[12px]`}
      >
        {props.title}
      </button>
    </div>
  );
};

export default Button;
