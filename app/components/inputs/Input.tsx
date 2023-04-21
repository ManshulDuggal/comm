import { FC } from "react";
import { BiYen } from "react-icons/bi";
// importing types from the pacakage to use as props since this project is type script integrated
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required: boolean;
  register: UseFormRegister<FieldValues>;
  errors?: FieldErrors;
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
      />
    </div>
  );
};

export default Input;
