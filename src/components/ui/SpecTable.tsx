import { RobotData } from "@/types/robot";
import { formatSpecLabel, isValidatable } from "@/lib/utils/formatters";
import { Badge } from "@/components/ui/Badge";

interface SpecTableProps {
  specs: RobotData["specs"];
}

export function SpecTable({ specs }: SpecTableProps) {
  const entries = Object.entries(specs).filter(([, v]) => v !== undefined && v !== "");

  return (
    <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-lg text-[#0A0A0A]">
      <table className="w-full text-sm">
        <tbody className="divide-y divide-black/5">
          {entries.map(([key, value]) => (
            <tr key={key} className="transition-colors hover:bg-[#F8F9FA]">
              <td className="w-1/3 px-6 py-4 font-mono font-bold uppercase tracking-wider text-xs text-zinc-500 bg-[#F8F9FA]/60">
                {formatSpecLabel(key)}
              </td>
              <td className="px-6 py-4 font-mono font-bold text-[#0A0A0A]">
                {isValidatable(value) ? (
                  <span className="flex items-center gap-2">
                    <Badge variant="outline">Da validare</Badge>
                    <span className="text-zinc-400">{value}</span>
                  </span>
                ) : (
                  value
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
