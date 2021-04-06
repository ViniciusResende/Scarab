import { createContext, useState } from "react";
export const MenuContext = createContext({});

export function MenuProvider({ children }){
  const pathname = window.location.pathname;
  const path = pathname === '/' ? 'home' : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (name) => setActiveItem(name);

  return (
    <MenuContext.Provider 
    value={{ 
      activeItem,
      handleItemClick,
      }}>
      {children}
    </MenuContext.Provider>
  )
}