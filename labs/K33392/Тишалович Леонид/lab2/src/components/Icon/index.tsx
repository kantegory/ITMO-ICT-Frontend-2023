import Icons from "../../assets/sprite.svg";
import style from "./Icon.module.sass";

type IconProps = {
  id: string;
};

export const Icon = ({ id }: IconProps) => {
  return (
    <svg className={style.wrapper}>
      <use href={Icons + "#" + id}></use>
    </svg>
  );
};
