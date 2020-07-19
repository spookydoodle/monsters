/* 
    The purpose of this file is to integrate all themes in one place and reuse classes in various components
*/
import { ModeType } from '../logic/types';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import createPalette from '@material-ui/core/styles/createPalette';

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
        palette: createPalette({
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
            text: {
                primary: type === "light" ? "#540D6E" : "#fff",
                secondary: type === "light" ? "#540D6E" : "#fff",
                disabled: "rgba(133, 30, 30, 0.38)",
                hint: "rgba(0, 0, 0, 0.38)"
            }
        }),
        typography: {
            fontFamily: 'Raleway, sans-serif',
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

    theme.typography.h1 = {
        ...theme.typography.h1,
        [theme.breakpoints.down('sm')]: {
            fontSize: '3.25rem',
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: '2.25rem',
        },
    };

    theme.typography.h2 = {
        ...theme.typography.h2,
        [theme.breakpoints.down('sm')]: {
            fontSize: '2.75rem',
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: '1.75rem',
        },
    };

    return theme
}


export { createTheme };