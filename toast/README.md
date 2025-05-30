# 🥪 m-toast

> [!WARNING]
> 🚧 Project State: In Development.
_(Not ready for production! Expect bugs and missing features.)_

A lightweight, customizable toast notification library for modern web applications.

## 🚀 Features

- ⚡ Super fast and easy to use
- 🛠️ Simple API for showing/hiding toasts
  <!-- - 🎨 Fully customizable styles -->
  <!-- - 📦 Zero dependencies -->
  <!-- - 📱 Responsive and accessible -->

## 💡 Inspiration

m-toast was inspired by react-hot-toast and @pheralb/toast

## 📦 Installation library

```bash
npm install ms-ui-toast
```

## 🛠️ Usage

1. Add the toast provider:

```js
// 📃 root.tsx

import { Toaster } from "ms-ui-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Toaster />
  </React.StrictMode>,
);

```

2.Usage

```js
// 📃 index.tsx
import { toast } from "ms-ui-toast";

export default function Toast() {
  return (
    <>
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
    </>
  );
}
```

## 🎛️ Customization

Easily customize the delay and behavior of your toasts via options.

```js
     <button
        onClick={() =>
          toast.default({
            title: "Well done",
            description: "Thanks for your support",
            options: { duration: 5000 },
          })
        }
      >
        DEFAULT
      </button>
```
<!--
## 📚 Documentation

See the [full documentation](./docs) for advanced usage and API details. -->

## 📚 Stack

- [**Website**](https://github.com/M-Suyuc/toast-library/tree/main/web): Next.js 15.
- [**Library**](https://github.com/M-Suyuc/toast-library/tree/main/toast): React 19 with tsup.

## 🤝 Contributing

Contributions are welcome! Please open issues or pull requests.

1. [Click here to fork](https://github.com/M-Suyuc/toast-library/fork) the repository.

## 📄 License

MIT License

---

Made with ❤️ by Marlon
