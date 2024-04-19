import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

export default function BasicAlerts({severity,text}) {
  //severity="success"
  //severity="info"
  //severity="warning"
  //severity="error"
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant="filled" severity={severity}>{text}</Alert>
    </Stack>
  );
}