export type contentdata = {
    image: {
        src: string;
    };
    content: string;
}


export const content:contentdata[] = [
    {
        image: {
            src: "/home.svg",
          },
        content: "Home"
    },
    {
        image: {
            src: "/boards.svg",
          },
        content: "Boards"
    },
    {
        image: {
            src: "/settings.svg",
          },
        content: "Settings"
    },
    {
        image: {
            src: "/teams.svg",
          },
        content: "Teams"
    },
    {
        image: {
            src: "/analytics.svg",
          },
        content: "Analytics"
    }

    
]