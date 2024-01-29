import {
  Button,
  Checkbox,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

type PropsType = {
  todo: TodoItemType;
  deleteHandler: (id: TodoItemType["id"]) => void;
  completeHandler: (id: TodoItemType["id"]) => void;
  editTodoHandler: (
    id: TodoItemType["id"],
    newTitle: TodoItemType["title"],
  ) => void;
};

const TodoItem = ({
  todo,
  deleteHandler,
  completeHandler,
  editTodoHandler,
}: PropsType) => {
  const [editActive, setEditActive] = useState<boolean>(false);
  const [textValue, setTextValue] = useState<string>(todo.title);

  return (
    <Paper
      sx={{
        padding: "1rem",
      }}
    >
      <Stack direction={"row"} alignItems={"center"}>
        {editActive ? (
          <TextField
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && textValue !== "") {
                editTodoHandler(todo.id, textValue);
                setEditActive(false);
                console.log(textValue);
              }
            }}
          />
        ) : (
          <Typography marginRight={"auto"}>{todo.title}</Typography>
        )}
        <Checkbox
          checked={todo.isCompleted}
          onChange={() => completeHandler(todo.id)}
        />
        {editActive ? (
          <Button
            onClick={() => {
              editTodoHandler(todo.id, textValue);
              setEditActive(false);
            }}
          >
            Done
          </Button>
        ) : (
          <Button onClick={() => setEditActive((prev) => !prev)}>Edit</Button>
        )}
        <Button onClick={() => deleteHandler(todo.id)}>Delete</Button>
      </Stack>
    </Paper>
  );
};

export default TodoItem;
