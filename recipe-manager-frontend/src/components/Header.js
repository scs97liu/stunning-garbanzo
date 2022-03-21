import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link
            href="/"
            variant="h6"
            sx={{ flexGrow: 1 }}
            underline="none"
            color="inherit"
          >
            Recipe Manager
          </Link>
          <Button href="/create" color="inherit">
            Create new recipe
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
