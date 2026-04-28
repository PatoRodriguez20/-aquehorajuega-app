import Image from "next/image";

export default function Header() {
  return (
    <header style={{
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "28px 32px 20px",
      borderBottom: "1px solid rgba(255,255,255,0.07)",
      position: "relative",
      zIndex: 10,
    }}>
      <Image
        src="/escudo.png"
        alt="Racing Club"
        width={40}
        height={40}
        style={{ objectFit: "contain" }}
      />
      <span style={{ fontFamily: "var(--font-bebas)", fontSize: "1.6rem", letterSpacing: "0.06em", color: "#fff" }}>
        Racing Club
      </span>
    </header>
  );
}