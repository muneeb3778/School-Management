import React, { useEffect, useState } from "react"


const AppContext= React.createContext()



const AppProvider=(props)=>{



return (
<AppContext.Provider value={{
    
}}>{props.children}</AppContext.Provider>
)    


}




export {AppProvider,AppContext}
