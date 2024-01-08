import { FC } from "react";
import "./input.css";
type Props = {
  type: string;
  name: string;
  placeholder?: string;
};
const Inputs: FC<Props> = ({ type, name, placeholder }) => {
  return (
    <input
      className="customInputs"
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
};
export default Inputs;
