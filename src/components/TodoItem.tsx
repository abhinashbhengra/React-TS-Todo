import { Button, Checkbox, Paper, Stack, Typography } from "@mui/material";
import React from "react";

type PropsType = {
  todo: TodoItemType;
  deleteHandler: (id: TodoItemType["id"]) => void;
  completeHandler: (id: TodoItemType["id"]) => void;
  editTodoHandler: (id: TodoItemType["id"]) => void;
};

const TodoItem = ({
  todo,
  deleteHandler,
  completeHandler,
  editTodoHandler,
}: PropsType) => {
  return (
    <Paper
      sx={{
        padding: "1rem",
      }}
    >
      <Stack direction={"row"} alignItems={"center"}>
        <Typography marginRight={"auto"}>{todo.title}</Typography>
        <Checkbox
          checked={todo.isCompleted}
          onChange={() => completeHandler(todo.id)}
        />
        <Button onClick={() => editTodoHandler(todo.id)}>Edit</Button>
        <Button onClick={() => deleteHandler(todo.id)}>Delete</Button>
      </Stack>
    </Paper>
  );
};

export default TodoItem;
