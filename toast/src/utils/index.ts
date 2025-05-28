export const cn = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

export const generateId = () => {
  const id = Math.random().toString(36).substring(2, 9);
  return id;
};
