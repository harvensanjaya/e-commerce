import { useState } from "react";
import Button from "../Elements/Button";
import { InputForm } from "../Elements/Input";

interface FormRegisterProps {
  onConfirm: () => void;
}

function FormRegister({ onConfirm }: FormRegisterProps) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex flex-col p-10 sm:shadow-[0px_10px_15px_3px_rgba(0,0,0,0.1)] rounded-md w-125 transition-all transition-discrete">
      <h1 className="text-2xl mb-5">Sign Up</h1>
      <p className="text-sm mb-5">Enter your details below</p>
      <form className="w-full">
        <InputForm
          label="Full Name"
          name="fullname"
          type="text"
          placeholder="Enter your fullname"
        />
        <InputForm
          label="Username"
          name="username"
          type="text"
          placeholder="Enter your username"
        />
        <InputForm
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
        />
        <InputForm
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        <InputForm
          label="Confirmation Password"
          name="confirmpassword"
          type="password"
          placeholder="Enter your password"
        />
        <div className="flex items-start gap-2 text-sm text-gray-700 leading-snug mb-5">
          <input
            type="checkbox"
            id="agree"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            className="w-10 h-5 accent-slate-500 cursor-pointer"
          />
          <label htmlFor="terms" className="cursor-pointer">
            By clicking sign up, I hereby agree and consent to{" "}
            <a href="/" className="text-slate-400 hover:text-slate-700">
              {" "}
              Terms and Conditions
            </a>{" "}
            I confirm that i have read{" "}
            <a href="/" className="text-slate-400 hover:text-slate-700">
              {" "}
              Privacy policy
            </a>
          </label>
        </div>
        <Button
          className="bg-slate-500 text-white w-full mt-5"
          onClick={(e) => {
            e.preventDefault();
            onConfirm();
          }}
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
}

export default FormRegister;
