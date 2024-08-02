export type Progressdata = {
  title: string;
  content: string;
  priority?: "Low" | "Medium" | "Urgent";
  deadline?: string;
  time: string;
};

export const progress = [
  {
    title: "Design Home Page UI",
    content:
      "Develop and integrate user authentication using email and password.",
    priority: "Medium",
    deadline: "2024-08-15",
    time: "1 hr ago",
  },
  {
    title: "Conduct User Feedback Survey",
    content:
      "Collect and analyze user feedback to improve app features.",
    priority: "Low",
    deadline: "2024-08-15",
    time: "3 hr ago",
  },
];
