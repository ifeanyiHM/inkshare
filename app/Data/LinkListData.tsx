import { supabase } from "../lib/supabase";

export const dropDownList = [
  {
    name: "GitHub",
    value: "github",
    src: "/assets/github.svg",
    color: "#1A1A1A",
  },
  {
    name: "Frontend Mentor",
    value: "frontend",
    src: "/assets/frontend.svg",
    color: "#fff",
  },

  {
    name: "Twitter",
    value: "twitter",
    src: "/assets/twitter.svg",
    color: "#43B7E9",
  },
  {
    name: "Linkedin",
    value: "linkedin",
    src: "/assets/linkedin.svg",
    color: "#2D68FF",
  },
  {
    name: "YouTube",
    value: "youtube",
    src: "/assets/youtube.svg",
    color: "#EE3939",
  },
  {
    name: "Facebook",
    value: "facebook",
    src: "/assets/facebook.svg",
    color: "#2442AC",
  },
  {
    name: "Twitch",
    value: "twitch",
    src: "/assets/twitch.svg",
    color: "#EE3FC8",
  },
  {
    name: "Dev.to",
    value: "dev.to",
    src: "/assets/devto.svg",
    color: "#333333",
  },

  {
    name: "Codewars",
    value: "codewars",
    src: "/assets/codewars.svg",
    color: "#8A1A50",
  },

  {
    name: "FreeCodeCamp",
    value: "freecodecamp",
    src: "/assets/freecodecamp.svg",
    color: "#8A1A50",
  },
  {
    name: "Gitlab",
    value: "gitlab",
    src: "/assets/gitlab.svg",
    color: "#EB4925",
  },
  {
    name: "Hashnode",
    value: "hashnode",
    src: "/assets/hashnode.svg",
    color: "#0330D1",
  },
  {
    name: "Stack Overflow",
    value: "stackoverflow",
    src: "/assets/stackoverflow.svg",
    color: "#EC7100",
  },
];

// async function getLinks() {
//   try {
//     let { data: links, error } = await supabase.from("links").select("*");

//     if (error) {
//       console.error("Error fetching links:", error);
//     } else {
//       if (links?.length === 0) {
//         console.log("No links found in the database.");
//       } else {
//         console.log("Links retrieved:", links);
//       }
//     }

//     return links;
//   } catch (err) {
//     console.error("Unexpected error:", err);
//   }
// }

// getLinks();
