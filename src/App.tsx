import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import TodoItem from "./components/TodoItem";

const App = () => {
  const [todos, setTodos] = useState<TodoItemType[]>([]);

  const [title, setTitle] = useState<string>("");

  const todoHandler = () => {
    const newTodo: TodoItemType = {
      title,
      isCompleted: false,
      id: String(Math.floor(Math.random() * 100)),
    };

    setTodos((prev: TodoItemType[]) => [...prev, newTodo]);
    setTitle("");
  };

  const completeHandler = (id: TodoItemType["id"]): void => {
    alert(id);
  };

  const deleteHandler = (id: TodoItemType["id"]): void => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const editTodoHandler = (id: TodoItemType["id"]): void => {
    alert(`${id} is going for edit`);
    const findTodo = todos.find((todo) => todo.id === id);
    console.log(findTodo);

    setTitle(findTodo.title);
  };

  return (
    <Container maxWidth="sm" sx={{ height: "100vh" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography>Todo App</Typography>
        </Toolbar>
      </AppBar>
      <Stack height={"80%"} direction={"column"} spacing={"1rem"} p={"1rem"}>
        {todos.map((i) => (
          <TodoItem
            completeHandler={() => completeHandler(i.id)}
            deleteHandler={() => deleteHandler(i.id)}
            editTodoHandler={() => editTodoHandler(i.id)}
            key={i.id}
            todo={i}
          />
        ))}
      </Stack>
      <TextField
        value={title}
        fullWidth
        label={"New Task"}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && title !== "") todoHandler();
        }}
      />
      <Button
        sx={{
          margin: "1rem 0",
        }}
        fullWidth
        variant="contained"
        onClick={todoHandler}
        disabled={title === ""}
      >
        ADD
      </Button>
    </Container>
  );
};

export default App;
