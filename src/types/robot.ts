export interface RobotSpec {
  dimensions?: string;
  weight?: string;
  max_speed?: string;
  battery_life?: string;
  charging_time?: string;
  slope_angle?: string;
  load_capacity?: string;
  min_passage_width?: string;
  layer_size?: string;
  battery_spec?: string;
  runtime_scrubbing?: string;
  runtime_sweeping?: string;
  cleaning_width_sweeping?: string;
  cleaning_width_scrubbing?: string;
  cleaning_efficiency?: string;
  clean_water_tank?: string;
  waste_water_tank?: string;
  dust_bag_capacity?: string;
  trash_bin_capacity?: string;
  max_payload?: string;
  compatible_shelf_dimensions?: string;
  loading_platform_dimensions?: string;
  chassis_ground_clearance?: string;
  standard_shelf_size?: string;
  max_suction?: string;
  max_cleaning_width?: string;
  [key: string]: string | undefined;
}

export interface RobotData {
  slug: string;
  name: string;
  category: string;
  category_slug: string;
  sector: string[];
  description: string;
  features: string[];
  specs: RobotSpec;
  source_url: string;
  source_label: string;
  last_verified: string;
  data_completeness: "complete" | "partial" | "minimal";
  note?: string;
  image?: string;
}
