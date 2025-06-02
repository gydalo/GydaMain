import React, { useState } from "react";

function MediaGallery({ media }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const isVideo = (item) => item.type === "video";

  return (
    <div className="media-gallery">
      <div className="media-main">
        {isVideo(media[selectedIndex]) ? (
          <video
            src={media[selectedIndex].url}
            controls
            className="media-main-content"
          />
        ) : (
          <img
            src={media[selectedIndex].url}
            alt={media[selectedIndex].alt || "Media"}
            className="media-main-content"
          />
        )}
      </div>
      <div className="media-thumbnails">
        {media.map((item, index) => (
          <div
            key={index}
            className={`media-thumbnail-wrapper ${
              selectedIndex === index ? "active" : ""
            }`}
            onClick={() => setSelectedIndex(index)}
          >
            {isVideo(item) ? (
              <video src={item.url} muted className="media-thumbnail" />
            ) : (
              <img
                src={item.url}
                alt={item.alt || "Thumbnail"}
                className="media-thumbnail"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MediaGallery;
