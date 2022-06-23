const ClickElement = ({label, type, elementType, classes, url, data}) => {
  switch (elementType) {
    case 'link':
      return ( <Link to={url} className={classes}>{label}</Link> )
      break

    case 'a':
      return ( <a href={url} className={classes}>{label}</a> )
      break

    case 'button':
      return ( <button type={type} className={`js--click ${classes}`} data-clickFun={data}>{label}</button> )
      break

    default:
      break
  }
  
}

export default ClickElement
