import { index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), // Route: /
  {
    path: "/color-platter/:userId?",
    file: "routes/colorplatter.tsx",
    loader: () => null, // ✅ Required even if empty
  },
  {
    path: "/converter/",
    file: "routes/converter.tsx",
    loader: () => null, // ✅ Required even if empty
  },
  {
    path: "/password",
    file: "routes/password.tsx",
    loader: () => null, // ✅ Required even if empty
  },
];
