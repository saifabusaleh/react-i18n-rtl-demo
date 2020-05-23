import React from 'react';
import { create } from 'jss';
import rtl from 'jss-rtl';
import i18n from "./i18n/i18n";

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
          direction: i18n.dir()
        })}>
          <Component {...props} />
        </MuiThemeProvider>
      </StylesProvider>
    );
  }

  return WithRoot;
}

export default withRoot;