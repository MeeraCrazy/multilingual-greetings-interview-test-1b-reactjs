import './index.css'

const ListImage = props => {
  const {imageDetails} = props
  const {imageUrl, imageAltText} = imageDetails

  return (
    <>
      <li className="list-container">
        <img src={imageUrl} alt={`${imageAltText}`} className="image-item" />
      </li>
    </>
  )
}

export default ListImage
