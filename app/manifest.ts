import type { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Enzo Spagnolli | Senior Software Engineer",
    short_name: "Enzo Spagnolli",
    description:
      "Portfolio of Enzo Spagnolli, a Senior Software Engineer specializing in scalable web applications.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#7c3aed",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  }
}
