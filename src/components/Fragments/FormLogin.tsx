import Button from "../Elements/Button";
import { InputForm } from "../Elements/Input";
import { useNavbar } from "../../context/NavbarContext";
import { useEffect, useRef } from "react";

function FormLogin() {
  const { setIsLogin } = useNavbar();
  const emailRef = useRef<HTMLInputElement>(null);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('email', e.currentTarget.email.value);
    localStorage.setItem('password', e.currentTarget.password.value);
    localStorage.setItem('isLogin', 'true');
    window.location.href = "/";
    setIsLogin(true);
  };

  useEffect(() => {
    emailRef.current?.focus();
  })

  return (
    <div className="flex flex-col p-10 sm:shadow-[0px_10px_15px_3px_rgba(0,0,0,0.1)] rounded-md w-125 transition-all transition-discrete">
      <h1 className="text-2xl mb-5 font-poppins font-semibold">Login to vintage</h1>
      <p className="text-sm mb-5 font-poppins">Enter your details below</p>
      <form className="w-full" onSubmit={handleLogin}>
        <InputForm
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          ref={emailRef}
        />
        <InputForm
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        <Button
          className="bg-slate-500 text-white w-full mt-5"
          type="submit"
          onClick={() => handleLogin}
        >
          Continue
        </Button>
      </form>
    </div>
  );
}

export default FormLogin;
