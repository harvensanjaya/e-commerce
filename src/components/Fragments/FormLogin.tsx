import { useEffect, useRef, useState } from "react";
import { useNavbar } from "../../context/NavbarContext";
import { login } from "../../services/auth.service";
import Button from "../Elements/Button";
import { InputForm } from "../Elements/Input";

function FormLogin() {
  const { setIsLogin } = useNavbar();
  const [loginFailed, setLoginFailed] = useState("");
  const usernameRef = useRef<HTMLInputElement>(null);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const username = e.currentTarget.username.value;
    const password = e.currentTarget.password.value;

    await login(username, password, (success, token, res) => {
      if (success) {
        localStorage.setItem("token", token);
        window.location.href = "/";
      } else {
        const message = res?.data || "Login failed.";
        setLoginFailed(message);
        console.log("Login error:", message);
      }
    });
  };

  useEffect(() => {
    usernameRef.current?.focus();
  });

  return (
    <div className="flex flex-col p-10 sm:shadow-[0px_10px_15px_3px_rgba(0,0,0,0.1)] rounded-md w-125 transition-all transition-discrete">
      <h1 className="text-2xl mb-5 font-poppins font-semibold">
        Login to vintage
      </h1>
      <p className="text-sm mb-5 font-poppins">Enter your details below</p>
      <form className="w-full" onSubmit={handleLogin}>
        <InputForm
          label="Username"
          name="username"
          type="text"
          placeholder="Enter your username"
          ref={usernameRef}
        />
        <InputForm
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        {loginFailed && (
          <p className="text-red-600 font-poppins text-sm text-center">
            *{loginFailed}*
          </p>
        )}
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
