export interface Option {
  value: string;
  label: string;
  [key: string]: any;
}

export interface SelectProps<T extends string | string[]>
  extends Omit<React.HTMLProps<HTMLInputElement>, "value" | "onChange"> {
  id: string;
  name?: string;
  options: Option[];
  value?: T;
  onChange: (value: T) => void;
  multiple?: boolean;
  withSearch?: boolean;
  searchwithfilter?: boolean;
  usePortal?: boolean;
  outlined?: boolean;
  placeholder?: string;
  renderOption?: (option: Option) => React.ReactNode;
  label?: string;
}