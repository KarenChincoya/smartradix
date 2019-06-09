export interface Report {
  id: string;
  sensor: number;
  humidity: number;
  environmentHumidity: number;
  environmentTemperature: number;
  date: Date;
  hour: string;
}
