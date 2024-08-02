export type todosdata = {
  title: string;
  content: string;
  priority?: "Low" | "Medium" | "Urgent";
  deadline?: string;
  time: string;
};

export const todos = [
  {
    title: "Implement User Authentication",
    content:
      "Develop and integrate user authentication using email and password.",
    priority: "Urgent",
    deadline: "2024-08-15",
    time: "1 hr ago",
  },
];
