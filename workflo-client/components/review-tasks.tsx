export type Reviewdata = {
    title: string;
    content: string;
    priority?: "Low" | "Medium" | "Urgent";
    deadline?: string;
    time: string;
  };
  
  export const review = [
    {
      title: "Integrate Cloud Storage",
      content:
        "Enable cloud storage for note backup and synchronization.",
      priority: "Urgent",
      deadline: "2024-08-15",
      time: "2 days ago",
    }
  ];
  