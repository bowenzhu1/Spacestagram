import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import { APOD, getAPOD } from "../helpers/getAPOD";
import { formatDate } from "../helpers/formatDate";
import { Post } from "../components/Post";
import TopBar from "../components/TopBar";
import InfiniteScroll from "react-infinite-scroll-component";
import { daysToMs } from "../helpers/daysToMs";
import "./Home.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [pictures, setPictures] = useState<Array<APOD>>([]);
  const [offset, setOffset] = useState(10);
  const endDate = new Date();
  const startDate = new Date(new Date().getTime() - daysToMs(offset));

  useEffect(() => {
    getAPOD(formatDate(startDate), formatDate(endDate)).then((data) => {
      setPictures(data.reverse());
      setLoading(false);
    });
  }, []);

  function handleLoadMore() {
    const endDateStr = formatDate(
      new Date(endDate.getTime() - daysToMs(offset + 1))
    );
    const startDateStr = formatDate(
      new Date(endDate.getTime() - daysToMs(offset + 10))
    );
    getAPOD(startDateStr, endDateStr).then((data) => {
      setPictures((pictures) => pictures.concat(data.reverse()));
      setOffset(offset + 10);
    });
    return;
  }

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
          <InfiniteScroll
            dataLength={pictures.length}
            next={handleLoadMore}
            hasMore={true}
            loader={<h4 style={{ textAlign: "center" }}>Loading...</h4>}
          >
            {pictures.map(
              (picture, index) =>
                picture.media_type === "image" && (
                  <Post
                    key={index + picture.url}
                    picture={picture}
                    onLike={() => handleLike(index)}
                  />
                )
            )}
          </InfiniteScroll>
        </div>
      )}
    </div>
  );
}

export default Home;
