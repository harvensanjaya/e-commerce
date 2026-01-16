import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { registerThunk } from "../../redux/auth/authThunks";
import Button from "../Elements/Button";
import { InputForm } from "../Elements/Input";
import SuccessRegisModal from "./SuccessRegisModal";

interface RegisterForm {
  fullName: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

function FormRegister() {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);

  const [checked, setChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState<RegisterForm>({
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // VALIDASI
    if (!form.fullName || !form.email || !form.username || !form.password) {
      alert("Semua field wajib diisi!");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Password dan konfirmasi tidak cocok!");
      return;
    }

    if (!checked) {
      alert("Harus menyetujui Terms & Privacy terlebih dahulu!");
      return;
    }

    dispatch(
      registerThunk({
        fullName: form.fullName,
        email: form.email,
        username: form.username,
        password: form.password,
        confirmPassword: form.confirmPassword,
      })
    )
      .unwrap()
      .then(() => setShowModal(true))
      .catch(() => {});
  };

  return (
    <>
      <div className="flex flex-col p-10 sm:shadow-[0px_10px_15px_3px_rgba(0,0,0,0.1)] rounded-md w-125 transition-all transition-discrete font-poppins">
        <h1 className="text-2xl mb-5 font-semibold">Sign Up</h1>
        <p className="text-sm mb-5">Enter your details below</p>
        <form className="w-full" onSubmit={handleSubmit}>
          <InputForm
            label="Full Name"
            name="fullName"
            type="text"
            placeholder="Enter your fullname"
            value={form.fullName}
            onChange={handleChange}
            required
          />
          <InputForm
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <InputForm
            label="Username"
            name="username"
            type="text"
            placeholder="Enter your username"
            value={form.username}
            onChange={handleChange}
            required
          />
          <InputForm
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <InputForm
            label="Confirmation Password"
            name="confirmPassword"
            type="password"
            placeholder="Enter your password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />
          <div className="flex items-start gap-2 text-sm text-gray-700 leading-snug mb-5">
            <input
              type="checkbox"
              id="agree"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className="w-10 h-5 accent-slate-500 cursor-pointer"
            />
            <label htmlFor="agree" className="cursor-pointer">
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
          {error && <p className="text-red-600 text-center mt-2">*{error}*</p>}

          <Button
            className={`bg-slate-500 text-white w-full mt-5 ${
              !checked ? "opacity-50 cursor-not-allowed" : ""
            }`}
            type="submit"
            disabled={loading || !checked}
          >
            {loading ? "Loading..." : "Sign Up"}
          </Button>
          <p className="text-sm text-center mt-5 font-poppins">
            Already have an account?{" "}
            <Link to="/login" className="text-slate-500">
              Login
            </Link>
          </p>
        </form>
      </div>

      <SuccessRegisModal isOpen={showModal} />
    </>
  );
}

export default FormRegister;
