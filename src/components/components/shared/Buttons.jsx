import React from 'react'
import { Button } from "@mui/material";

const Buttons = ({id, changeSmth}) => {
    return (
      <>
        <Button
          disabled={id === 1}
          onClick={() => changeSmth((prev) => prev - 1)}
        >
          Prev
        </Button>
        <Button
          onClick={() => changeSmth((prev) => prev + 1)}
        >
          Next
        </Button>
      </>
    );
}

export {Buttons}