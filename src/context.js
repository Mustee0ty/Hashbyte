import React,{ useState, useContext, useEffect } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [ open,setOpen ] = useState(false);
  const [posts, setPosts] =  useState([]);

  return (
    <AppContext.Provider
    value={{
      open,
      posts
    }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export {AppContext, AppProvider} 