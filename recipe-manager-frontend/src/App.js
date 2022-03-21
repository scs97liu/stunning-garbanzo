import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Container from "@mui/material/Container";

import Header from "./components/Header";
import RecipeList from "./components/RecipeList";
import CreateRecipe from "./components/CreateRecipe";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/create" element={<CreateRecipe />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
