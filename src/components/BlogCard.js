import React from "react";

const BlogCard = ({ item }) => {
  const { serial, image, title, description } = item;
  return (
    <div className="card">
      <img src={image} className="card__image" />
      <div className="card__content">
        <h5 className="card__content__serial">{serial}</h5>
        <p className="card__content__title">{title}</p>
        <p className="card__content__description">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
