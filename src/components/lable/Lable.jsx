import React from "react";
import "./lable.css";

const Lable = ({
  color,
  head,
  para,
  height,
  bg,
  borderBottom,
  img,
  video,
  reverse,
  wrap,
}) => {
  return (
    <div
      className="lable-main"
      style={{
        background: bg,
        height: height,
        borderBottom: borderBottom || "1px solid rgba(128, 128, 128, 0.4)",
        flexDirection: reverse || "row",
        flexWrap: wrap || "nowrap",
      }}
    >
      <div className="lable-text">
        <h1 style={{ color }}>{head}</h1>
        <p style={{ color }}>{para}</p>
      </div>

      <div className={`lable-media ${video ? "has-video" : ""}`}>
        <img src={img} alt="label" className="label-img" />
        {video && (
          <video
            className="label-video"
            src={video}
            autoPlay
            playsInline
            loop
            muted
          />
        )}
      </div>
    </div>
  );
};

export default Lable;
