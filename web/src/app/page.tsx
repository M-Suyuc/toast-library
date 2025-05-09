"use client";

import { toast } from "ms-ui-toast";

export default function Home() {
  const handleClick = () => {
    toast({
      title: "oh! Something went wrong",
      description: "there was a problem with your request",
      options: { type: "SUCCESS", duration: 3000 },
    });
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <button onClick={handleClick}>Mostrar Toast</button>
    </div>
  );
}
