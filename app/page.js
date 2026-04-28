import { racingData } from "@/data/racing";
import Header from "@/components/Header";
import Countdown from "@/components/Countdown";
import ProximosPartidos from "@/components/ProximosPartidos";
import UltimosResultados from "@/components/UltimosResultados";
import ScrollButton from "@/components/ScrollButton";

function formatFechaHero(isoString) {
  const d = new Date(isoString);
  return d.toLocaleDateString("es-AR", {
    weekday: "long", day: "numeric", month: "long",
    hour: "2-digit", minute: "2-digit",
    timeZone: "America/Argentina/Buenos_Aires",
  });
}

function getProximoPartido(partidos) {
  const ahora = new Date();
  return partidos.find(p => p.fecha && new Date(p.fecha) > ahora) || partidos[0];
}

export default function Home() {
  const { proximosPartidos, ultimosResultados } = racingData;
  const proximoPartido = getProximoPartido(proximosPartidos);
  const esLocal = proximoPartido.condicion === "local";
  return (
    <>
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(35,188,221,0.12) 0%, transparent 70%)",
      }} />

      <Header />

      <main style={{
        position: "relative", zIndex: 1,
        minHeight: "calc(100vh - 80px)",
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "40px 32px 60px", gap: 48, maxWidth: 900, margin: "0 auto",
      }}>
        <span style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.18em", color: "#23BCDD", textTransform: "uppercase" }}>
          Próximo partido
        </span>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <h1 style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(3rem, 12vw, 6rem)", lineHeight: 1, color: "#fff" }}>
            vs <span style={{ color: "#23BCDD" }}>{proximoPartido.rival}</span>
          </h1>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12 }}>
            <span style={{ color: "#6B8BA4" }}>{formatFechaHero(proximoPartido.fecha)}</span>
            <span style={{
              fontSize: "0.78rem", fontWeight: 600, padding: "5px 14px", borderRadius: 100,
              background: esLocal ? "rgba(46,204,113,0.15)" : "rgba(231,76,60,0.18)",
              border: `1px solid ${esLocal ? "rgba(46,204,113,0.35)" : "rgba(231,76,60,0.4)"}`,
              color: esLocal ? "#2ecc71" : "#e74c3c",
            }}>
              {esLocal ? "Local" : "Visitante"}
            </span>
            <span style={{
              fontSize: "0.78rem", fontWeight: 600, padding: "5px 14px", borderRadius: 100,
              background: "#0D1E2F", border: "1px solid rgba(255,255,255,0.07)", color: "#6B8BA4",
            }}>
              {proximoPartido.competencia}
            </span>
          </div>
        </div>

        <Countdown fecha={proximoPartido.fecha} />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(150px, 1fr))", gap: 12, maxWidth: 560 }}>
          {[
            { label: "Estadio", val: proximoPartido.estadio },
            { label: "Ciudad", val: proximoPartido.ciudad },
            //{ label: "Competencia", val: proximoPartido.competencia },
          ].map(({ label, val }) => (
            <div key={label} style={{ background: "#0D1E2F", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: "18px 20px" }}>
              <div style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.14em", color: "#6B8BA4", textTransform: "uppercase", marginBottom: 8 }}>
                {label}
              </div>
              <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "#fff" }}>{val}</div>
            </div>
          ))}
        </div>

        <ScrollButton />
      </main>

      <ProximosPartidos partidos={proximosPartidos} />
      <UltimosResultados resultados={ultimosResultados} />

      <footer style={{ textAlign: "center", padding: "32px", borderTop: "1px solid rgba(255,255,255,0.07)", color: "#6B8BA4", fontSize: "0.75rem", letterSpacing: "0.04em" }}>
       2026 - PR20
      </footer>
    </>
  );
}