import React from "react";
import axios from "axios";
import Recipe from "./Recipe";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default class RecipeList extends React.Component {
  constructor(props) {
    super(props);
    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.state = {
      recipes: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/recipes/")
      .then((response) => this.setState({ recipes: response.data }))
      .catch((error) => console.log(error));
  }

  deleteRecipe(id) {
    axios
      .delete("http://localhost:3000/recipe/" + id)
      .then((response) => console.log(response.data));
    this.setState({
      recipes: this.state.recipes.filter((el) => el.id !== id),
    });
  }

  recipeList() {
    return this.state.recipes.map((currentRecipe) => {
      return (
        <Recipe
          recipe={currentRecipe}
          deleteRecipe={this.deleteRecipe}
          key={currentRecipe.id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>All Recipes</h3>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Recipe</TableCell>
                <TableCell align="left">Description</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{this.recipeList()}</TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}
