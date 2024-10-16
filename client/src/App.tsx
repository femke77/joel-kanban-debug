import { Outlet } from 'react-router-dom';
import React,{ useState } from 'react';
import Navbar from './components/Navbar';
import Auth from './utils/auth';
import { useOutletContext } from 'react-router-dom';
type AuthContextType = [boolean, React.Dispatch<React.SetStateAction<boolean>>];
function App() {
  const [loggedIn, setLoggedIn] = useState<boolean>(Auth.loggedIn());
  return (
    <div className='container'>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <main>
        <Outlet context={[loggedIn, setLoggedIn] satisfies AuthContextType} />
      </main>
    </div>
  );
}
export function useLoggedIn() {
  return useOutletContext<AuthContextType>();
}
export default App;