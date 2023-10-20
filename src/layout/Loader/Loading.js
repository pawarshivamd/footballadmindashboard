import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const Loading = () => {
  return (
    <div>
      <Box sx={{ height: '77vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CircularProgress color="primary" />
      </Box>
    </div>
  )
}

export default Loading
