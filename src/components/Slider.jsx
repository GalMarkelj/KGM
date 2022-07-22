import { useState, useEffect, useMemo } from 'react'
import { useRefElement } from '../hooks/useRefElement'
import { Button } from './Button'

export const Slide = ({ slidePosition, children }) => (
  <div
    className='slider__slide'
    style={{ left: `${slidePosition}` }}
  >
    <div className='slider__content'>{children}</div>
  </div>
)

export const Slider = ({ mods = [], className = '', children }) => {
  const [container, containerRef] = useRefElement()
  const [activeSlide, setActiveSlide] = useState(0)
  const [slidePosition, setSlidePosition] = useState(`${activeSlide}`)
  const slideWidth = 800

  const slides = useMemo(() => container
    ? container.querySelectorAll('.slider__slide')
    : [], [container])

  // Handle transition to new active slide
  useEffect(() => {
    if (!slides.length) return
    slides.forEach((slide) => slide.classList.remove('slider__slide--active'))
    slides[activeSlide].classList.add('slider__slide--active')
  }, [activeSlide, slides])

  useEffect(() => {
    if (!mods.includes('slide')) return
    const newSlidePosition = slideWidth * activeSlide
    setSlidePosition(`${newSlidePosition}px`)
  }, [activeSlide])

  useEffect(() => {
    if (!mods.includes('slide')) return
    document.querySelector('.slider').style.transform = `translateX(-${slidePosition})`
  }, [slidePosition])

  return (
    <>
      <div ref={containerRef} className={`slider ${className}`.trim()}>
        {children}
      </div>
      <div className='slider__pagination p--m'>
        {[...new Array(slides.length)].map((_, idx) => (
          <Button
            key={idx}
            className='slider__pagination-item'
            data-state={idx === activeSlide ? 'active' : 'inactive'}
            onClick={() => setActiveSlide(idx)}
          />
        ))}
      </div>
    </>
  )
}

export default {
  Slider,
  Slide
}
