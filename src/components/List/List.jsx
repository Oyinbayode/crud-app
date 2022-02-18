import React from "react";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import styled from "styled-components";

const List = ({ list, onDelete, onEdit }) => {
  return (
    <div>
      <ListContainer>
        <div>
          <ListTitle>
            <Span>Title:</Span> {list.text}
          </ListTitle>
          <ListBody>
            <Span>Date of Completion:</Span>
          </ListBody>
        </div>
        <div>
          <p>
            <FaTimesIcon onClick={() => onDelete(list.id)} />
          </p>
          <p>
            <FaPencilAltIcon onClick={() => onEdit(list.id)} />
          </p>
        </div>
      </ListContainer>
    </div>
  );
};

const ListContainer = styled.div`
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
`;

const ListTitle = styled.p``;

const ListBody = styled.p``;

const Span = styled.span`
  font-weight: bold;
`;

const FaTimesIcon = styled(FaTimes)`
  color: red;
  cursor: pointer;
`;

const FaPencilAltIcon = styled(FaPencilAlt)`
  color: blue;
  cursor: pointer;
`;

export default List;
