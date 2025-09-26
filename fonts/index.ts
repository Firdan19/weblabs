// fonts/index.ts
import { Playfair_Display, Inter, DM_Sans } from "next/font/google";

export const playfair = Playfair_Display({ subsets:["latin"], weight:["400","500","600","700"], variable:"--font-playfair", display:"swap" });
export const inter    = Inter({ subsets:["latin"], weight:["400","500","600","700"], variable:"--font-inter", display:"swap" });
export const dmsans   = DM_Sans({ subsets:["latin"], weight:["400","500","600","700"], variable:"--font-dmsans", display:"swap" });
