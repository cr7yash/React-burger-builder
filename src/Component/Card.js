import "./Cards.css";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h2>{props.article}</h2>
      </div>
    </div>
  );
}
