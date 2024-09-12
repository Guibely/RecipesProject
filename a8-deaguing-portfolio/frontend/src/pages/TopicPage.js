import React from 'react';
import { RiArticleLine } from "react-icons/ri";
function TopicPage() {
    return (
       <> 

    <main>
        <h2> <RiArticleLine/> Web Development Topics</h2>
        <section>
            <nav class= "local">
            <a href="#webServers" >Web Servers</a>
            <a href="#frontendDesign" >Frontend Design</a>
            <a href="#optimazingImages" >Optimazing Images</a>
            <a href="#favicons" >Favicons</a>
            <a href="#css" >CSS</a>
            </nav>
            
                
                <article id="webServers">
                <h3> Web Servers</h3>
                <p><strong>Index</strong> refers to what the server uses to identify
                    the specific resource that the client has requested. In almost all web applications, the file "index.html" 
                    is called the homepage of the web application, which is built to return the specified file whenever a 
                    <strong>GET</strong> request is received. There are other servers, where the use of "deafult.html" is allowed as a homepage. </p>
                <p> The difference between the file's details when viewed from the <strong>web server</strong>
                    and the local computer are that on the web server, the file provides the favicon and the extension. It also shows
                    the status code for each file. The Local computer had the same files as failed and not showing the status code.</p>
                <p> The reason why the favicon.ico file has a status of 200 on the web server versus the main.css and main.js do not, 
                    is because the request succeeded launching the current file, which is HTML file. Currently, there are no main.css and main.js files, 
                    therefore it shows a 404 status code, meaning that the requested resource is not found on the server, because these files are missing.
                </p>
                <p>  The parts of the file's URL  are: "https" the scheme, "web.engr." subdomain, 
                    "oregonstate.edu" host/domain, "~deaguing" path to the page, "/a-deaguing" resource.</p>
                </article>
                
                <article id="frontendDesign">
                <h3>Frontend Design</h3>
                    <p>Frontend Design refers to what the user sees and experience. It includes the visual design of the page, the graphical user-interface,
                        and the interactive experience. The visual designs involve things such as color scheme,
                        font, typography scheme and others. The graphical user-interface (GUI), include four main parts: 
                        Icons, Windows, Menus and Pointer.
                    </p>
                    Frontend Design follow the <strong> "E"s, </strong> which are:
                        <dl>
                            <dt><strong> Effective</strong> </dt>
                            <dd>helping users meet their goal </dd>
                            <dt><strong> Efficient</strong> </dt>
                            <dd>users are able to accomplish tasks with the least amount of steps</dd>
                            <dt><strong> Easy to navigate</strong> </dt>
                            <dd>make it clear for users and easy to understand</dd>
                            <dt><strong> Erro-Free </strong> </dt>
                            <dd> refrain from availability issues and accessibility issues, by thinking of common mistakes user could run into. </dd>
                            <dt><strong> Enjoyable or Engaging</strong> </dt>
                            <dd> adjusts the needs of the intended users in content and design for user to be engaged</dd>                            
                        </dl>
                
                    <p> The <strong>page layout</strong> design usually involves a header, nav, main, section or article, and a footer. The <strong> header component</strong>
                    refers to text or information found at the top of the page, it usually shows the name, publisher and/or marketing slogan.
                    The <strong>nav component</strong> is a block of navigation that can take the user from the current page to other pages within the site. 
                    It typically includes the main menu, search tools, stories, locations and legal links. The <strong> main component</strong> indicates
                    the leading block that holds content. 
                    The <strong> section component</strong> is used to segment content. It usually includes multiple <strong> articles</strong> that 
                    are talking about a single specific subject.
                    The <strong> footer component</strong> is placed at the bottom and usually contains the contact information, legal information
                    and links to important sites. It should always show the owner's copyright statement.
                    </p>
                    <p> A page sometimes have hyperlinks to go from one item to another by using
                         <strong> anchor </strong> elements. Anchor links can be:
                        <ol>
                            <li> <strong> External link </strong>: takes user to a different URL that is not the current site.</li>
                            <li> <strong> Internal link </strong>: takes user to a text item on current page within site</li>
                            <li> <strong> Page to page link </strong>: takes user to a different page within the same site. </li>
                        </ol>
                    </p>
                </article>

                <article id="optimazingImages"> </article>
                <h3> Optimizing images</h3>
                    <p> The reason images need to be optimized, is to reduce the time it takes an image 
                        to display in a browser. To be able to  <strong>  optimize an image</strong>, six specifications need to be followed:
                        <strong>Descriptive file name, small file size, exact dimensions,
                                correct file format, reduced resolution, color mode.
                        </strong> One of the reasons it is important to follow these instructions,
                        is due to that it helps with reducing and keeping from large graphic files to filling up shared
                        server space. Also, it helps users to see images without having to scroll down the page, and pictures
                        don't overlie on important information.
                    </p>
                    
                        The file formats that are most appropriate for photos and art lines are:
                        <dl>
                            <dt>.PNG </dt>
                            <dd> This formar can be used with both, photos and art lines. </dd>
                            <dt>.GIF</dt>
                            <dd> This format is mainly used for art line. It can save short photo or video series as animated </dd>
                            <dt>.JPG</dt>
                            <dd> This format is more commonly used for photographs which have many shades of colors, significant detail,
                                 and are usually taken on high-resolution cameras</dd>
                        </dl>
                        
                    
                <article id="favicons"></article>
                <h3> Favicons</h3>
                    <p><strong>Favicons</strong> (short for "Favorite Icons"), are a logo or symbol which are used in browsers and devices
                        to represent the website being displayed. They are usually presented at the top of the
                        web browser on a tab.  Their most typical file formats
                        are .SVG .PNG as wel ass .ICO. 

                    </p>
                <article id="css"></article>
                <h3> Cascading Stylesheets (CSS) </h3>
               <p> In order to style the layout of a website and structure its contents so it's more appealing to the human eye, <strong> Cascading
                Stylesheets </strong> (CSS) is the language in charge of doing so. There are five ways of incorporating CSS into a website:
                <ol>
                    <li> <strong>External </strong> :</li>  by using a link tag to connect to an external CSS file
                    <li> <strong> Embedded </strong>:</li>  within a style tag in the area
                    <li> <strong> Inline </strong> : </li> by using a style attribute and value
                    <li> <strong> JavaScript template literals </strong> :</li> within a JavaScript function
                    <li> <strong> JavaScript </strong> : </li> by manipulating the Document Object Model
                </ol>

            </p>
                
        </section>    
    </main>

        </>
    );
}
export default TopicPage;