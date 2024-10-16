import { Link, useNavigate } from 'react-router-dom';
import auth from '../utils/auth';
type navbarProps = {
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};
const Navbar = ({loggedIn, setLoggedIn}: navbarProps) => {
  const navigate = useNavigate();
  const logout = () => {
    auth.logout();
    setLoggedIn(false);
    navigate('/login');
  };

  return (
    <div className='nav'>
      <div className='nav-title'>
        <Link to='/'>Krazy Kanban Board</Link>
      </div>
      <ul>
      {
        !loggedIn ? (
          <li className='nav-item'>
            <button type='button'>
              <Link to='/login'>Login</Link>
            </button>
          </li>
        ) : (
          <li className='nav-item'>
            <button type='button' onClick={() => {
              logout();
            }}>Logout</button>
          </li>
        )
      }
      </ul>
    </div>
  )
}

export default Navbar;
