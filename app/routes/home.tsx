import type { Route } from "./+types/home";
import HomePage from "~/pages/page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home" },
    { name: "description", content: "Welcome to Hp React" },
  ];
}

export default function Home() {
  return <><HomePage /></>;
}
