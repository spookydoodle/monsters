//TODO: add some fancy transition when opening a new page, currently updating page feels unnatural

// The purpose of this file is to integrate all styles in one place and reuse classes in various components
import { createMuiTheme } from '@material-ui/core/styles';
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

// Overwrite colors with custom color palette
export const theme = createMuiTheme({
    palette: {
        primary: {
            light: color3,
            main: color1,
            dark: color2,
            contrastText: color4,
        },
        secondary: {
            main: color2,
            contrastText: color4,
        },
        text: {
            primary: color1,
            secondary: color4,
        },
    },
});

// Misc const used in styles
const drawerWidth = 300;

export const useStyles = makeStyles((theme: Theme) =>
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
        textColorLight: {
            color: color3,
        },
        textColorDark: {
            color: color1,
        },
        textColor: {
            color: color2,
        },
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
