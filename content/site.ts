export const profile = {
  name: "Enda Zhao",
  role: "PhD Student in Computer Science",
  institution: "Purdue University",
  location: "West Lafayette, Indiana",
  email: "zhao1462@purdue.edu",
  avatar: "https://avatars.githubusercontent.com/u/92596040?v=4",
  shortBio:
    "My research explores inference-time methods for more effective, efficient, and grounded reasoning in large language models.",
  links: {
    github: "https://github.com/endazhao",
    acl: "https://aclanthology.org/people/enda-zhao/unverified/",
    purdue: "https://www.cs.purdue.edu/people/graduate-students/zhao1462.html",
  },
} as const;

export const researchThemes = [
  {
    title: "LLM Reasoning",
    description: "Understanding how models use intermediate steps, maintain context, and arrive at reliable conclusions.",
  },
  {
    title: "Inference-time Search",
    description: "Designing efficient search and selection strategies that improve reasoning without task-specific reward models.",
  },
  {
    title: "Grounded Generation",
    description: "Helping models reuse relevant evidence, reduce redundant steps, and produce more concise reasoning traces.",
  },
] as const;
