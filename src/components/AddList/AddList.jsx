import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    Title: yup.string().required(),
    Body: yup.string().required(),
  })
  .required();

const AddList = ({ onSave }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    onSave(data);
    reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <label>Title</label>
          <input {...register("Title")} />
          <P>{errors.Title?.message}</P>
        </FormControl>
        <FormControl>
          <label>Body</label>
          <input {...register("Body")} />
          <P>{errors.Body?.message}</P>
        </FormControl>
        <InputButton
          type="submit"
          className="btn btn-block"
          value="Save List"
        />
      </Form>
    </>
  );
};

const Form = styled.form`
  margin-bottom: 40px;
`;

const FormControl = styled.div`
  margin: 20px 0;
  input {
    width: 100%;
    height: 40px;
    margin: 5px;
    padding: 3px 7px;
    font-size: 17px;
  }
  input:focus {
    outline: 0;
  }
  label {
    display: block;
  }
`;

const InputButton = styled.input`
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;

  &:focus {
    outline: none;
    color: white;
  }
`;

const P = styled.p`
  color: red;
  font-size: 10px;
  font-weight: 900;
`;

export default AddList;
