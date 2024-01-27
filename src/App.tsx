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

  const completeHandler = (): void => {};

  const deleteHandler = (id: TodoItemType["id"]): void => {};

  return (
    <Container maxWidth="sm" sx={{ height: "100vh" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography>Todo App</Typography>
        </Toolbar>
      </AppBar>
      <TodoItem todo={{}} />
      <Stack height={"80%"} direction={"column"} spacing={"1rem"} p={"1rem"}>
        {todos.map((i) => (
          <TodoItem key={i.id} todo={i} />
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
