"use client";
import { FC, useCallback, useState } from "react";
import axios, { AxiosError } from "axios";
//using zustand to manage state and this file to interact with the modal components
import { AiOutlineGithub, AiOutlineGoogle } from "react-icons/ai";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import Modal from "./Modal";
import useRegisterModel from "@/app/hooks/useRegisterModel";
import Heading from "../Heading";
import BodyContent from "../BodyContent";
interface RegisterModelProps {}

const RegisterModel = ({}) => {
  //adding the registeruserstore to  manupulate the state of the model

  const [isLoading, SetIsLoading] = useState<boolean>(false);

  const registerUserModel = useRegisterModel();

  const {
    //destructuring the field values from the library "React-hook-form"
    register,
    //to handle submit action
    handleSubmit,

    //handling errors using the library imported
    formState: { errors },
  } = useForm<FieldValues>({
    //assinging the default fields required by the form
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    SetIsLoading(true);
    //passing the data or default valules
    axios
      .post("api/register", data)
      .then(() => {
        registerUserModel.onClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //body content
  const bodyContent = (
    <div className="">
      <BodyContent />
    </div>
  );
  const headingContent = (
    <div className="">
      <Heading />
    </div>
  );

  return (
    <div>
      <Modal
        disabled={isLoading}
        isOpen={registerUserModel.isOpen}
        actionLabel="Continue"
        onClose={registerUserModel.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        title={headingContent}
      />
    </div>
  );
};

export default RegisterModel;
