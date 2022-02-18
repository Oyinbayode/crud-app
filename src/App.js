import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import AddList from "./components/AddList/AddList";
import Header from "./components/Header/Header";
import Lists from "./components/Lists/Lists";

function App() {
  const [lists, setLists] = useState([]);
  const [showAddList, setShowAddList] = useState(false);

  // Add List
  const addList = (list) => {
    const id = Math.random() * 1000;
    const newList = { id, ...list };
    setLists([...lists, newList]);
    Swal.fire({
      icon: "success",
      title: "Successful",
      text: "You have successfully added a new List!",
    });
  };

  return (
    <>
      <div className="container">
        {/* App Header */}
        <Header
          changeTextAndColor={showAddList}
          showForm={() => setShowAddList(!showAddList)}
        />
        {/* Revealing the Add List Form */}
        {showAddList && <AddList onSave={addList} />}

        {/* Displaying Lists */}
        {lists.length > 0 ? <Lists lists={lists} /> : "No List Found!"}
      </div>
    </>
  );
}

export default App;
