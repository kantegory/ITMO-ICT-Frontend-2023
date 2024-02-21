import Icons from "../../../assets/sprite.svg";

interface IconProps {
  id: string;
}
export const Icon = ({ id }: IconProps) => {
  return (
    <svg>
      <use href={Icons + "#" + id}></use>
    </svg>
  );
};
