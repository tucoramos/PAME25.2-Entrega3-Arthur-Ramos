import React from "react";
interface Props {
  className?: string;
  text: string;
}
const Rodape = (props: Props) => {
  return <footer className={props.className}>{props.text}</footer>;
};

export default Rodape;
