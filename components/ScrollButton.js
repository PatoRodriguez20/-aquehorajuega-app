"use client";

export default function ScrollButton() {
  return (
    <button
      onClick={() => document.getElementById("proximos")?.scrollIntoView({ behavior: "smooth" })}
      style={{
        display: "flex", alignItems: "center", gap: 8,
        color: "#6B8BA4", fontSize: "0.75rem", letterSpacing: "0.08em",
        background: "none", border: "none", cursor: "pointer",
        animation: "bob 2s ease-in-out infinite",
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 5v14M5 12l7 7 7-7" />
      </svg>
      Ver más información
    </button>
  );
}