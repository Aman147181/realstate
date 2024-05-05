import { Spinner } from "@nextui-org/react";
import React from "react";

const loading = () => {
  return (
    <div className="h-screen flex items-center justify-center w-full ">
      <Spinner />
    </div>
  );
};

export default loading;
