import React, { Component, useState } from "react";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { v4 } from "uuid";
import DeleteDialog from "./components/DeleteDialog";
import EditDialog from "./components/EditDialog";

function App() {
  console.log("app render");
  const [inputValue, setInputValue] = useState("");
  const [inputEditValue, setInputEditValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [itemToEdit, setItemToEdit] = useState(null);
  const [showEditText, setShowEditText] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleEditChange = (e) => {
    setInputEditValue(e.target.value);
  };

  const handleAdd = () => {
    if (!inputValue.trim()) {
      alert("Enter valid value");
      return;
    }
    setTodos([...todos, { title: inputValue, id: v4() }]);
    setInputValue("");
  };

  const onRemoveClick = (itemToDelete) => {
    setItemToDelete(itemToDelete);
  };

  const handleDeletDialogClose = () => {
    setItemToDelete(null);
  };

  const handleDelete = () => {
    setTodos(todos.filter((todo) => todo.id !== itemToDelete.id));
    handleDeletDialogClose();
  };

  const onEditClick = (itemToEdit) => {
    setItemToEdit(itemToEdit);
  };

  const handleEditDialogClose = () => {
    setItemToEdit(null);
  };

  const openEditText = (showEditText) => {
    setShowEditText(showEditText);
  };

  const updatedTodos = (id) => {
    if (!inputEditValue.trim()) {
      alert("Enter valid value");
      return;
    }
    const todo = todos.find((todo) => todo.id === id);
    if (todo) todo.title = inputEditValue;
    setShowEditText(false);
    setItemToEdit(null);
    setTodos(todos);
  };

  return (
    <>
      <div>
        <TextField
          id="outlined-basic"
          onChange={handleChange}
          value={inputValue}
          label=""
          variant="outlined"
        />
        <Button onClick={handleAdd} variant="outlined">
          Add
        </Button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <Button onClick={() => onRemoveClick(todo)}>remove</Button>
            <Button onClick={() => onEditClick(todo)}>Edit</Button>
          </li>
        ))}
      </ul>

      {itemToDelete && (
        <DeleteDialog
          title={itemToDelete.title}
          onClose={handleDeletDialogClose}
          onDelete={handleDelete}
        />
      )}

      {itemToEdit && (
        <EditDialog
          content={
            <DialogContentText id="alert-dialog-description">
              {`Are you sure you want to edit ${itemToEdit.title}?`}
            </DialogContentText>
          }
          onClose={handleEditDialogClose}
          onEdit={() => openEditText(true)}
        />
      )}

      {showEditText && (
        <EditDialog
          content={
            <TextField
              id="outlined-basic"
              onChange={handleEditChange}
              value={inputEditValue}
              label={itemToEdit.title}
              variant="outlined"
            />
          }
          onClose={() => openEditText(false)}
          onEdit={() => updatedTodos(itemToEdit.id)}
        />
      )}
    </>
  );
}
export default App;
