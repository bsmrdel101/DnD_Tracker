import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">D&D Tracker</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/dashboard">
              <img src='dashboard.png' className='nav-icon' draggable={false} /> Dashboard
            </Link>

            {user.selected_character &&
              <>
                <Link className="navLink" to="/character">
                  <img src='stats.png' className='nav-icon' draggable={false} /> Stats
                </Link>

                <Link className="navLink" to="/equipment">
                  <img src='equipment.png' className='nav-icon' draggable={false} /> Equipment
                </Link>

                <Link className="navLink" to="/spells">
                  <img src='spells.png' className='nav-icon' draggable={false} /> Spells
                </Link>
                
                <Link className="navLink" to="/inventory">
                  <img src='inventory.png' className='nav-icon' draggable={false} /> Inventory
                </Link>
              </>
            }

            <LogOutButton className="navLink" />
          </>
        )}
      </div>
    </div>
  );
}

export default Nav;
