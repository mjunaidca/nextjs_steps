"use client";

import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log("ERRORS", errors);

  const formHandler = async (data: any) => {
    console.log(data);
    // console.dir(register);
    await fetch("/api/formSubmit", {
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  return (
    <div className="mx-10 my-10">
      <form className="flex space-x-6" onSubmit={handleSubmit(formHandler)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            {...register("email", { required: true })}
            type="email"
            className="border"
            placeholder="Enter your email"
          />
          {errors.email && errors.email.type === "required" && (
            <p className="errorMsg">Email is required.</p>
          )}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="border"
            placeholder="Enter your password"
            {...register("password", {
              required: true,
              minLength: 6,
            })}
          />
          {errors.password && errors.password.type === "required" && (
            <p className="errorMsg">Password is required.</p>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <p className="errorMsg">
              Password should be at-least 6 characters.
            </p>
          )}
        </div>
        <div>
          <button className="border p-3" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
