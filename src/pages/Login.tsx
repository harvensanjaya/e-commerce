import FormLogin from "../components/Fragments/FormLogin";
import Navbar from "../components/Layouts/Navbar";

function Login() {
    return (
        <div className="flex flex-col h-screen">
            <div>
                <Navbar/>
            </div>
            
            <div className="flex justify-center items-center h-full">
                
                <FormLogin/>
            </div>
        </div>
    );
}

export default Login