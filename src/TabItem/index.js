import './index.css'

const TabItem = props => {
  const {tabDetails, onChangingFruits, isActive} = props

  const {tabId, displayText} = tabDetails
  const onChangeFruits = () => {
    onChangingFruits(tabId)
  }
  const activeClassname = isActive ? 'active-btn' : ''

  return (
    <li className="tab-item">
      <button
        className={`button ${activeClassname}`}
        type="button"
        onClick={onChangeFruits}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
