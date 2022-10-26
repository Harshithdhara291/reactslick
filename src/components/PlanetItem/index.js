import './index.css'

const PlanetItem = props => {
  const {each} = props
  const {name, imageUrl, description} = each

  return (
    <div className="cont">
      <img src={imageUrl} alt={`planet${name}`} className="image" />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}

export default PlanetItem
