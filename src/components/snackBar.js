import React from 'react';
import { Snackbar } from '@material-ui/core';
import { useTranslation } from 'react-i18next';


export default () => {

  const { t } = useTranslation();
  const snackbarMessage = "test!" 

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "center"
      }}
      open={true}
      message={t('welcome')}
      aria-describedby="client-snackbar"
    >
    </Snackbar>
  );
}