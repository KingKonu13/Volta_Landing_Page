import { Newsreader, Space_Grotesk } from "next/font/google";

// Editorial serif display — distinct from the default Fraunces nameplate.
export const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

// Grotesque body — distinct from the default Inter.
export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});
