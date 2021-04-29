import { container } from 'assets/jss/material-kit-pro-react.js';

const appStyle = theme => ({
  page: {
    minHeight: '100vh',
    position: 'relative',
     overflow: 'hidden',
    // backgroundImage:`url(${require('images/bg-fog.png')})`,
    // backgroundRepeat:"no-repeat",
    // backgroundPosition:"bottom",
    // width:"100%",
  
    backgroundPosition:"bottom"
  },
  container: {
    ...container,
    zIndex: 1,
  },
  children: {
    minHeight: '77vh',
  },
});

export default appStyle;
