import React from 'react';
import { RiComputerFill } from "react-icons/ri";

function HomePage() {
  return (
    <>
    
      <h2>< RiComputerFill /> Welcome to my Web Development Portafolio</h2>
      <h3>About this app</h3>
      <p> This website incorporates all of the following technologies, which are explained briefly here and demostrated in each
        tab. </p>
        <ul>
          <li> <strong> HTML</strong></li> is a Hyper Text Markup Language use to structure and display a website. HTLM contents would be
          paragraphs, tables, list or most of the content that is displayed on a site. 
          <li> <strong> CSS</strong> </li> stands for " Cascading Style Sheets", and it's a langague use to make a site and its contents have a great aesthetic
          features, in other words it's the language use for the looks of the website.
          With this, you can create rules to tell your site how you want to style the site, like which font to use,
          color, size, etc. 
          <li><strong> JavaScript</strong> </li> is a scrpiting language use to develop an interactive website. For example,
          developers use JavaScript to control multimedia, make interactive maps, or any button a person uses in a website that has a function.
          <li><strong> Node</strong></li>  is an open-source JavaScript runtime enviroment, that allows developers to
          writr JS code running directly in a computer process itself instead of in a browser.
          <li><strong> Express</strong></li> is a backend framework that provides vigorous tools and features for developing
          backend applications. It provides routing, middleware and HTTP request and responses to build large scale applications.
          <li><strong> Asynchronous Programming</strong></li> Allows you to accomplish various taks simultaneously without having
          to wait for one task to end before starting a another.
          <li><strong> React</strong></li> is a open-source frontend JavaScript library use to build user interfaces based of functions
          call "components".
        </ul>
    </>
  );
}

export default HomePage;