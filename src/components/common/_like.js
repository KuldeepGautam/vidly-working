import React, { useState } from "react";

function Likes() {
  const [isLiked, setIsLiked] = useState(false);
  //   return "ABCD";

  return (
    <span>
      <i
        className={isLiked ? "fas fa-heart" : "far fa-heart"}
        onClick={() => {
          setIsLiked((prev) => !prev);
        }}
      />
    </span>
  );
}

export default Likes;
