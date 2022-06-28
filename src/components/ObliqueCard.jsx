const ObliqueCard = ({
  date,
  title,
  inProgress,
  description,
  list,
  listItems,
  image,
  cardExternal,
  alignLeft }) => (
  <div
    className={`oblique-card p-side--s pos--rel container m-top--xxl 
    ${alignLeft ? 'oblique-card--reverse' : ' '}`}
    data-card-title={title}
  >
    <div className='oblique-card__content'>
      <span className='f--s'>{date}</span>
      <h3 className='c--sky m--reset f--secondary h2'>{title}</h3>
      {!!inProgress && <span className='f--xs'>~ In progress ~</span>}
      <p className='oblique-card__content-description f--l m-top--s'>{description}</p>
      <h4 className='m--reset'>{list}</h4>
      <ul className='list--inline flex flex--end p--reset m-top--xs'>
        {listItems.map((listItem) => <li>{listItem}</li>)}
      </ul>
      {!!cardExternal && <span>For more info click <a href={cardExternal} target='_blank' rel='noreferrer'>Here</a></span>}
    </div>
    <img src={image} alt='Card image' className='oblique-card__image p--m' />
  </div>
)

export default ObliqueCard
