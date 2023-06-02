import { useContext } from "react";
import NavigationContext from "../context/navigation";

function useNavigationContext() {
    return useContext(NavigationContext)
}

export default useNavigationContext