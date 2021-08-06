type Module = {
  path: string;
  name?: string;
  className?: string;
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
  status: 'success' | 'error' | 'warning' | 'info';
  message: string;
}

type AuditTrail = {
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export type { AuditTrail, Module, ModuleConfig, NotificationMessage };
