import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./Login.css";

type LoginFormInputs = {
  email: string;
  password: string;
};

const loginSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(loginSchema),
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data: LoginFormInputs) => {
    console.log("Logging in with", data);
    // api call to login;
  };

  return (
    <div className="maindiv">
      <div className="container">
        <h2 className="heading">Bank Login</h2>
        <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="emaildiv">
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email")}
              className="email-input"
              placeholder="you@bank.com"
            />
            {errors.email && (
              <p className="errormesasge">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="passworddiv">
            <label className="label">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              className="password-input "
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="show-password-button"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
            {errors.password && (
              <p className="password-error-message">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="login-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
