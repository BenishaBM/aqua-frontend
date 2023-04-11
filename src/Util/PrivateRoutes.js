import { Navigate, Outlet } from "react-router-dom"
import { getToken } from "./Comon"


const PrivateRoutes=()=>{
    return getToken() ? <Outlet/> : <Navigate to="/login"/>
}
export default PrivateRoutes;