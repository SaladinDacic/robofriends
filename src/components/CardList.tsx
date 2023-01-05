import React from "react";
import Card from "./Card";

interface ICardListProps {
  robots: { id: string; name: string; email: string }[];
}
const CardList = ({ robots }: ICardListProps) => {
  return (
    <div>
      {robots.map((user, i) => {
        return <Card key={i} id={user.id} name={user.name} email={user.email} />;
      })}
    </div>
  );
};

export default CardList;
