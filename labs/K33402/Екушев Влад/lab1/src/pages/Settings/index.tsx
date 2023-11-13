import { ConstructionRounded } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { AppBar } from 'src/components/AppBar'

const Settings: React.FC = () => {
  return (
    <>
      <AppBar fixed header="Настройки" />
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          flexDirection: 'column',
        }}
      >
        <ConstructionRounded sx={{ width: 56, height: 56 }} color="disabled" />
        <Typography color="GrayText">Страница в разработке</Typography>
      </Box>
    </>
  )
}

export default Settings
