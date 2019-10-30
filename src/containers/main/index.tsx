import React, { useEffect, useState } from 'react'
import PoseText from 'react-pose-text'

import main from '../../data/main.json'
import styles from './index.module.css'

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 0.4,
    y: 0,
    delay: ({ charIndex }) => charIndex * 30,
  },
}

export const Main = () => {
  const [currentCommandIndex, setCommandIndex] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      const nextCommandIndex = (currentCommandIndex + 1) % main.sections.length
      setCommandIndex(nextCommandIndex)
    }, 1500)
  }, [currentCommandIndex])

  return (
    <div className={styles.container}>
      <h1 className={styles.command}>{`./${main.name}`}</h1>

      <div className={styles.optionContainer}>
        <PoseText
          initialPose="exit"
          pose="enter"
          charPoses={charPoses}
        >
          {`--${main.sections[currentCommandIndex].command}`}
        </PoseText>
      </div>
    </div>
  )
}
