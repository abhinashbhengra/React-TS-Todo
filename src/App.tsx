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
  const [todos, setTodos] = useState<TodoItemType[]>([
    {
      title: "learn typescript",
      isCompleted: false,
      id: "fsdflsadkfjlakf",
    },
    {
      title: "learn rust",
      isCompleted: false,
      id: "fsdflssdfdsfadkfjlakf",
    },
  ]);

  const completeHandler = (id: TodoItemType["id"]): void => {
    alert(id);
  };

  const deleteHandler = (id: TodoItemType["id"]): void => {
    alert(id);
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
            key={i.id}
            todo={i}
          />
        ))}
      </Stack>
      <TextField fullWidth label={"New Task"} />
      <Button
        sx={{
          margin: "1rem 0",
        }}
        fullWidth
        variant="contained"
      >
        ADD
      </Button>
    </Container>
  );
};

export default App;
