import React, { useState } from "react";
import { APOD } from "../helpers/getAPOD";
import "./Post.css";
type Props = {
  picture: APOD;
  onLike: () => void;
};

export function Post({ picture, onLike }: Props) {
  const [showBody, setBody] = useState(false);

  return (
    <div className="Post">
      <img src={picture.url} alt={picture.title} className={"picture"} />
      <div className="description">
        <div className="header">
          <div>
            <h3 className="title">{picture.title}</h3>
            <p className="date">{picture.date}</p>
          </div>

          <div className="buttons">
            <button
              onClick={() => {
                navigator.clipboard.writeText(picture.url);
              }}
            >
              Link
            </button>
            <button onClick={onLike}>
              {picture.liked ? "Liked" : "Not liked"}
            </button>
            <button onClick={() => setBody(!showBody)}>
              {showBody ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {showBody && <p className="body">{picture.explanation}</p>}
      </div>
    </div>
  );
}
