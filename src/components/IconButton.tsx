import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./IconButton.css";
import React, { useState } from "react";

type Props = {
  name: IconName;
  type?: "far" | "fas";
  onClick: () => void;
  style?: React.CSSProperties;
  liked?: boolean;
  showAnimation?: boolean;
};

function IconButton({
  name,
  type = "fas",
  onClick,
  style,
  liked,
  showAnimation = false,
}: Props) {
  const [animate, setAnimate] = useState(false);
  function animateLike() {
    onClick();
    setAnimate(!animate);
    return;
  }

  return (
    <FontAwesomeIcon
      id={name}
      icon={[type, name]}
      size="lg"
      onClick={animateLike}
      className={showAnimation && animate ? "animatedIcon" : "icon"}
      style={style}
    />
  );
}

export default IconButton;
