import React, { useCallback, useEffect, useRef, useState } from "react";
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
  const startDate = formatDate(new Date(new Date().getTime() - daysToMs(10)));

  useEffect(() => {
    getAPOD(startDate, endDate).then((data) => {
      setPictures(data.reverse());
      setLoading(false);
    });
  }, []);

  const observer = useRef<any>();
  const checkpoint = useCallback((post) => {
    if (loading) {
      return;
    }
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log(test);
      }
    });
  }, []);

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
              picture.media_type === "image" &&
              (index === pictures.length - 5 ? (
                <div ref={checkpoint}>
                  <Post
                    key={picture.url}
                    picture={picture}
                    onLike={() => handleLike(index)}
                  />
                </div>
              ) : (
                <Post
                  key={picture.url}
                  picture={picture}
                  onLike={() => handleLike(index)}
                />
              ))
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
