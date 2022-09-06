import React from 'react';
import { AppBar, Toolbar, Typography, Box} from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Navbar.css'
// icons
import PostAddIcon from "@material-ui/icons/PostAdd";
import HomeIcon from "@material-ui/icons/Home";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import InputIcon from "@material-ui/icons/Input";
import CreateIcon from "@material-ui/icons/Create";
// fim icons
function Navbar() {
    return (
      <>
        <AppBar position="static">
          <Toolbar variant="dense" className="cor">
            <Box className="cursor">
              <Typography variant="h5" color="inherit">
                DicasBlog
              </Typography>
            </Box>

            <Box display="flex" justifyContent="start">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  <a
                    href="https://www.instagram.com/generationbrasil/"
                    target="_blank"
                  >
                    <HomeIcon style={{ fontSize: 40, color: "white" }} />
                  </a>
                </Typography>
              </Box>
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  <PostAddIcon style={{ fontSize: 40, color: "white" }} />
                </Typography>
              </Box>
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  <LibraryBooksIcon style={{ fontSize: 40, color: "white" }} />
                </Typography>
              </Box>
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  <CreateIcon style={{ fontSize: 40, color: "white" }} />
                </Typography>
              </Box>
              <Link to="/login" className="text-decorator-none">
                <Box mx={1} style={{ cursor: "pointer", color: "white" }}>
                  <Typography variant="h6" color="inherit">
                    <InputIcon style={{ fontSize: 40, color: "white" }} />
                  </Typography>
                </Box>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </>
    );
}

export default Navbar;