import { Title } from "../../atoms/title/Title.jsx";
import "./Card.css";


const Card =(props)=>{
  // eslint-disable-next-line react/prop-types
  const { imagen, ciudad, pais } = props;
  
  return (
    <div className="container">
      <img src={imagen} className="image" />
      <Title title={ciudad} subtitle={pais} />
    </div>
  );
}

export { Card };