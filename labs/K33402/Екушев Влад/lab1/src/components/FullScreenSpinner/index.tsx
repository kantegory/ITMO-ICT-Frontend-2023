import { CircularProgress, styled } from '@mui/material'
import React from 'react'

const Root = styled('div')({
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
})

const Spinner = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.divider,
}))

const FullScreenSpinner: React.FC = () => {
  return (
    <Root>
      <Spinner size={40} />
    </Root>
  )
}

export default FullScreenSpinner
