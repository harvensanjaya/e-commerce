import { useEffect, useState } from "react";
import { useNavbar } from "../context/NavbarContext";

import FormRegister from "../components/Fragments/FormRegister";
import SuccessRegisModal from "../components/Fragments/SuccessRegisModal";
import Navbar from "../components/Layouts/Navbar";

function Register() {
  const { setIsShow } = useNavbar();
  const [showSuccessRegisModal, setShowSuccessRegisModal] = useState(false);

  useEffect(() => {
    setIsShow(false);
  });

  return (
    <div className="flex flex-col h-screen">
      <div>
        <Navbar />
      </div>

      <div className="flex justify-center items-center h-full mt-20">
        <FormRegister onConfirm={() => setShowSuccessRegisModal(true)} />
      </div>

      <SuccessRegisModal
        isOpen={showSuccessRegisModal}
        onConfirm={() => setShowSuccessRegisModal(false)}
      />
    </div>
  );
}

export default Register;
