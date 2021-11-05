import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, ButtonGroup } from '@mui/material';


export default function Body() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color='default'>
                <Toolbar variant="dense">

                    <ButtonGroup variant="text" color='inherit' size='small' aria-label="text button group">
                        <Button><MenuIcon/> Categories </Button>
                        <Button >Ready to Ship</Button>
                        <Button >Personal Protective</Button>
                        <Button >Buyer Central</Button>
                        <Button>Sell on Alibaba</Button>

                    
                    </ButtonGroup>










                </Toolbar>
            </AppBar>
        </Box>
    );
}
