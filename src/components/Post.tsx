import React from "react";
import { APOD } from "../helpers/getAPOD";
import "./Post.css";
type Props = {
  picture: APOD;
  onLike: () => void;
};

export function Post({ picture, onLike }: Props) {
  return (
    <div className="Post">
      <img src={picture.url} alt={picture.title} className={"picture"} />
      <h2>{picture.title}</h2>
      <h3>{picture.date}</h3>
      <p>{picture.explanation}</p>
      <button
        onClick={() => {
          navigator.clipboard.writeText(picture.url);
        }}
      >
        Link
      </button>
      <button onClick={onLike}>{picture.liked ? "Liked" : "Not liked"}</button>
    </div>
  );
}
