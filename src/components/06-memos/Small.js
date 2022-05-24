import React, { memo } from 'react'

export const Small = memo(({value}) => {
    console.log('ptm');
  return (
    <small>{value}</small>
  )
})
