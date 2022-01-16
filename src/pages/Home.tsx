import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import { APOD, getAPOD } from "../helpers/getAPOD";
import { formatDate } from "../helpers/formatDate";
import { Post } from "../components/Post";
import TopBar from "../components/TopBar";
import { daysToMs } from "../helpers/daysToMs";
import "./Home.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [pictures, setPictures] = useState<Array<APOD>>([]);

  const endDate = formatDate(new Date());
  const startDate = formatDate(new Date(new Date().getTime() - daysToMs(5)));

  useEffect(() => {
    getAPOD(startDate, endDate).then((data) => {
      setPictures(data.reverse());
      setLoading(false);
    });
  }, []);

  console.log(pictures);

  function handleLike(index: number) {
    let newPictures = [...pictures];
    let newPicture = { ...newPictures[index] };
    newPicture.liked = !newPicture.liked;
    newPictures[index] = newPicture;
    setPictures(newPictures);
    return;
  }

  return (
    <div>
      <TopBar />
      {loading ? (
        <Loading />
      ) : (
        <div className="Posts">
          {pictures.map(
            (picture, index) =>
              picture.media_type === "image" && (
                <Post
                  key={picture.url}
                  picture={picture}
                  onLike={() => handleLike(index)}
                />
              )
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
