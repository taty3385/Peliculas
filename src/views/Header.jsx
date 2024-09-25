import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from '../views/HeaderStyle.js'; 


export default function Header() {
  return (
    <AppBar
      position="static"
      sx={{ width: "100%", display: "flex", justifyContent: "center",alignItems:"center" }}
    >
      <Toolbar
        sx={{
          width: "95%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between", 
            width: "100%",
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          {/* Links de navegación */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Typography variant="h6" color="inherit">
              Home
            </Typography>
            <Typography variant="h6" color="inherit">
              Últimos Lanzamientos
            </Typography>
            <Typography variant="h6" color="inherit">
              Popular
            </Typography>
          </Box>

          <Search sx={{ marginLeft: 0 }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
