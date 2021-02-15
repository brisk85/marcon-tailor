
// Dependencies
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import SVG from 'react-inlinesvg'

// Utils
import { indexPanelAnimations } from 'utils'

// Store
import { INDEX_OVERLAY_KEY_INTERIORS } from 'store/constants'

// Components
import { BgImage } from 'components/ui'

// Component
export default function Interiors ({ active, setActiveOverlayKey }) {
  const sectionClass = useRef('page__index__interiors')
  const [ animationState, setAnimationState ] = useState('initial')
  const [ isMobile, setIsMobile ] = useState(false)

  //
  useEffect( () => {
    const isActive = active === sectionClass.current
    if ( isActive ) setAnimationState('enter')
    if ( !isActive ) setAnimationState('exit')
  }, [ active ])

  //
  useEffect( () => {
    const onResize = () => {
      if ( window.innerWidth < 767 && !isMobile ) setIsMobile(true)
      if ( window.innerWidth > 767 && isMobile ) setIsMobile(false)
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [ isMobile ])

  //
  return (
    <motion.section className={ sectionClass.current } data-panel-trigger="true" data-active={ active === sectionClass.current } initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.container }>
      <motion.div className="bg-animation" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.bgAnimation }>
        <BgImage src={ isMobile ? `${process.env.BASE_PATH}/img/index/tailor-int-02-1080x1920.png` : `${process.env.BASE_PATH}/img/index/image3.jpg` } />
      </motion.div>

      <article>
        <motion.span className="panel-name" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.panelName }><span>Interiors</span> &mdash; More Space</motion.span>

        <motion.p className="panel-description" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.panelDescription }>Our interiors have been planned to maximize space and are finished to stand the test of time.</motion.p>
      </article>

      <div className="mobile-tap-indicator" onClick={ () => setActiveOverlayKey(INDEX_OVERLAY_KEY_INTERIORS) }><span>More</span></div>

      <motion.button className="desktop-click-indicator" onClick={ () => setActiveOverlayKey(INDEX_OVERLAY_KEY_INTERIORS) } initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.indicator }>
        <span>More</span>
        <SVG src={ `${process.env.BASE_PATH}/svg/thin-arrow-down.svg` } />
      </motion.button>
    </motion.section>
  )
}
