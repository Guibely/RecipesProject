import React from 'react';
import { Link} from 'react-router-dom';
import { TiHome } from "react-icons/ti";
import { RiArticleLine } from "react-icons/ri";
import { GiMeal } from "react-icons/gi";

// Change the function names and links
// to fit your portfolio topic.

function Nav() {
  return (
    <nav className="app-nav">
      <Link to="/"> <TiHome/> Home </Link>
      <Link to="../TopicPage"> <RiArticleLine /> Topics</Link>
      <Link to="/recipes"> <GiMeal /> Recipes</Link>
      {/* <Link to="/ContactPage">Contact</Link>
      <Link to="/StaffPage">Staff</Link> */}
        {/* Add links to Home, Topics, Gallery, Contact, and Staff Pages  */}
    </nav>
  );
}
export default Nav;
