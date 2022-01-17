import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { APOD } from "../helpers/getAPOD";
import IconButton from "./IconButton";
import "./Post.css";
type Props = {
  picture: APOD;
  onLike: () => void;
};

export function Post({ picture, onLike }: Props) {
  const [showBody, setBody] = useState(false);

  return (
    <div className="post">
      <img src={picture.url} alt={picture.title} className={"picture"} />
      <div className="description">
        <div className="header">
          <div>
            <h3 className="title">{picture.title}</h3>
            <p className="date">{picture.date}</p>
          </div>

          <div className="buttons">
            <IconButton
              name={"heart"}
              type={picture.liked ? "fas" : "far"}
              style={picture.liked ? { color: "red" } : {}}
              onClick={onLike}
            />
            <IconButton
              name={"link"}
              onClick={() => window.open(picture.url)}
            />
            <IconButton
              name={showBody ? "chevron-circle-up" : "chevron-circle-down"}
              onClick={() => setBody(!showBody)}
            />
          </div>
        </div>

        {showBody && <p className="body">{picture.explanation}</p>}
      </div>
    </div>
  );
}
