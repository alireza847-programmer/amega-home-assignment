export interface IpDetailProps {
  data: IpDetailDto;
}

export interface IpDetailDto {
  ip?: string;
  location?: string;
  timeZone?: string;
  isp?: string;
}
