import "./Avatar.css";

function Avatar({ src, size }) {
  return <img className="avatar" src={src} height={size} width={size} alt="" />;
}

export default Avatar;
