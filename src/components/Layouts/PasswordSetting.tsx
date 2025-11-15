import Button from "../Elements/Button";
import { InputForm } from "../Elements/Input";

function PasswordSetting() {
  return (
    <div className="bg-white col-span-9 rounded-lg">
      <div className="flex flex-col w-full mb-5 transition-all bg-white p-6 rounded-md">
        <h1 className="sm:text-lg text-base font-semibold transition-all transition-discrete text-gray-500 mb-5">
          Change Password
        </h1>
        <InputForm
          label="Old Password"
          type="password"
          placeholder="Old Password"
          value=""
          name="oldpassword"
          className="w-auto sm:text-lg text-sm rounded-lg border-gray-300 focus:border-black transition-all transition-discrete "
          labelClassName="sm:text-lg text-base transition-all transition-discrete"
        />
        <InputForm
          label="New Password"
          type="password"
          placeholder="New Password"
          value=""
          name="newpassword"
          className="w-auto sm:text-lg text-sm rounded-lg border-gray-300 focus:border-black transition-all transition-discrete"
          labelClassName="sm:text-lg text-base transition-all transition-discrete"
        />
        <InputForm
          label="Confirmation Password"
          type="password"
          value=""
          placeholder="Confirmation Password"
          name="confirmpassword"
          className="w-auto sm:text-lg text-sm rounded-lg border-gray-300 focus:border-black"
          labelClassName="sm:text-lg text-base transition-all transition-discrete"
        />
        <div className="flex">
          <div className="flex-1 "></div>
          <Button className="bg-slate-500 text-white w-auto">
            Update Profile
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PasswordSetting;
