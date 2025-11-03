import FormRegister from "../components/Fragments/FormRegister";
import Navbar from "../components/Layouts/Navbar";

function Register() {
    return (
        <div className="flex flex-col h-screen">
            <div>
                <Navbar/>
            </div>
            
            <div className="flex justify-center items-center h-full">
                <FormRegister/>
            </div>
        </div>
    );
}

export default Register