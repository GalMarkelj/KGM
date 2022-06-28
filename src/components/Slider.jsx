import { useState, useEffect, useRef, useMemo } from 'react'
import { useRefElement } from '../hooks/useRefElement'
import { Button } from './Button'

export const Slide = (props) => (
  <div className="slider__slide">
    <div className="slider__content">{props.children}</div>
  </div>
)

export const Slider = ({ className = '', children }) => {
  const [container, containerRef] = useRefElement()
  const [active, setActive] = useState(0)

  const slides = useMemo(() => container
    ? container.querySelectorAll('.slider__slide')
    : [], [container])

  // Handle transition to new active slide
  useEffect(() => {
    if (!slides.length) return
    slides.forEach((slide) => slide.classList.remove('slider__slide--active'))
    slides[active].classList.add('slider__slide--active')

    if (!slides[active].parentNode.classList.contains('slider--mobile')) return
    const slideHeight = slides[active].offsetHeight
    const paginationHeight = slides[active].parentNode.querySelector('.slider__pagination').offsetHeight
    const additionalBottomSpacing = 50
    slides[active].parentNode.style.paddingBottom = `${( slideHeight + paginationHeight + additionalBottomSpacing)}px`
  }, [active, slides])

  return (
    <div ref={containerRef} className={`slider ${className}`.trim()}>
      {children}
      <div className="slider__pagination">
        {[...new Array(slides.length)].map((item, idx) => (
          <Button
            key={idx}
            className="slider__pagination-item"
            data-state={idx === active ? "active" : "inactive" }
            onClick={() => setActive(idx)}
          />
        ))}
      </div>
    </div>
  )
}

export default {
  Slider,
  Slide
}
