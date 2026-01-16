import { IoTrash } from "react-icons/io5";
import { useAppSelector } from "../../hooks/reduxHooks";
import Button from "../Elements/Button";
import { InputForm } from "../Elements/Input";

function ProfileSetting() {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className="bg-white col-span-9 rounded-lg">
      <div className="flex flex-col w-full mb-5 transition-all bg-white p-6 rounded-md gap-2">
        <h1 className="sm:text-lg text-base font-semibold transition-all transition-discrete text-gray-500">
          Edit Profile
        </h1>
        <div className="lg:grid lg:grid-cols-10 flex flex-col w-full py-2 transition-all transition-discrete">
          <div className="flex items-center 2xl:col-span-5 xl:col-span-4 lg:col-span-3 transition-all transition-discrete">
            <h1 className="sm:text-lg text-base font-semibold">Photo</h1>
          </div>
          <div className="flex sm:flex-row flex-col justify-between sm:items-center items-start 2xl:col-span-5 xl:col-span-6 col-span-7 gap-5 transition-all transition-discrete mt-2">
            <img
              src={
                user?.profilePicture ||
                "https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
              }
              alt=""
              className="h-15 aspect-square rounded-full object-cover"
            />
            <Button className="bg-gray-200 text-black">Choose</Button>
            <p className="text-gray-500 sm:text-base text-sm">
              JPG, JPEG or PNG, 1 MB max.
            </p>
            <IoTrash className="sm:text-3xl text-2xl text-gray-500 cursor-pointer shrink-0" />
          </div>
        </div>
        <InputForm
          label="Fullname"
          type="text"
          value={user?.fullName}
          name="fullname"
          className="w-auto sm:text-lg text-sm rounded-lg border-gray-300 focus:border-black transition-all transition-discrete "
          labelClassName="sm:text-lg text-base transition-all transition-discrete"
        />
        <InputForm
          label="Username"
          type="text"
          value={user?.username}
          name="username"
          className="w-auto sm:text-lg text-sm rounded-lg border-gray-300 focus:border-black transition-all transition-discrete"
          labelClassName="sm:text-lg text-base transition-all transition-discrete"
        />
        <InputForm
          label="Email"
          type="text"
          value={user?.email}
          name="email"
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

export default ProfileSetting;
