// The purpose of this file is to integrate all styles in one place and reuse classes in various components
import { ModeType } from '../types/types'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { fade, makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';

// Below components need to be imported to correctly overwrite styles with classes in useStyle
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';

// Custom palette - colors should be defined here and referenced in classes
const color1 = '#1A1A1D'; // black
const color2 = '#950740'; // dark purple
const color3 = '#F0F0F0'; // light grey
const color4 = '#6e6e6e'; // lighter black
const colorHoverLighter = 'rgba(255, 255, 255, 0.075)';
const colorHoverDarker = 'rgba(0, 0, 0, 0.075)';

// Wrapper for the function in order to pass type parameter. 
// Requires defining 'const theme' in components which make use of it. See Layout.tsx
const createTheme = (type: ModeType) => {

    let theme = createMuiTheme({
        // For more customization options see https://material-ui.com/customization/default-theme/
        palette: {
            type: type,
            primary: {
                light: "#FCBA04",
                main: "#590004",
                dark: "#250001",
                // contrastText: "#fff",
            },
            secondary: {
                light: "#F3F3F3",
                main: "#FCBA04",
                dark: "#590004",
                // contrastText: color4,
            },
            common: {
                black: "#000",
                white: "#fff"
            },
            // background: {
            //     paper: "#fff",
            //     default: "#fafafa"
            // },
            error: {
                light: "#e57373",
                main: "#f44336",
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
            grey: {
                50: "#fafafa",
                100: "#f5f5f5",
                200: "#eeeeee",
                300: "#e0e0e0",
                400: "#bdbdbd",
                500: "#9e9e9e",
                600: "#757575",
                700: "#616161",
                800: "#424242",
                900: "#212121",
                A100: "#d5d5d5",
                A200: "#aaaaaa",
                A400: "#303030",
                A700: "#616161",
            },
            text: {
                primary: "#590004",
                secondary: "#250001",
                disabled: "rgba(133, 30, 30, 0.38)",
                hint: "rgba(0, 0, 0, 0.38)"
            }
        },
        typography: {
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            fontSize: 12,   // Base font size to which variants are relative. Default material-ui is 16px
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

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        /* 
            Display and size
        */
        main: {
            backgroundColor: color3,
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
        height200: {
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
        bgDark: {
            backgroundColor: color1,
        },
        bgColor: {
            backgroundColor: color2,
        },
        bgLight: {
            backgroundColor: color3,
        },
        bgHoverDarker: {
            backgroundColor: colorHoverDarker,
        },
        bgHoverLighter: {
            backgroundColor: colorHoverLighter,
        },
        formPaper: {
            padding: theme.spacing(2),
            color: color1,
            width: '33%',
            minWidth: '400px',
            marginTop: '3%',
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
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
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
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
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
            color: color1,
        },
    })
);


export { useStyles, createTheme };