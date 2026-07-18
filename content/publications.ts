export type Publication = {
  year: number;
  venue: string;
  title: string;
  authors: string[];
  note?: string;
  links: { label: string; href: string }[];
};

export const publications: Publication[] = [
  {
    year: 2026,
    venue: "Integration, the VLSI Journal · Vol. 107",
    title: "Machine-learning-driven prediction of thin film parameters for optimizing the dielectric deposition in semiconductor fabrication",
    authors: ["Hao Wen", "Enda Zhao", "Qiyue Zhang", "Ruofei Xiang", "Wenjian Yu"],
    note: "Equal contribution",
    links: [
      { label: "Paper", href: "https://numbda.cs.tsinghua.edu.cn/papers/integration26.pdf" },
      { label: "DOI", href: "https://doi.org/10.1016/j.vlsi.2025.102617" },
    ],
  },
  {
    year: 2025,
    venue: "EMNLP 2025 · Main Conference",
    title: "Stepwise Informativeness Search for Improving LLM Reasoning",
    authors: ["Siyuan Wang", "Enda Zhao", "Xiang Ren"],
    note: "Equal contribution",
    links: [
      { label: "Paper", href: "https://aclanthology.org/2025.emnlp-main.1285/" },
      { label: "PDF", href: "https://aclanthology.org/2025.emnlp-main.1285.pdf" },
      { label: "Code", href: "https://github.com/SiyuanWang/Neural-Image-Search" },
    ],
  },
];
