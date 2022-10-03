import './index.css'

const ImageItem = props => {
  const {imageDetails, onClickImage} = props
  const {id, thumbnailUrl} = imageDetails

  const onImageClickking = () => {
    onClickImage(id)
  }
  return (
    <li className="image-item">
      <button
        type="button"
        className="thumbnail-btn"
        onClick={onImageClickking}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
      </button>
    </li>
  )
}
export default ImageItem
