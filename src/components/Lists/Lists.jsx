import React from "react";
import List from "../List/List";

const Lists = ({ lists, onDelete, onEdit }) => {
  return (
    <>
      {lists.map((list) => (
        <List key={list.id} list={list} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </>
  );
};

export default Lists;
