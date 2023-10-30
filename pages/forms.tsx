import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
  username: string;
  password: string;
  email: string;
  errors?: string;
}

const style = {
  display: "flex",
  "flex-direction": "column",
};

export default function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    setError,
    reset,
    resetField,
  } = useForm<LoginForm>({
    mode: "onBlur",
  });
  const onValid = (data: LoginForm) => {
    console.log(data);
    // setError("errors", { message: "Backend is offline sorry." });
    // reset();
    resetField("password");
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };
  //   setValue("username", "hello");
  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register("username", {
          required: "Username is required",
          minLength: {
            message: "The username should be longer than 5 chars.",
            value: 5,
          },
        })}
        type="text"
        placeholder="Username"
      />
      {errors.username?.message}
      <input
        {...register("email", {
          required: "email is required",
          validate: {
            notGmail: (value) =>
              !value.includes("@gmail") ? true : "Gmail is not allowed",
          },
        })}
        type="email"
        placeholder="email"
      />
      {errors.email?.message}
      <input
        {...register("password", {
          required: true,
        })}
        type="password"
        placeholder="Password"
      />
      {errors.password?.message}
      <input type="submit" value="Create Account" />
      {errors.errors?.message}
    </form>
  );
}
