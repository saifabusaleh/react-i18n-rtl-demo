import React from 'react';
import { create } from 'jss';
import rtl from 'jss-rtl';

import {
  MuiThemeProvider,
  StylesProvider,
  createMuiTheme,
  jssPreset,
} from '@material-ui/core/styles';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });


function withRoot(Component) {
  function WithRoot(props) {
    // JssProvider allows customizing the JSS styling solution.
    return (
      <StylesProvider jss={jss}>

        <MuiThemeProvider theme={createMuiTheme({
          direction: props.i18n.dir()
        })}>
          <Component {...props} />
        </MuiThemeProvider>
      </StylesProvider>
    );
  }

  return WithRoot;
}

export default withRoot;