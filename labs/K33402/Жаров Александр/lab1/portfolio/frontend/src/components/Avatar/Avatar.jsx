import "./Avatar.css";

function Avatar({ src, size }) {
  return <img className="img" src={src} height={size} width={size} alt="" />;
}

export default Avatar;
