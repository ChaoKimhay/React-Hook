import React from "react";
import { Button } from "flowbite-react";

const ButtonComponent = ({ title, onClick }) => {
  return (
    <div>
      <Button onClick={onClick} gradientDuoTone="tealToLime">
        {title}
      </Button>
    </div>
  );
};

export default ButtonComponent;
