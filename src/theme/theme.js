import { createMuiTheme } from "@material-ui/core/styles";
//import RalewayWoff2 from '../assets/font/ProximaNova-Regular.ttf';
// const raleway = {
//   fontFamily: 'ProximaNova',
//   fontStyle: 'normal',
//   fontDisplay: 'swap',
//   fontWeight: 400,
//   color:"#525252",
//   src: `
//     local('ProximaNova'),
//     local('ProximaNova-Regular'),
//     url(${RalewayWoff2}) format('truetype')
//   `,
//   unicodeRange:
//     'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
// };

  const Theme = createMuiTheme({
    palette: {
      primary: {
        main: '#3300FF;',
      },
      secondary: {
        main: '#D27355',
      },
      background: {
        default: "#f1f2f6"
      }
    },
    // typography: {
    //   fontSize: 14,
    //   fontWeightRegular: 400,
    //   fontWeightMedium: 500,
    //   fontWeightSemiBold: 600,
    //   fontWeightBold: 700,
      
    // },
   typography: {
      allVariants: {
        // fontFamily: 'ProximaNova, Arial',
        fontFamily: [ 'Poppins', 'sans-serif'].join(','),
        color:"#525252",
        fontSize:"14px",
   

      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1140,
      },
      typography: {
        // fontFamily: 'ProximaNova, Arial',
        fontFamily: [ 'Poppins', 'sans-serif'].join(','),
        
      },
      overrides: {
        // Style sheet name ⚛️
        MuiCssBaseline: {
          "@global": {
            //'@font-face': [raleway],
            '@font-face': ['Poppins', 'sans-serif'],
            html: {
              WebkitFontSmoothing: 'auto',
              fontSize: 14,
              // backgroundColor:'#ffffff'
              color:"#525252"
            },
            h1: {
              fontSize: 28,
            },
            h2: {
              fontSize: 20,
            },




          },
        },
      },

    },
  });
  Theme.overrides = {
    MuiInputLabel: {

      root: {

        textTransform: 'none',
        shrink: true, // <---------


      },

    },

    MuiOutlinedInput: {
      //backgroundColor:'#A4A4A4',
     
      root: {
        //top: theme.spacing(2),  
        border: `1px solid #F3F3F3;`,
        outline: `1px solid transparent`,
        // backgroundColor:' #FFFFFF',
        borderRadius: '5px',
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px',
        borderBottomLeftRadius: '5px',
        borderBottomRightRadius: '5px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.04);',
        color: '#000000',
        lineHeight: '19px',
        fontSize: '13px',
        height: '40px',
        papdding: '0px 60px 0px 30px',

        //padding: theme.spacing(1),     
        '&:hover': {
          border: `1px solid #80CB9E`,
          outline: `1px solid transparent`,
          // backgroundColor:'#ffffff',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.04)',
        },
        '&:focus': {
          border: `1px solid #80CB9E`,
          outline: `1px solid transparent`,
          // backgroundColor:'#ffffff',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.04)',
        },



      },

      // we don't need `focused: {}` with overrides

    },

    MuiButton: {
      outlinedPrimary: {
        borderRadius: '36px',
        fontSize: `14px`,
        fontWeight: `700`,
        textTransform: `none`,
        lineHeight: `18px`,
        border: '0.838746px solid #3300FF',
        color: '#3300FF',
        height: '40px',
        "&:hover": {
          backgroundColor: "#2200AC",
          color: "#ffffff",
          border: '0.838746px solid #2200AC',
        },
        "&:focus": {
          backgroundColor: "#170366",
          color: "#ffffff",
          border: '0.838746px solid #170366',
        },
        "&:disabled": {
          backgroundColor: "#ffffff",
          color: "#170366",
          border: '0.838746px solid #170366;',
          opacity: '0.3'
        },
      },
      containedPrimary: {
        backgroundColor: "#3300FF",
        color: "#ffffff",
        borderRadius: '36px',
        fontSize: `14px`,
        fontWeight: `700`,
        textTransform: `none`,
        lineHeight: `18px`,
        height: '40px',
        boxShadow: '0px 3.35498px 3.35498px rgba(24, 120, 62, 0.1)',
        "&:hover": {
          background: "#2200AC",
          color: "#ffffff",
        },
        "&:focus": {
          background: "#170366",
          color: "#ffffff",
        },
        "&:disabled": {
          background: "#170366",
          color: "#ffffff",
          opacity: '0.3'
        },
      },
      containedSecondary: {
        // '@media (min-width:1920px)': {
        //   fontSize: `26px`,
        // },
        color: "#ffffff",
        borderRadius: '36px',
        fontWeight: `700`,
        fontSize: `14px`,
        textTransform: `none`,
        lineHeight: `18px`,
        boxShadow: '0px 3.35498px 3.35498px rgba(24, 120, 62, 0.1)',
        backgroundColor: '#FF7D50',
        height: '40px',
        "&:hover": {
          backgroundColor: "#E03A00",
          color: "#ffffff",

        },
        "&:focus": {
          backgroundColor: "#E03A00",
          color: "#ffffff",

        },
      },
      outlinedSecondary: {
        borderRadius: '36px',
        fontWeight: `700`,
        fontSize: `14px`,
        textTransform: `none`,
        lineHeight: `18px`,
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1);',
        border: '1px solid #FF7D50',
        color: '#D27355',
        height: '40px',
        "&:hover": {
          backgroundColor: "#FF7D50",
          border: '1px solid #FF7D50',
          color: "#ffffff",

        },
        "&:focus": {
          backgroundColor: "#FF7D50",
          border: '1px solid #FF7D50',
          color: "#ffffff",

        },
      },
    },

  }
  Theme.typography.h1 = {
    fontSize: '28px',
    fontWeight: `600`,
    lineHeight: `45px`,
    color: '#333333',
    
  };
  Theme.typography.h2 = {
    fontSize: '18px',
    fontWeight: `600`,
    lineHeight: `27px`,

    '@media (max-width:1199px)': {
      fontSize: '3.70835vw',
    },
    '@media (max-width:767px)': {
      fontSize: '4.70835vw',
    },
    '@media (max-width:580px)': {
      fontSize: '5.8vw',
      lineHeight: `37px`,
    },
    
  };



  export default Theme;

