import React, { useState} from "react";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';
import lockImage from '../../../../../assets/images/lock.png'

const SearchBarTable = ({ onSearch , search, handleCancel}) => {
  //const [search, setSearch] = useState("");
  const [addClass,  setAddClass] = useState(false)
  console.log("search", search)

  const onInputChange = (value) => {
    //setSearch(value);
    onSearch(value);
  };

  const onFocusHandle = () =>{
    setAddClass(true)
  
  }
  const onBlurHandle = () =>{
    setAddClass(false)
  }
//   const handleCancel = () =>{
//     setSearch('')
//     setList(list)
//   }
//   console.log('list', list)
  return (
      <>
      <TextField
           
            fullWidth
            variant="outlined"
            //placeholder="Password"
            size="small"
            name="password"
            className={`${addClass? 'me': ''}`}
     
      placeholder="search"
      value={search}
      onChange={(e) => onInputChange(e.target.value)}
      onBlur={()=>{onBlurHandle()}}
      onFocus={(e) => {
        onFocusHandle();
        console.log('Focused on input');
      }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                   <IconButton
                  aria-label="toggle password visibility"                  
                  className="passwordIcon"
                  onClick={()=>handleCancel()}
                >
                  {search&&addClass ? <Visibility /> : ''}
                </IconButton>
                </InputAdornment>
              ),
              startAdornment: (
                <InputAdornment position="start">
                  <img src={lockImage} alt=" " />
                </InputAdornment>
              ),
            }}
          />
   
    </>
  );
};

export default SearchBarTable;
