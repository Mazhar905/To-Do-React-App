import "./App.css";
import Button from "./components/Button";
import Heading from "./components/Heading";
import Items from "./components/Items";
import React from "react";
import { useState } from "react";
import Forminput from "./components/Forminput";

let data = localStorage.getItem("list")
  ? JSON.parse(localStorage.getItem("list"))
  : [];
function Main() {
  const myDate = new Date();
  const [list, setList] = useState(data);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [itemId, setItemId] = useState(myDate);
  const [showForm, setShowForm] = useState(false);
  const [update, setUpdate] = useState(false);
  const [getData, setGetData] = useState(null);
  const inputArr = [
    {
      id: 1,
      type: "text",
      name: "name",
      value: name,
      placeholder: "Enter Name",
      onChange: setName,
    },
    {
      id: 2,
      type: "text",
      name: "title",
      value: title,
      placeholder: "Enter Title",
      onChange: setTitle,
    },
    {
      id: 3,
      type: "hidden",
      name: "id",
      value: itemId,
      onChange: setItemId,
    },
  ];
  const addItem = (e) => {
    let newEle = {
      id: myDate,
      itemId: myDate,
      name: name,
      title: title ? title : "",
      isCompleted: false,
    };
    let newArr = [...list, newEle];
    setList(newArr);
    setTitle("");
    setName("");
    setItemId("");
    setShowForm(false);
    localStorage.setItem("list", JSON.stringify(newArr));
  };
  const removeEle = (id) => {
    let updated = list.filter((x) => x.id !== id);
    setList(updated);
    localStorage.removeItem("list");
    localStorage.setItem("list", JSON.stringify(updated));
  };
  const makeComplete = (x) => {
    let updated = list.map((ele) =>
      ele.id === x ? { ...ele, isCompleted: true } : ele
    );
    setList(updated);
    localStorage.removeItem("list");
    localStorage.setItem("list", JSON.stringify(updated));
  };
  const editItem = (x) => {
    setName(x.name);
    setTitle(x.title);
    setItemId(x.itemId);
    setUpdate(true);
    setShowForm(true);
  };
  const updateItem = () => {
    let updated = list.map((ele) =>
      ele.id === itemId ? { ...ele, title: title, name: name } : ele
    );
    setTitle("");
    setName("");
    setItemId("");
    setUpdate(false);
    setShowForm(false);
    setList(updated);
    localStorage.removeItem("list");
    localStorage.setItem("list", JSON.stringify(updated));
  };
  const formData = () => {
    setGetData(localStorage.getItem("list"));
    console.log(getData);
  };
  const storeData = () => {
    localStorage.setItem("list", JSON.stringify(list));
    setGetData(localStorage.getItem("list"));
  };
  return (
    <div className="main-content">
      <Heading
        title={"My first app with mazhar"}
        para={
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate."
        }
      />
      {list.map((x) => (
        <Items
          clickMe={() => editItem(x)}
          key={x.id}
          title={x.name}
          desc={x.title}
          removeEle={() => removeEle(x.id)}
          makeComplete={() => makeComplete(x.id)}
          isComplete={x.isCompleted}
        />
      ))}

      {!showForm ? (
        <button onClick={() => setShowForm(true)}>Add New Element</button>
      ) : (
        <Forminput
          inputArr={inputArr}
          addEle={update ? updateItem : addItem}
          btnTxt={update ? "Update" : "Add"}
        />
      )}
    </div>
  );
}

export default Main;
