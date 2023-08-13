/* eslint-disable react/prop-types */

import { Controller } from 'react-hook-form';

const InputField = (props) => {
  const { name, title, type, placeholder, form, errors } = props;
  return (
    <div className='mb-6'>
      <label className='text-[14px] text-white font-medium leading-[20px] mb-[6px] inline-block' htmlFor={name}>{title}</label>
      <Controller
        name={name}
        control={form.control}
        render={({ field }) => (
          <input
            className="w-full border border-[#ccc] px-[14px] py-[10px] rounded-lg"
            name={name}
            type={type}
            placeholder={placeholder}
            {...field}
          />
        )}
      />
      {errors[name] && <span style={{ color: '#F5A3A3' }}>{errors[name].message}</span>}
      
    </div>
  );
};

export default InputField;
