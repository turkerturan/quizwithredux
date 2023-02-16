import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Header() {
    return (
        <Box sx={{ display: "block" }}>
            <AppBar component="nav">
                <Toolbar>
                    <Typography
                        variant="h6"
                        sx={{ marginLeft: "auto", marginRight: "auto" }}
                    >
                        Trivia Quiz
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;