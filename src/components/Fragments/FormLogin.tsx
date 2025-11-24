import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { loginThunk } from "../../redux/auth/authThunks";
import Button from "../Elements/Button";
import { InputForm } from "../Elements/Input";

function FormLogin() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading, error, isAuthenticated } = useAppSelector(
    (state) => state.auth
  );
  const usernameRef = useRef<HTMLInputElement>(null);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const username = e.currentTarget.username.value;
    const password = e.currentTarget.password.value;

    dispatch(loginThunk({ username, password }));
  };

  useEffect(() => {
    usernameRef.current?.focus();
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

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
        {error && (
          <p className="text-red-600 text-sm text-center mt-2 font-poppins">
            *{error}*
          </p>
        )}
        <Button
          className="bg-slate-500 text-white w-full mt-5"
          type="submit"
          onClick={() => handleLogin}
        >
          {loading ? "Loading..." : "Continue"}
        </Button>
        <p className="text-sm text-center mt-5 font-poppins">
          Don't have an account?{" "}
          <Link to="/register" className="text-slate-500">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default FormLogin;
