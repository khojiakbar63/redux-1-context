import React from "react";
import { NavLink } from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux";
import {changeStr} from '../../redux/reducer/message'
import './style.css'

export const Header = () => {


  const {value} = useSelector((state)=> state.message)
  const {count} = useSelector((state)=> state.counter)
  const dispatch = useDispatch()



  return (
    <header className="bg-warning text-white py-2">
      <div className="container">
        <nav className="d-flex justify-content-between align-items-baseline">
          <h3 className=" font-weight-bold fst-italic font-monospace">{value}</h3>
          <ul className="d-flex list-unstyled gap-3">
            
            <li >
              <NavLink className=" text-decoration-none fs-5" to="/">Home({count})</NavLink>
            </li>
            <li>
              <NavLink className="text-decoration-none fs-5" to="about">About</NavLink>
            </li>
            <li>
              <NavLink className=" text-decoration-none fs-5" to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
