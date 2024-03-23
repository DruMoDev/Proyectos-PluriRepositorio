import { createContext } from "react";

const TareasContext = createContext()

const TareasProvider = ({children}) => {




return <TareasContext.Provider value={{
    
}}>
    {children}
</TareasContext.Provider>
};


export {
    TareasProvider
}

export default TareasContext;