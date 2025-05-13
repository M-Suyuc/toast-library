"use client";

import { toast } from "ms-ui-toast";

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
      <button
        onClick={() =>
          handleClick(
            "SUCCESS",
            "Done",
            "Your request was completed successfully"
          )
        }
      >
        SUCCESS
      </button>

      <button
        onClick={() =>
          handleClick(
            "WARNING",
            "Heads up!",
            "This action may have unexpected effects"
          )
        }
      >
        WARNING
      </button>

      <button
        onClick={() =>
          handleClick(
            "ERROR",
            "oh! Something went wrong",
            "there was a problem with your request"
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
            "Here’s some useful information for you"
          )
        }
      >
        INFO
      </button>
    </div>
  );
}
