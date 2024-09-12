// Import dependencies
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// Import Components, styles, media
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import TopicPage from './pages/TopicPage';
import AddRecipePageTable from './pages/AddRecipePageTable';
import EditRecipePageTable from './pages/EditRecipePageTable';
import RecipePage from './pages/RecipePage';
// Home, Topics, Gallery, Contact, and Staff Pages 

// Define the function that renders the content in Routes, using State.
function App() {

  const [recipeToEdit, setRecipeToEdit] = useState([]);

  return (
    <>
      <BrowserRouter>

          <header>
            <h1> Guibely De <img src="android-chrome-192x192.png" className='App-logo' alt='logo'/></h1>
          </header>

          < Navigation />

          <main>
            <section>
                <Routes> 

                    <Route path="/"element={<HomePage/> }/>
                    <Route path="/TopicPage" element={<TopicPage/> }/>
                    <Route path="/recipes" element={<RecipePage setRecipeToEdit={setRecipeToEdit}/>}/>
                
                    
                    {/* Use these if your schema requires LONG data input: */}
                    <Route path="/create" element={<AddRecipePageTable />}/>
                    <Route path="/update" element={<EditRecipePageTable recipeToEdit={recipeToEdit}/>}/>
                    
                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy; 2023 Guibely De Aguinaga</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;