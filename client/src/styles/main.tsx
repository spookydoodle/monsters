/* 
    The purpose of this file is to integrate all styles in one place and reuse classes in various components
*/
import { ModeType } from '../logic/types';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { fade, makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';

// Below components need to be imported to correctly overwrite styles with classes in useStyle
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';

// // Custom palette - colors should be defined here and referenced in classes
// const color1 = '#1A1A1D'; // black
// const color2 = '#950740'; // dark purple
// const color3 = '#F0F0F0'; // light grey
// const color4 = '#6e6e6e'; // lighter black
// const colorHoverLighter = 'rgba(255, 255, 255, 0.075)';
// const colorHoverDarker = 'rgba(0, 0, 0, 0.075)';

// Wrapper for the function in order to pass type parameter. 
// Requires defining 'const theme' in components which make use of it. See Layout.tsx
const createTheme = (type: ModeType) => {

    let theme = createMuiTheme({
        // For more customization options see https://material-ui.com/customization/default-theme/
        // mixins: {
        //     toolbar: {
        //         // minHeight: "56px", // default
        //         minHeight: "112px",
        //         '@media (min-width:0px) and (orientation: landscape)': {
        //             // minHeight: "48px", // default
        //             minHeight: "96px",
        //         },
        //         '@media (min-width:600px)': {
        //             // minHeight: "64px",   // default
        //             minHeight: "128px",
        //         }
        //     },
        // },
        // TODO: Think if modifying default dark mode backgrounds makes sense, if yes create a separate color palette for dark
        palette: {
            type: type,
            primary: {
                light: "#B75D69",
                main: "#372549",
                dark: "#1A1423",
                // contrastText: "#EAE2B7",
            },
            secondary: {
                light: "#FF9B54",
                main: "#CE4257",
                dark: "#720026",
                // contrastText: color4,
            },
            common: {
                black: "#000",
                white: "#fff"
            },
            background: {
                paper: type === "light" ? "#fff" : "#372549",
                default: type === "light" ? "#fafafa" : "#1A1423",
            },
            error: {
                light: "#e57373",
                main: "#CE4257",
                dark: "#d32f2f",
                contrastText: "#fff"
            },
            warning: {
                light: "#ffb74d",
                main: "#ff9800",
                dark: "#f57c00",
                contrastText: "#rgba(0, 0, 0, 0.87"
            },
            info: {
                light: "#64b5f6",
                main: "#2196f3",
                dark: "#1976d2",
                contrastText: "#fff"
            },
            success: {
                light: "#81c784",
                main: "#4caf50",
                dark: "#388e3c",
                contrastText: "#rgba(0, 0, 0, 0.87"
            },
            // grey: {
            //     50: "#fafafa",
            //     100: "#f5f5f5",
            //     200: "#eeeeee",
            //     300: "#e0e0e0",
            //     400: "#bdbdbd",
            //     500: "#9e9e9e",
            //     600: "#757575",
            //     700: "#616161",
            //     800: "#424242",
            //     900: "#212121",
            //     A100: "#d5d5d5",
            //     A200: "#aaaaaa",
            //     A400: "#303030",
            //     A700: "#616161",
            // },
            text: {
                primary: type === "light" ? "#540D6E" : "#fff",
                secondary: type === "light" ? "#540D6E" : "#fff",
                disabled: "rgba(133, 30, 30, 0.38)",
                hint: "rgba(0, 0, 0, 0.38)"
            }
        },
        typography: {
            fontFamily: 'Raleway, sans-serif',
            // [
            //     '-apple-system',
            //     'BlinkMacSystemFont',
            //     '"Segoe UI"',
            //     'Roboto',
            //     '"Helvetica Neue"',
            //     'Arial',
            //     'sans-serif',
            //     '"Apple Color Emoji"',
            //     '"Segoe UI Emoji"',
            //     '"Segoe UI Symbol"',
            // ].join(','),
            // Base font size to which variants are relative. Default material-ui is 16px
            fontSize: 14,
            // Modify variants here if needed
            // h6: {
            //     fontSize: "0.5rem",
            //     '@media (min-width:600px)': {
            //       fontSize: '1rem',
            //     },
            // }
        },

    });

    theme = responsiveFontSizes(theme);

    return theme
}

// Misc const used in styles
const drawerWidth = 240;
const toolbarHeight = 50;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        /* 
            Display and size
        */
        main: {
            backgroundColor: theme.palette.primary.light,
            minWidth: '100%',
            minHeight: '100%',
        },
        flexSpaceBetween: {
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
        },
        flexCenter: {
            display: 'flex',
            justifyContent: 'center',
        },
        width100: {
            width: '100px',
        },
        spacingRight: {
            marginRight: theme.spacing(2),
        },
        cardMedia: {
            height: '200px',
        },
        height250: {
            height: '250px',
        },
        height300: {
            height: '300px',
        },
        bottom20: {
            marginBottom: '20px',
        },

        /* 
            Containers
        */
        formPaper: {
            padding: theme.spacing(2),
            color: theme.palette.primary.main,
            width: "50%",
            minWidth: '400px',
            margin: "0 auto"
        },
        // content: {
        //     flexGrow: 1,
        //     padding: theme.spacing(3),
        //     [theme.breakpoints.up('sm')]: {
        //         marginLeft: `${drawerWidth}px`,
        //     },

        // },
        // // Can also use this but then change 'content' to 'contentClass' to solve error with abiguity
        // '@media (min-width: 960px)': {
        //     contentCl: {
        //         marginLeft: `${drawerWidth}px`,
        //     },
        // },
        /* 
            Images
        */
        jumbotron: {
            minHeight: "100vh",
        },
        jumbotronContent: {
            marginTop: `${toolbarHeight}px`,
            position: "absolute",
            color: "#fff",
            height: "100vh",
        },
        jumbotronImg: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundSize: 'cover',
            backgroundPosition: "center",
            zIndex: -1,
            backgroundColor: '#000',    // backgroundImage imported as a component in Layout.tsx
            boxShadow: "0px 2px 4px -1px rgba(0,0, 0.2)"
        },
        image: {
            display: "block",
            // height: "auto", 
            width: "90%", 
            borderRadius: "3px",
            margin: "0 auto",
        },
        
        /* 
            Lists
        */
        pageNavList: {
            paddingTop: "0px !important",
            paddingBottom: "0px !important",
        },
        /* 
            Texts
        */
        noDecoration: {
            textDecoration: 'none',
        },
        center: {
            textAlign: 'center',
        },

        /* 
            Hidden
        */
        hideMdUp: {
            [theme.breakpoints.down('sm')]: {
                display: 'none',
            },
        },
        hideSmDown: {
            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
        },
        /* 
            Card
        */
        card: {
            height: "100%",
            display: "flex",
            flexDirection: "column",
            // justifyContent: "space-between",
        },
        cardTitle: {
            fontSize: "0.8rem",
        },

        /* 
            NavBar
        */
        navRoot: {
            display: 'flex',
        },
        appBar: {
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            // borderBottom: "none",
            // boxShadow: "none !important",
            // color: "#fff !important",
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        toolbar: { 
            minHeight: `${toolbarHeight}px !important`,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            // // necessary for content to be below app bar
            // ...theme.mixins.toolbar,
            minHeight: `${toolbarHeight}px !important`,
            justifyContent: 'flex-end',
        },
        contentPadding: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: -drawerWidth,
        },
        contentShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        },

        // Misc
        loading: {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '5%',
            fontSize: '10em',
            color: theme.palette.primary.light,
        },
    })
);


export { useStyles, createTheme };