import type { Route } from "./+types/home"
import Colorplatter from "~/pages/colorplatter";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "converter" },
    { name: "description", content: "Converter APP" },
  ];
}

export default function ColorPlatter() {
  return <Colorplatter />;
}
