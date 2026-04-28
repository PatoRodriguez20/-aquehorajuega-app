// components/Countdown.js
"use client";

import { useEffect, useState } from "react";

function pad(n) {
  return String(n).padStart(2, "0");
}

function getTimeLeft(target) {
  const diff = new Date(target) - new Date();
  if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    mins: Math.floor((diff % 3600000) / 60000),
    secs: Math.floor((diff % 60000) / 1000),
  };
}

export default function Countdown({ fecha }) {
  const [time, setTime] = useState(getTimeLeft(fecha));

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft(fecha)), 1000);
    return () => clearInterval(interval);
  }, [fecha]);

  const units = [
    { label: "Días", val: time.days },
    { label: "Horas", val: time.hours },
    { label: "Min", val: time.mins },
    { label: "Seg", val: time.secs },
  ];

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 10,
      maxWidth: 360,
    }}>
      {units.map(({ label, val }) => (
        <div key={label} style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "#0D1E2F",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 16,
          padding: "16px 10px",
          overflow: "hidden",
        }}>
          <span style={{
            position: "absolute", top: 0, left: 0, right: 0,
            height: 2, background: "#23BCDD", opacity: 0.6,
          }} />
          <span style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "2.4rem",
            lineHeight: 1,
            color: "#23BCDD",
          }}>
            {pad(val)}
          </span>
          <span style={{
            fontSize: "0.58rem",
            fontWeight: 600,
            letterSpacing: "0.14em",
            color: "#6B8BA4",
            textTransform: "uppercase",
            marginTop: 6,
          }}>
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}