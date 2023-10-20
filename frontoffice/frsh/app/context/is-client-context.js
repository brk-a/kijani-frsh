const { createContext, useState, useEffect, useContext } = require("react");

const IsClientContext = createContext(false)

export const IsClientContextProvider = ({children}) => {
    const [IsClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return(
        <IsClientContext.Provider value={IsClient}>
            {children}
        </IsClientContext.Provider>
    )
}

export const useIsClient = () => {
    return useContext(IsClientContext)
}