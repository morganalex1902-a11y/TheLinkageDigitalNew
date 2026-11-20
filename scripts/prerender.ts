import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { App } from "../client/App";
import { articles, services } from "../client/siteContent";

const routes = [
  "/",
  "/about",
  "/services",
  ...services.map(({ slug }) => `/services/${slug}`),
  "/portfolio",
  "/blog",
  ...articles.map(({ slug }) => `/blog/${slug}`),
  "/contact",
  "/terms-and-conditions",
  "/refund-policy",
  "/cancellation-policy",
  "/privacy-policy",
  "/testimonials",
];

const outputDirectory = path.resolve("dist/spa");
const template = await readFile(path.join(outputDirectory, "index.html"), "utf8");

for (const route of routes) {
  const markup = renderToString(
    React.createElement(
      StaticRouter,
      { location: route },
      React.createElement(App),
    ),
  );
  const html = template.replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
  const destination = route === "/"
    ? path.join(outputDirectory, "index.html")
    : path.join(outputDirectory, route.slice(1), "index.html");

  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, html);
}

console.log(`Prerendered ${routes.length} routes.`);
