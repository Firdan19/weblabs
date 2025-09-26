export type Opening = {
  id: string;
  role: string;
  type: "fulltime" | "parttime" | "intern" | "freelance" | "partnership";
  location: "remote" | "onsite" | "hybrid";
  summary: string;
  href?: string; // link ke form / email / Notion
  badge?: string;
};

export const OPENINGS: Opening[] = [
  {
    id: "frontend-next",
    role: "Frontend Engineer (Next.js)",
    type: "freelance",
    location: "remote",
    summary: "Bangun komponen landing page premium (SSR/ISR), performa & aksesibilitas.",
    href: "#",
    badge: "Urgent",
  },
  {
    id: "ui-designer",
    role: "UI Designer",
    type: "parttime",
    location: "remote",
    summary: "Desain formal & clean: layout, tipografi, sistem grid, dan dokumentasi UI.",
    href: "#",
  },
  {
    id: "copywriter",
    role: "Copywriter (Conversion)",
    type: "freelance",
    location: "remote",
    summary: "Meracik headline & CTA berorientasi konversi untuk landing page korporat.",
    href: "#",
  },
  {
    id: "partnership-agency",
    role: "Kemitraan — Agency/Studio",
    type: "partnership",
    location: "remote",
    summary: "Kolaborasi white-label/overflow untuk eksekusi landing page premium.",
    href: "#",
    badge: "Partner",
  },
];
