"use client";

import { toast } from "ms-ui-toast";

export default function Home() {
  return (
    <div className="container">
      <button
        onClick={() =>
          toast.default({
            title: "Well done",
            description: "Thanks for your support",
          })
        }
      >
        DEFAULT
      </button>

      <button
        onClick={() =>
          toast.success({
            title: "Done",
            description: "Your request was successfully",
          })
        }
      >
        SUCCESS
      </button>

      <button
        onClick={() =>
          toast.warning({
            title: "Heads up!",
            description: "This action may have effects",
          })
        }
      >
        WARNING
      </button>

      <button
        onClick={() =>
          toast.error({
            title: "oh! Something went wrong",
            description: "there was a problem",
          })
        }
      >
        ERROR
      </button>

      <button
        onClick={() =>
          toast.info({
            title: "Just so you know",
            description: "Here's some useful information",
          })
        }
      >
        INFO
      </button>
    </div>
  );
}
