import React, { useState, useEffect } from "react";

// Home function that is reflected across the site
export default function Home() {
  return (
    <>
      <main role="main" className="wrapper">
        <h1>Welcome to the TODO app code challenge.</h1>
        <p>Please read the instructions in the README carefully to develop and submit your code challenge.</p>
      </main>
      {/* Footer links to Home and About, Link elements matched in router.jsx */}
      <footer className="footer">
        <div className="links">
          <Link href="/">Home</Link>
          <span className="divider">|</span>
          <Link href="/about">About</Link>
        </div>
        <a
          className="btn--remix"
          target="_top"
          href="https://glitch.com/edit/#!/remix/glitch-hello-react"
        >
          <img src="https://cdn.glitch.com/605e2a51-d45f-4d87-a285-9410ad350515%2FLogo_Color.svg?v=1618199565140" alt="" />
          Remix on Glitch
        </a>
      </footer>
  );
}
