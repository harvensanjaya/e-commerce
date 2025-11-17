import Button from "../Elements/Button";
import { InputForm } from "../Elements/Input";

function FormLogin() {
  const login = () => {
    window.location.href = "/";
    setIsLogin(true);
  };

  return (
    <div className="flex flex-col p-10 sm:shadow-[0px_10px_15px_3px_rgba(0,0,0,0.1)] rounded-md w-125 transition-all transition-discrete">
      <h1 className="text-2xl mb-5">Login to vintage</h1>
      <p className="text-sm mb-5 font-inter">Enter your details below</p>
      <form className="w-full">
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
        <Button
          className="bg-slate-500 text-white w-full mt-5"
          onClick={() => login()}
        >
          Continue
        </Button>
      </form>
    </div>
  );
}

export default FormLogin;
