import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    
    
    if(loading){
        return (
        <div className="flex justify-center items-center">
            <span className="loading loading-spinner loading-lg text-[#fea116]"></span>
        </div>
        )
    }
    
    
    
        if(user){
            return <div>
                {children}
            </div>;
        }
        return <Navigate to='/login' state={location?.pathname}></Navigate>
    };

export default PrivateRoute;