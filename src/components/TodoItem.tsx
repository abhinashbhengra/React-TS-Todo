import { Button, Checkbox, Paper, Stack, Typography } from "@mui/material";
import React from "react";

type PropsType = {
  todo: TodoItemType;
};

const TodoItem = ({ todo }: PropsType) => {
  return (
    <Paper
      sx={{
        padding: "1rem",
      }}
    >
      <Stack direction={"row"} alignItems={"center"}>
        <Typography marginRight={"auto"}>{todo.title}</Typography>
        <Checkbox />
        <Button>Edit</Button>
        <Button>Delete</Button>
      </Stack>
    </Paper>
  );
};

export default TodoItem;
