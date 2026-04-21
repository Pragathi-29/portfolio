import React from 'react'
import { useScrollProgress } from '../hooks'

export default function ScrollProgress() {
  const p = useScrollProgress()
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed', top: 0, left: 0, height: '2px',
        width: `${p}%`, background: 'var(--gold)', zIndex: 10000,
        transition: 'width .1s linear', pointerEvents: 'none',
        boxShadow: '0 0 8px rgba(232,201,122,.5)'
      }}
    />
  )
}
