"use client";

import { toast } from "ms-ui-toast";
import Toast from "../../../toast/src/Toast";

export type TypeToast = "SUCCESS" | "ERROR" | "WARNING" | "INFO";

export default function Home() {
  const handleClick = (type: TypeToast, title: string, description: string) => {
    toast({
      title,
      description,
      options: { type },
    });
  };

  return (
    <div className="bg-slate-900 w-full h-screen flex flex-col [&>button]:bg-white/90 [&>button]:w-48 [&>button]:p-4 justify-center items-center gap-5">
      <Toast
        title={"hello"}
        description={"Hi over there Hi over there"}
        position={"top-right"}
        id={1}
      />

      <button
        onClick={() =>
          toast({
            title: "Done",
            description: "Your request was successfully",
          })
        }
      >
        SUCCESS
      </button>

      <button
        onClick={() =>
          handleClick("WARNING", "Heads up!", "This action may have effects")
        }
      >
        WARNING
      </button>

      <button
        onClick={() =>
          handleClick(
            "ERROR",
            "oh! Something went wrong",
            "there was a problem "
          )
        }
      >
        ERROR
      </button>

      <button
        onClick={() =>
          handleClick(
            "INFO",
            "Just so you know",
            "Here’s some useful information"
          )
        }
      >
        INFO
      </button>
    </div>
  );
}
