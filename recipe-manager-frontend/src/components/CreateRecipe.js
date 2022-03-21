import React from "react";
import axios from "axios";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default class CreateRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: "",
      description: "",
      ingredients: {
        quantity: "",
        ingredient: "",
      },
      directions: [],
    };
  }

  onSubmit(e) {
    e.preventDefault();

    const recipe = {
      title: this.state.title,
      description: this.state.description,
      ingredients: this.state.ingredients,
      directions: this.state.directions,
    };
    console.log("test");
    console.log(recipe);

    axios
      .post("http://localhost:3000/recipe/", recipe)
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  onInputChange(value, metric) {
    this.setState({ [metric]: value });
  }

  render() {
    return (
      <div>
        <h3>Create new recipe</h3>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1 },
          }}
          noValidate
          autoComplete="off"
          onSubmit={this.onSubmit}
        >
          <TextField
            fullWidth
            label="Title"
            variant="outlined"
            value={this.state.title}
            onChange={(e) => this.onInputChange(e.target.value, "title")}
            required
          />
          <TextField
            fullWidth
            multiline
            label="Description"
            value={this.state.description}
            onChange={(e) => this.onInputChange(e.target.value, "description")}
            rows={2}
          />
          <Button type="submit">Submit</Button>
        </Box>
      </div>
    );
  }
}
