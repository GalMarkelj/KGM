export const DropdownTrigger = (props, className) => {
  const handleDropdownToggle = (click) => {
    const dropdown = click.parentNode
    const content = dropdown.querySelector('.dropdown__content')
    const contentHeight = content.offsetHeight
    if (!dropdown.classList.contains('dropdown--active')) {
      dropdown.classList.add('dropdown--active')
      dropdown.style.paddingBottom = `${contentHeight}px`
    } else {
      dropdown.classList.remove('dropdown--active')
      dropdown.style.paddingBottom = '0'
    }
  }
  return (
    <div className={`dropdown__trigger ${className}`} onClick={(e) => handleDropdownToggle(e.target)}>
      {props.children}
    </div>
  )
}

export const DropdownContent = (props) => <div className='dropdown__content'>{props.children}</div>

export const Dropdown = ({ className = '', children }) => {
  return (
    <div className={`pos--rel dropdown ${className}`}>
      {children}
    </div>
  )
}

export default {
  Dropdown,
  DropdownTrigger,
  DropdownContent
}
