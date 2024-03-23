import { createContext, useContext, useState } from 'react';

export const MsgContext = createContext(null);

const MsgProvider = ({children}) => {

    const [msgText,setMsgText]=useState('')
    
    return (
        <MsgContext.Provider value={{
            msgText,
            setMsgText,
         }}>
            {children}
        </MsgContext.Provider>
    )
}

export const userMsg=()=>useContext(MsgContext)

export default MsgProvider;