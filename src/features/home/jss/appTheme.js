import { createMuiTheme } from '@material-ui/core/styles';

const createTheme = (isNightMode) => createMuiTheme({
  palette: {
    type: isNightMode ? 'dark' : 'light',
    background: {
      default: isNightMode ? '#242332' : '#242332',
      paper: isNightMode ? '#606077' : '#606077',
      primary: isNightMode ? '#505067' : '#505067',
      secondary: isNightMode ? '#3B3A4D' : '#3B3A4D',
      dark: isNightMode ? '#2B2A3D' : '#2B2A3D',
      paused: isNightMode ? '#2B2A5A' : '#2B2A5A',
      retired: isNightMode ? '#d32f2f' : '#d32f2f',
      hover: isNightMode ? '#2B2A3D' : '#2B2A3D',
      border: isNightMode ? '#2B2A3D' : '#2B2A3D',
    },
    primary: {
      main: isNightMode ? '#fff' : '#fff',
    },
    secondary: {
      main: isNightMode ? '#fff' : '#fff',
    },
    text: {
      primary: isNightMode ? '#fff' : '#fff',
      secondary: isNightMode ? '#B0B0DD' : '#B0B0DD',
    },
  },
  overrides: {
    MuiButton: {
      label: {
        color: isNightMode ? '#fff' : '#fff',
      },
    },
    // for dropdown menu items
    MuiButtonBase: {
      root: {
        color: isNightMode ? '#fff' : '#000',
      },
    },
    MuiCheckbox: {
      colorPrimary: {
        color: isNightMode ? '#fff' : '#000',
      },
      colorSecondary: {
        color: isNightMode ? '#fff' : '#000',
      },
    },
  },
});

export default createTheme;
