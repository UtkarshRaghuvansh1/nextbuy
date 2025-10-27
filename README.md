# Product Listing Feature

## File Based Routing

- Next.js Routing refers to how pages and navigation are managed inside a Next.js application. It is primarily file-based routing, meaning the structure of your pages/ (or app/ in App Router) directory directly defines the routes of your website.

- app
  - page.tsx=> Home
  - about/page.tsx => /about
  - blog/page.tsx => /blog
  - blog/[id] Page.tsx => /blog/:id (Dynamic routing)
  - layout.js => common layout

## Server Component

- Next.js Server Components are React components that run only on the server — not in the browser.
- They are the default in the App Router (app/ directory).

- Rendered on the server

  - No JavaScript for these components is sent to the client → faster performance.

- Can access backend resources directly

- You can:

  - ✔ Fetch databases
  - ✔ Read files
  - ✔ Use server-only environment variables
  - ✔ Perform secure operations

  - All without creating separate API endpoints.

- When you need Client Components?

  - Add "use client" at the top:

```jsx
"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

| Property            | Server Component | Client Component   |
| ------------------- | ---------------- | ------------------ |
| Runs on             | Server only      | Browser + Server   |
| Access DB / backend | ✅ Yes           | ❌ No              |
| State / Hooks       | ❌ No            | ✅ Yes             |
| Interactivity       | ❌ No            | ✅ Yes             |
| Performance         | Best             | Depends on JS size |

- 👉 Server for data + heavy logic
- 👉 Client only for UI interaction
