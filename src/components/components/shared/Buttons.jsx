import React from 'react'
import { Button, ButtonGroup } from "@mui/material";

const Buttons = ({id, changeSmth}) => {
    return (
      <ButtonGroup sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          disabled={id === 1}
          onClick={() => changeSmth((prev) => prev - 1)}
        >
          Prev
        </Button>
        <Button onClick={() => changeSmth((prev) => prev + 1)}>Next</Button>
      </ButtonGroup>
    );
}

export {Buttons}