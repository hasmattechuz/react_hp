import CurrencyConverter from "~/pages/CurrencyConverter";
import type { Route } from "./+types/home"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Currency Converter" },
    { name: "description", content: "Converter APP" },
  ];
}

export default function Converter() {
  return <CurrencyConverter />;
}
