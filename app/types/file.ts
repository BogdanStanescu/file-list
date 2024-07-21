export interface File {
  name: string;
  device: string;
  path: string;
  status: keyof typeof FileStatus;
}

export enum FileStatus {
  available = "available",
  scheduled = "scheduled",
}
