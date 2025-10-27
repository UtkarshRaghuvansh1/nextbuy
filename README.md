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

## Image component

- Next.js provides built-in image optimization through its special
- <Image /> component (from next/image), which automatically handles performance-related tasks like resizing, compression, and lazy loading.
- What is Image Optimization in Next.js?

  - When you use the Next.js <Image> component instead of a regular <img>,
  - Next.js automatically:

    - 🧠 Optimizes the image on the server

    - 📏 Resizes it for the user’s device (responsive images)

    - 🔄 Caches the optimized image

    - ⚡ Compresses and converts it (e.g., to WebP)

    - 💤 Lazy loads images that are off-screen

    - This means faster pages, better SEO, and reduced bandwidth 🚀

```jsx
import Image from "next/image";
import profilePic from "../public/profile.jpg";

export default function Home() {
  return (
    <div>
      <h1>Optimized Image Example</h1>
      <Image src={profilePic} alt="Profile picture" width={400} height={400} />
    </div>
  );
}
```

- How It Works Internally

  - When a browser requests the image:

```js
/_next/image?url=/profile.jpg&w=400&q=75

```

- Next.js:

  - Loads your original image (/public/profile.jpg)

  - Resizes it to 400px width

  - Compresses it (quality=75 by default)

  - Caches and serves the optimized image

| Feature                | Description                                      |
| ---------------------- | ------------------------------------------------ |
| **Automatic resizing** | Generates multiple sizes for different viewports |
| **Lazy loading**       | Loads only when visible                          |
| **Smart formats**      | Converts to WebP/AVIF when supported             |
| **Caching**            | Stores optimized copies                          |
| **Remote images**      | You can load images from external domains        |
| **Blur placeholder**   | Adds a smooth blur-up effect                     |

- To load images from external sources (like Cloudinary or Unsplash),
  add them to your next.config.js:

```js
// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};
```

```jsx
<Image
  src="https://images.unsplash.com/photo-123"
  alt="Unsplash Image"
  width={800}
  height={600}
/>
```

| Factor          | Without `<Image>`    | With `<Image>`                       |
| --------------- | -------------------- | ------------------------------------ |
| Page speed      | ❌ Slow              | ✅ Very fast                         |
| SEO ranking     | ❌ Lower             | ✅ Higher (Core Web Vitals improved) |
| User experience | ❌ Images pop late   | ✅ Smooth & lazy-loaded              |
| Data usage      | ❌ High MB           | ✅ Reduced 60–80%                    |
| Revenue impact  | ❌ Lower conversions | ✅ Higher conversions                |
| Cost on Vercel  | ❌ More bandwidth    | ✅ Cached optimized images           |
