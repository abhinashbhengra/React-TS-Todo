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
    const updatedTodos: TodoItemType[] = todos.map((todo) => {
      if (todo.id === id) todo.isCompleted = !todo.isCompleted;
      return todo;
    });

    setTodos(updatedTodos);
  };

  const deleteHandler = (id: TodoItemType["id"]): void => {
    const filteredTodos: TodoItemType[] = todos.filter(
      (todo) => todo.id !== id,
    );
    setTodos(filteredTodos);
  };

  const editTodoHandler = (
    id: TodoItemType["id"],
    newTitle: TodoItemType["title"],
  ): void => {
    console.log(newTitle);

    const updatedTodos: TodoItemType[] = todos.map((todo) => {
      if (todo.id === id) todo.title = newTitle;
      return todo;
    });

    setTodos(updatedTodos);

    console.log(updatedTodos);
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
            completeHandler={completeHandler}
            deleteHandler={deleteHandler}
            editTodoHandler={editTodoHandler}
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
