export default function GoodItem(props) {
  const { name, id, description, total, image } = props;
  return (
    <>
      <div className="card">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img src={image} alt={name} />
              <span className="title">{name}</span>
            </div>
            <div className="card-content">
              <p>{description}</p>
              <span>{total}</span>
            </div>
            <div className="card-action">
              <button className="waves-effect waves-light btn right">
                Push for add score
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
