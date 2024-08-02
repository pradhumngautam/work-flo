export type Finisheddata = {
    title: string;
    content: string;
    priority?: "Low" | "Medium" | "Urgent";
    deadline?: string;
    time: string;
  };
  
  export const finished = [
    {
      title: "Test Cross-browser Compatibility",
      content:
        "Ensure the app works seamlessly across different web browsers.",
      priority: "Medium",
      deadline: "2024-07-15",
      time: "4 days ago",
    }
  ];
  