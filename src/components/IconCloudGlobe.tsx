import React, { useEffect, useState } from "react";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "postgresql",
  "vercel",
  "docker",
  "git",
  "github",
  "figma",
  "python",
  "django",
  "php",
  "laravel",
  "mysql",
  "mongodb",
  "supabase",
  "bootstrap",
  "tailwindcss",
];

const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native" as const,
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

export function IconCloudGlobe() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchSimpleIcons({ slugs }).then(setData);
  }, []);

  if (!data) {
    return <div>Cargando...</div>;
  }

  const renderedIcons = Object.values(data.simpleIcons).map((icon: any) =>
    renderSimpleIcon({
      icon,
      size: 42,
      aProps: {
        href: undefined,
        target: undefined,
        rel: undefined,
        onClick: (e: any) => e.preventDefault(),
      },
    }),
  );

  return <Cloud {...cloudProps}>{renderedIcons}</Cloud>;
}
