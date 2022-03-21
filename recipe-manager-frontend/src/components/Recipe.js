import React from "react";

import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";

const Recipe = ({ recipe, deleteRecipe }) => (
  <TableRow
    key={recipe.title}
    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
  >
    <TableCell component="th" scope="row">
      {recipe.title}
    </TableCell>
    <TableCell align="left">{recipe.description}</TableCell>
    <TableCell align="right">
      <DeleteIcon href="/" onClick={() => deleteRecipe(recipe.id)} />
    </TableCell>
  </TableRow>
);

export default Recipe;
