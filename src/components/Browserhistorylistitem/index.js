import './index.css'

const Browserhistorylistitem = props => {
  const {historyDetails, onDeleteEvent} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails
  const onDelete = () => {
    onDeleteEvent(id)
  }
  return (
    <li className="li-container">
      <div className="li-content">
        <p className="title">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="img" />
        <p className="title">{title}</p>
        <p className="url">{domainUrl}</p>
      </div>
      <div>
        <button
          type="button"
          className="del-btn"
          onClick={onDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="del-img"
          />
        </button>
      </div>
    </li>
  )
}

export default Browserhistorylistitem
