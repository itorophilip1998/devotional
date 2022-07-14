import { Typography } from '@material-ui/core';
import React from 'react'

function Header({item}) {
  return (
    <div className="devotional_header">
      <Typography variant="button" display="block" gutterBottom>
        button text
      </Typography>
    </div>
  );
}

export default Header