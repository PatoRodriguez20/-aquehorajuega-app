function getResultado(golesRacing, golesRival) {
  if (golesRacing > golesRival) return { label: "Victoria", color: "#2ecc71", bg: "rgba(46,204,113,0.12)" };
  if (golesRacing < golesRival) return { label: "Derrota",  color: "#e74c3c", bg: "rgba(231,76,60,0.12)" };
  return { label: "Empate", color: "#f39c12", bg: "rgba(243,156,18,0.12)" };
}

export default function UltimosResultados({ resultados }) {
  return (
    <section style={{ padding: "0 32px 80px", maxWidth: 900, margin: "0 auto" }}>
      <h2 style={{
        fontFamily: "var(--font-bebas)", fontSize: "1.8rem", letterSpacing: "0.06em",
        color: "#fff", marginBottom: 28, display: "flex", alignItems: "center", gap: 14,
      }}>
        Últimos Resultados
        <span style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.07)", display: "block" }} />
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {resultados.map((r, i) => {
          const res = getResultado(r.golesRacing, r.golesRival);
          const esLocal = r.condicionRacing === "local";
          return (
            <div key={i} style={{
              background: "#0D1E2F", border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 18, padding: "24px 28px",
            }}>
             <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: 16 }}>
  {/* Equipo local - siempre izquierda */}
  <div>
    <div style={{ fontSize: "1.05rem", fontWeight: 600, color: esLocal ? "#23BCDD" : "#fff" }}>
      {esLocal ? "Racing" : r.rival}
    </div>
    <div style={{ fontSize: "0.72rem", color: "#6B8BA4" }}>Local</div>
  </div>

  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
    <span style={{ fontFamily: "var(--font-bebas)", fontSize: "2.2rem", color: "#fff", lineHeight: 1 }}>
      {esLocal ? `${r.golesRacing} – ${r.golesRival}` : `${r.golesRival} – ${r.golesRacing}`}
    </span>
    <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", padding: "2px 10px", borderRadius: 100, color: res.color, background: res.bg }}>
      {res.label}
    </span>
    <span style={{ fontSize: "0.68rem", color: "#6B8BA4" }}>{formatFecha(r.fecha)}</span>
  </div>

  {/* Equipo visitante - siempre derecha */}
  <div style={{ textAlign: "right" }}>
    <div style={{ fontSize: "1.05rem", fontWeight: 600, color: esLocal ? "#fff" : "#23BCDD" }}>
      {esLocal ? r.rival : "Racing"}
    </div>
    <div style={{ fontSize: "0.72rem", color: "#6B8BA4" }}>Visitante</div>
  </div>
</div>

                <div>
                  <div style={{ fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.14em" }}>{r.competencia}</div>
                  <div style={{ color: "#E8F4F8", fontWeight: 500, marginTop: 2 }}>{r.competencia}</div>
                </div>
              {/* <div style={{ display: "flex", gap: 24, marginTop: 16, paddingTop: 14, borderTop: "1px solid rgba(255,255,255,0.07)", fontSize: "0.75rem", color: "#6B8BA4" }}>
                <div>
                  <div style={{ fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.14em" }}>Estadio</div>
                  <div style={{ color: "#E8F4F8", fontWeight: 500, marginTop: 2 }}>{r.estadio}</div>
                </div>
                <div>
                  <div style={{ fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.14em" }}>Goleadores</div>
                  <div style={{ color: "#E8F4F8", fontWeight: 500, marginTop: 2 }}>{r.goleadores}</div>
                </div>
              </div> */}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function formatFecha(isoString) {
  if (!isoString) return "Por confirmar";

  // Normalizar: reemplazar espacio por T si es necesario
  const normalizado = String(isoString).replace(" ", "T");
  const d = new Date(normalizado);

  // Guard contra fecha inválida
  if (isNaN(d.getTime())) return "Fecha no disponible";

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