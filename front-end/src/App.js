import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { EditIcon, DeleteIcon } from "./icons/icons";

function App() {
  const [list, setList] = useState([]);
  const [checkedCounter, setCheckedCounter] = useState(0);
  const [addTodo, setAddTodo] = useState("");
  const [reload, setReload] = useState(false)

  const Edit = (_id, text) => {
    const inputValue = window.prompt("Edit", text);
    if (!inputValue) return;

    console.log(inputValue);
    //axios.patch()
  };

  const Delete = (_id) => {
    console.log(_id);
    // axios.delete();
  };

  const Add = () => {
    axios.post('http://localhost:5000/add', {
      text: addTodo
    })
    .then(function (response) {
      console.log(response);
      setReload(!reload)
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log(addTodo);
    // axios.post();
  };

  const toggleDone = (_id, isDone) => {
    console.log(_id, isDone);
    axios
      .put(`http://localhost:5000/checked/${_id}`)
      .then((response) => {
        console.log( response)
      })
      .catch((error) => {
        console.log(error);
      });
    //axios.patch()
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/list")
      // .then((response) => response.json())
      .then((res) => {
        console.log(res.data);
        setList(res.data.data);
      });
  }, [reload]); 

  return (
    <div className="container">
      <div className="title">
        <div>My Todo list</div>
        <div className="count">
          {checkedCounter}/{list.length}
        </div>
      </div>
      <div className="list">
        {list.map(({ text, _id, isDone }, index) => (
          <div className="todo" key={index}>
            <div className="checkbox">
              <input
                type={"checkbox"}
                defaultChecked={isDone}
                onChange={() => toggleDone(_id, isDone)}
              />
              <div>{text}</div>
            </div>
            <div className="actions">
              <div onClick={() => Edit(_id, text)}>
                <EditIcon />
              </div>
              <div onClick={() => Delete(_id)}>
                <DeleteIcon />
              </div>
            </div>
          </div>
        ))}
        <input
          placeholder="what's next?"
          onChange={(e) => setAddTodo(e.target.value)}
        />
        <div className="button" onClick={() => Add()}>
          Add task
        </div>
      </div>
    </div>
  );
}

export default App;
