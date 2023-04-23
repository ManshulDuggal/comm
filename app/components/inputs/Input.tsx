import { FC } from "react";
import { BiYen } from "react-icons/bi";
// importing types from the pacakage to use as props since this project is type script integrated
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

//props are being passed from register model component

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: FC<InputProps> = ({
  id,
  label,
  type,
  disabled,
  formatPrice,
  register,
  required,
  errors,
}) => {
  return (
    <div className="w-full relative">
      {/* if format price was passed only then render out this div */}
      {formatPrice && (
        <div className="">
          <BiYen size={24} className="" />
        </div>
      )}

      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        className={`peer w-full p-2 mt-6  font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed
        ${formatPrice ? "pl-9 " : "pl-4"}
        ${errors[id] ? "border-rose-700" : " border-neutral-300"}
        
        
        `}
      />
      <label
        className={` absolute text-md duration-100 transform translate-y-16 top-8 z-10 origin-[0]  
        peer-placeholder-shown:scale-125
        peer-placeholder-shown:translate-y-0
        peer-focus:scale-90
        peer-focus:-translate-y-8
        ${formatPrice ? "left-6 " : "left-1"}
        ${errors[id] ? "text-rose-500" : "text-zinc-500 "}
        `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
