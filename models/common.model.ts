type Module = {
  className?: string;
  path?: string;
  label?: string;
  iconName?: string;
  tooltip?: string;
  isMenuHidden?: boolean;
  subModules?: { [key: string]: Module };
}

type ModuleConfig = {
  [key: string]: Module;
}

type NotificationMessage = {
  type: string;
  message: string;
}

export type { Module, ModuleConfig, NotificationMessage };
