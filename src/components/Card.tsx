import React from "react";

interface ICardProps {
  name: string;
  email: string;
  id: string;
}
const Card = ({ name, email, id }: ICardProps) => {
  return (
    <div className="grow bg-light-green br4 pa2 ma2 dib bw2 shadow-5">
      <img alt="robots" src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
