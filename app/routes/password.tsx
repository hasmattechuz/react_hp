import PasswordGenerator from "~/pages/PasswordGenerator";
import type { Route } from "./+types/home"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "converter" },
    { name: "description", content: "Converter APP" },
  ];
}

export default function Password() {
  return <PasswordGenerator />;
}
