function Cards(props) {
  // console.log(props);
  const image = props.image;

  return (
    <div className="card">
      {image && <img className="card-img-top" src={image} alt="card" />}
      <div className="card-body">
        {props.children}
        <button className="btn btn-primary">Go somewhere</button>
      </div>
    </div>
  )
}

Cards.defaultProps = {
  image: "",
}

export default Cards;