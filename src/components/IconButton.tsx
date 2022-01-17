import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./IconButton.css";
import React from "react";

type Props = {
  name: IconName;
  type?: "far" | "fas";
  onClick: () => void;
  style?: React.CSSProperties;
};

function IconButton({ name, type = "fas", onClick, style }: Props) {
  return (
    <FontAwesomeIcon
      icon={[type, name]}
      size="lg"
      onClick={onClick}
      className="icon"
      style={style}
    />
  );
}

export default IconButton;
