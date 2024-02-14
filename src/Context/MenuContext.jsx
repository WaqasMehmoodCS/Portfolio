'use client'
import React, { createContext, useState } from "react";

const MenuContext = createContext();

const MenuProvider = ({ children }) => {
    const [open, setOpen] = useState(false);

    return (
        <MenuContext.Provider value={{ open, setOpen }}>
            {children}
        </MenuContext.Provider>
    );
};

export { MenuProvider, MenuContext };
