import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import AddList from "./components/AddList/AddList";
import Header from "./components/Header/Header";
import Lists from "./components/Lists/Lists";
import { v4 as uuid } from "uuid";
import axios from "axios";

function App() {
  const [lists, setLists] = useState([]);
  const [showAddList, setShowAddList] = useState(false);
  const [loading, setLoading] = useState(true);

  // Pre-loader
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  // Fetch Data from local storage
  const getLists = JSON.parse(localStorage.getItem("listAdded"));
  useEffect(() => {
    if (getLists === null) {
      setLists([]);
    } else {
      setLists(getLists);
    }
  }, [getLists]);

  // Add List
  const addList = (list) => {
    const userId = uuid();
    const newList = { userId, ...list };
    setLists([...lists, newList]);

    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        ...newList,
      })
      .then((res) => console.log(res));

    Swal.fire({
      icon: "success",
      title: "Successful",
      text: "You have successfully added a new List!",
    });
    localStorage.setItem("listAdded", JSON.stringify([...lists, newList]));
  };

  // Delete List
  const deleteList = (id) => {
    const deleteList = lists.filter((task) => task.id !== id);
    setLists(deleteList);
    Swal.fire({
      icon: "success",
      title: "Awwwn...",
      text: "You have successfully deleted the List!",
    });
    localStorage.setItem("listAdded", JSON.stringify(deleteList));
  };

  // Edit List
  const editList = (id) => {
    const Title = prompt("Title");
    const Body = prompt("Body");
    let data = JSON.parse(localStorage.getItem("listAdded"));
    const myData = data.map((x) => {
      if (x.id === id) {
        return {
          ...x,
          Title,
          Body,
          userId: uuid(),
        };
      }
      return x;
    });

    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => console.log(res));

    Swal.fire({
      icon: "success",
      title: "Yay...",
      text: "You have successfully edited an existing task!",
    });
    localStorage.setItem("listAdded", JSON.stringify(myData));
    window.location.reload();
  };

  return (
    <>
      {loading ? (
        <div className="spinnerContainer">
          <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container">
          {/* App Header */}
          <Header
            changeTextAndColor={showAddList}
            showForm={() => setShowAddList(!showAddList)}
          />
          {/* Revealing the Add List Form */}
          {showAddList && <AddList onSave={addList} />}

          {/* Displaying Lists */}
          {lists.length > 0 ? (
            <Lists onDelete={deleteList} onEdit={editList} lists={lists} />
          ) : (
            "No List Found!"
          )}
        </div>
      )}
    </>
  );
}

export default App;
