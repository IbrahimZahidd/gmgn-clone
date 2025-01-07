export type Chain = "sol" | "eth" | "base" | "bsc" | "tron" | "blast";

export interface NavLink {
  name: string;
  href: string;
}

export interface ChainOption {
  value: Chain;
  label: string;
}

export interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface SettingsDropdownProps {
  darkMode: boolean;
  onDarkModeChange: (value: boolean) => void;
}
