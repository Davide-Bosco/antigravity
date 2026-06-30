import Link from "next/link";
import { Bot, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center bg-[#0A0A0A]">
      <div className="mb-4 text-9xl font-mono font-extrabold text-[#E8001D]/15">404</div>
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#E8001D]/10 text-[#E8001D] shadow-[0_0_30px_rgba(232,0,29,0.3)]">
        <Bot className="h-10 w-10" />
      </div>
      <h1 className="mb-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Rotta Interrotta o Non Mappata</h1>
      <p className="mb-8 max-w-md text-white/70 leading-relaxed">
        Il sensore LiDAR del robot non rileva la pagina richiesta. Torna alla base o consulta il catalogo dei nostri modelli.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="btn-primary flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" /> Rientra alla Home
        </Link>
        <Link
          href="/robot/"
          className="btn-secondary"
        >
          Catalogo Robot
        </Link>
      </div>
    </div>
  );
}
