import './index.css'

const TabItem = props => {
  const {languageDetails, isActive, changeTabItem} = props
  const {id, buttonText} = languageDetails

  const activeClassName = isActive ? 'active-btn' : 'non-active-btn'

  const onclickTab = () => {
    changeTabItem(id)
  }

  return (
    <li className="list-item">
      <button className={activeClassName} type="button" onClick={onclickTab}>
        {buttonText}
      </button>
    </li>
  )
}

export default TabItem
