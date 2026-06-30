export function formatSpecLabel(key: string): string {
  const map: Record<string, string> = {
    dimensions: "Dimensioni (L × P × H)",
    weight: "Peso",
    max_speed: "Velocità max",
    battery_life: "Autonomia batteria",
    charging_time: "Tempo ricarica",
    slope_angle: "Angolo salita",
    load_capacity: "Capacità di carico",
    min_passage_width: "Passaggio minimo",
    layer_size: "Dimensione ripiani",
    battery_spec: "Specifica batteria",
    runtime_scrubbing: "Autonomia lavaggio",
    runtime_sweeping: "Autonomia spazzatura",
    cleaning_width_sweeping: "Larghezza pulizia (spazzatura)",
    cleaning_width_scrubbing: "Larghezza pulizia (lavaggio)",
    cleaning_efficiency: "Efficienza pulizia",
    clean_water_tank: "Serbatoio acqua pulita",
    waste_water_tank: "Serbatoio acque reflue",
    dust_bag_capacity: "Capacità sacco polvere",
    trash_bin_capacity: "Capacità cestino",
    max_payload: "Carico max",
    compatible_shelf_dimensions: "Dimensioni scaffali compatibili",
    loading_platform_dimensions: "Dimensioni piattaforma",
    chassis_ground_clearance: "Altezza da terra scocca",
    standard_shelf_size: "Dimensioni scaffale standard",
    max_suction: "Aspirazione max",
    max_cleaning_width: "Larghezza max pulizia",
  };
  return map[key] || key;
}

export function isValidatable(value: string | undefined): boolean {
  if (!value) return false;
  return value.toLowerCase().includes("dato da validare");
}
