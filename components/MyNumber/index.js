import { useState } from 'react'
import { config, useSpring, animated } from 'react-spring'

export const MyNumber = ({ from = 0, to = 1, toFixed = 0 }) => {
  const [flip, set] = useState(false)
  const { number } = useSpring({
    // reset: true,
    // reverse: flip,
    from: { number: from },
    number: to,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  })

  return <animated.div>{number.to((n) => n.toFixed(toFixed))}</animated.div>
}
