function formatFecha(isoString) {
  if (!isoString) return "Por confirmar";
  const d = new Date(isoString);
  if (isNaN(d.getTime())) return "Por confirmar";
  const fecha = d.toLocaleDateString("es-AR", {
    weekday: "short", day: "numeric", month: "short",
    timeZone: "America/Argentina/Buenos_Aires",
  });
  const hora = d.toLocaleTimeString("es-AR", {
    hour: "2-digit", minute: "2-digit", hour12: false,
    timeZone: "America/Argentina/Buenos_Aires",
  });
  return `${fecha} · ${hora} hs`;
}

export default function ProximosPartidos({ partidos }) {
  return (
    <section id="proximos" style={{ padding: "60px 32px", maxWidth: 900, margin: "0 auto" }}>
      <h2 style={{
        fontFamily: "var(--font-bebas)", fontSize: "1.8rem", letterSpacing: "0.06em",
        color: "#fff", marginBottom: 28, display: "flex", alignItems: "center", gap: 14,
      }}>
        Próximos Partidos
        <span style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.07)", display: "block" }} />
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {partidos.map((p, i) => {
          const isNext = i === 0;
          const esLocal = p.condicion === "local";
          return (
            <div key={i} style={{
              background: isNext ? "#122336" : "#0D1E2F",
              border: `1px solid ${isNext ? "#23BCDD" : "rgba(255,255,255,0.07)"}`,
              borderRadius: 18, padding: "24px 28px",
            }}>
              {isNext && (
                <span style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.14em", color: "#23BCDD", textTransform: "uppercase", marginBottom: 12, display: "block" }}>
                  ● Próximo
                </span>
              )}

              <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: 16 }}>
                <div>
                  <div style={{ fontSize: "1.05rem", fontWeight: 600, color: esLocal ? "#23BCDD" : "#fff" }}>
                    {esLocal ? "Racing" : p.rival}
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "#6B8BA4" }}>Local</div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: "0.65rem", color: "#4a7a9b", letterSpacing: "0.06em" }}>{p.competencia}</span>
                  <span style={{ fontFamily: "var(--font-bebas)", color: "#6B8BA4", letterSpacing: "0.1em" }}>VS</span>
                  <span style={{ fontSize: "0.72rem", color: "#6B8BA4", textAlign: "center" }}>{formatFecha(p.fecha)}</span>
                </div>

                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "1.05rem", fontWeight: 600, color: !esLocal ? "#23BCDD" : "#fff" }}>
                    {!esLocal ? "Racing" : p.rival}
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "#6B8BA4" }}>Visitante</div>
                </div>
              </div>

              <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid rgba(255,255,255,0.07)", fontSize: "0.75rem", color: "#6B8BA4" }}>
                <div style={{ fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.14em" }}>Estadio</div>
                <div style={{ color: "#E8F4F8", fontWeight: 500, marginTop: 2 }}>{p.estadio}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}