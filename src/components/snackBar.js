import React from 'react';
import { Snackbar } from '@material-ui/core';
import { useTranslation } from 'react-i18next';


export default () => {

  const { t } = useTranslation();

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "center"
      }}
      open={true}
      message={t('welcome')}
    >
    </Snackbar>
  );
}