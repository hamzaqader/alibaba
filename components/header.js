import React from "react";
import { Container,  Typography,AppBar, Toolbar,Box,IconButton } from "@material-ui/core";
import Ali from './image/Ali.png'
import { makeStyles } from "@material-ui/core/styles";
import { color, typography, width } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  color:'inherit',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'white',
  border:'2px solid #ff6a00',
  borderRadius:'50px',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight:0,
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(10),
    width: 'auto',
  },
}));
  

const SearchIconalign = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  color:'inherit',
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '80ch',
    },
  },
  
}));

function App() {
  
  return (
<AppBar position="relative" color="default"  >
 <Toolbar >
 <img src={Ali} width={50}></img>
 <Typography style={{color:"#FF4500",fontWeight: 200, fontSize: 30,  fontFamily: "Arial Unicode MS"}} >
       Alibaba 
 </Typography>
 <Typography style={{color:"#FF4500", fontSize: 30,  fontFamily: "Arial Unicode MS"}} >
        .com
 </Typography>

 <Search>    
             <SearchIconalign>
             <ArrowDropDownOutlinedIcon/>
             </SearchIconalign>
             <StyledInputBase
               placeholder="What are you looking for"
               inputProps={{ 'aria-label': 'search' }}
              
             />
            
           </Search>
           <AccountBoxIcon 
            fontSize="small"/>sign
            
           <InsertCommentIcon
           fontSize="small"/>message
            <AddShoppingCartIcon
            fontSize="small"
          />Cart
           
        
</Toolbar>
 </AppBar>
  );
}

export default App;