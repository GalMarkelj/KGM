import { Link } from 'react-router-dom'

import { makeClassNameDecorator } from '../helpers/utils'

const decorate = makeClassNameDecorator('button')

export const Button = ({ mods, className, type = 'button', icon, children, ...props }) => (
  <button className={decorate(icon ? [...mods, 'has-icon'] : mods, className)} type={type} {...props}>
    {icon && <span className={`${icon} button__icon`} />}
    {children}
  </button>
)

export const InternalLinkButton = ({ mods, className, icon, children, ...props }) => (
  <Link className={decorate(mods, className)} {...props}>
    {icon && <span className={`${icon} button__icon`} />}
    {children}
  </Link>
)

export const ExternalLinkButton = ({ mods, className, icon, children, ...props }) => (
  <a className={decorate(mods, className)} {...props}>
    {icon && <span className={`${icon} button__icon`} />}
    {children}
  </a>
)

export default {
  Button,
  InternalLinkButton,
  ExternalLinkButton
}
