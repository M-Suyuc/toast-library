"use client";

import { toast } from "ms-ui-toast";
import Toast from "../../../toast/src/Toast";

export default function Home() {
  return (
    <div className="bg-slate-900 w-full h-screen flex flex-col [&>button]:bg-white [&>button]:cursor-pointer [&>button]:w-48 [&>button]:p-4 justify-center items-center gap-5">
      <Toast
        description={"Hi over there Hi over there"}
        position={"top-right"}
        variant="DEFAULT"
      />

      <Toast
        title={"hello"}
        description={"Hi over there Hi over there"}
        position={"top-left"}
        variant="SUCCESS"
      />

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
            // title: "Done",
            description: "Your request was successfully",
          })
        }
      >
        SUCCESS
      </button>

      <button
        onClick={() =>
          toast.warning({
            // title: "Heads up!",
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
