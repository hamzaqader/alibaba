import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, ButtonGroup } from '@mui/material';
import { Container,  Typography } from "@material-ui/core";
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';


export default function Body() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color='inherit'  style={{ background: '#F0FFFF',alignItems: 'center'}}>
                <Toolbar variant="dense">
                
              <Typography  style={{textAlign: "center"}}>
              <LightbulbOutlinedIcon fontSize="small"/>
                See FAQs on the coronavirus (COVID-19) and Alibaba.com shipments learn more 
              
</Typography>

                </Toolbar>
            </AppBar>
        </Box>
    );
}