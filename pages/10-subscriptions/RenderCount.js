import React from 'react'

/**
 * Displays how many times it has been rendered
 */
export default function RenderCount() {
  const renders = React.useRef(0)
  return <i>{++renders.current}</i>
}
