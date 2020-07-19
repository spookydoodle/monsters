/* 
    The purpose of this file is to integrate all styles in one place and reuse classes in various components
*/
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

// Below components need to be imported to correctly overwrite styles with classes in useStyle
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';

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
            height: `calc(100vh - ${toolbarHeight}px)`,
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
        bottomNav: {
            zIndex: 10,
            // backgroundColor: "transparent",
            position: "absolute",
            height: "5vh",
            top: "95vh",
            width: "100%",
            background: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, .3))",
            transition: "height .4s ease-out, top .4s ease-out",
            // animation: `$pulseHeight 2s .5s ease-out infinite`,
            '&:hover': {
                top: "90vh",
                height: "10vh",
                transition: "height .4s ease-out, top .4s ease-out",
            }
        },
        '@keyframes pulseHeight': {
            '0%': {
                height: "5vh",
                top: "95vh",
            },
            '50%': {
                top: "90vh",
                height: "10vh",
            },
            '100%': {
                height: "5vh",
                top: "95vh",
            },
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


export { useStyles };