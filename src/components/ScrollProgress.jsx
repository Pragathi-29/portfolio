import React from 'react'
import { useScrollProgress } from '../hooks'
import s from './ScrollProgress.module.css'

export default function ScrollProgress() {
  const p = useScrollProgress()
  return <div className={s.bar} style={{ width: `${p}%` }} aria-hidden="true" />
}
