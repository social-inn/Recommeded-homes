import React from 'react';
import StarRating from './StarRating';

const ListEntry = props => (
  <a href={`/?id=${props.entry.id}`} className="individualPic">
    <div>
      <img className="img" src={props.entry.image_url}/>
      <p className="location">{props.entry.house_type} · {props.entry.city}</p>
      <p className="description">{props.entry.home_description}</p>
      <p className="price">{props.entry.price} per night</p>
      <StarRating rating={props.entry.stars} />
      <span className="votes">{props.entry.num_reviews}</span>
    </div>
  </a>
);

export default ListEntry;