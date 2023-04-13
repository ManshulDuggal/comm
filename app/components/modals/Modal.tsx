"use client";
import React, { useState, useCallback, useEffect } from "react";
import { FC, useReducer } from "react";

import { AiOutlineClose } from "react-icons/ai";
import Button from "../buttons/Button";
//initializing a modal which will open when the user clicks on it

// useReducer practice
// const InitailState = {
//   isOpen:boolean,
//   onClose: () => void;
//   title?: string,

// }

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  actionLabel?: string;
  footer?: React.ReactElement;
  disabled?: boolean;
  SecondryAction?: () => void;
  SecondryLabel?: string;
}

const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  SecondryAction,
  SecondryLabel,
  actionLabel,
  body,
  disabled,
  footer,
  title,
}) => {
  const [ismodelopen, setIsModelOpen] = useState(isOpen);
  useEffect(() => {
    //passing down the prop to know when the model is open
    setIsModelOpen(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      //if the model is disabled we wont allow any other action to take place and will simply return
      return;
    } //else we will close the model
    setIsModelOpen(false);
    setTimeout(
      () => {
        onClose();
      },
      300
      //for animation
    );
  }, [onClose, disabled]);

  //submit function
  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [disabled, onSubmit]);

  //creacting secondry handling functions in case there os a secondry button
  const handleSecondryFcuntions = useCallback(() => {
    //if the model is disabled or there is no secondry option value passed down as a prop
    if (disabled || !SecondryAction) {
      return;
      //do nothin
    }
    //call the secondry action
    SecondryAction();

    onSubmit();
  }, [disabled, SecondryAction]);

  //if the model is not even opened in the first place the do nothing
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="justify-center flex bg-black/30 items-center overflow-x-hidden overflow-y-hidden
fixed inset-0 z-60 outline-none"
      >
        <div className=" w-full md:w-2/5 lg:w-4/6 xl:w-4/12 h-full md:h-auto relative ">
          <div
            className={`
            translate
            transition-all
            duration-300
            h-full
            
            ${ismodelopen ? "-translate-y-56" : "-translate-y-full"}
            ${ismodelopen ? "opacity-100" : "opacity-0"}
            rounded-lg relative justify-center items-center inset-0 p-4 bg-white  `}
          >
            <section className="flex justify-center p-2 items-center border-b ">
              <div className="font-bold ">
                {/* insert the title here */}
                {title}
              </div>
              {/* close button */}
              <button
                onClick={handleClose}
                className="rounded-full hover:opacity-70 font-extrabold  md:bg-secondrycolor p-1.5  absolute right-6 "
              >
                <AiOutlineClose  />
              </button>
            </section>
            <section className="bg-current/40 relative justify-center content-center flex-col  m-auto py-2 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
              labore veniam ea quae hic vel a. Fugiat neque aspernatur in
              tempora vel laudantium, quaerat vero nisi aperiam numquam cum
              labore!
              {/* insert body content here */}
              <div className="flex justify-center w-full m-auto space-x-10 my-4">
                <Button
                  outline
                  label={SecondryLabel}
                  disabled={disabled}
                  onClick={SecondryAction}
                />
                <Button
                  label={actionLabel}
                  disabled={disabled}
                  onClick={handleSubmit}
                />
              </div>
              {/* footer */}
              <div className="flex flex-row items-center gap-5 w-full">
                {footer}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
