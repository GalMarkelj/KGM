export const makeClassNameDecorator = (classPrefix) => {
  return (mods = [], extraClass = '') => 
    mods.reduce((acc, curr) => `${acc} ${classPrefix}--${curr}`,
    `${extraClass} ${classPrefix}`.trim())
}

export default { makeClassNameDecorator }
