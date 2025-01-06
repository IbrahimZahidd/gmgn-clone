export type TimePeriod = "1m" | "5m" | "1h" | "6h" | "24h";

export interface FilterBarProps {
  onTimeChange?: (time: TimePeriod) => void;
  onFilterTokenChange?: (value: string) => void;
  onFilterRisksChange?: (value: string) => void;
  onLinkedBuyChange?: (value: boolean) => void;
  onSettingsChange?: () => void;
}
