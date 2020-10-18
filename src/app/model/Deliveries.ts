export interface Deliveries {
  capturedBy: string;
  transactionId: string;
  userId: string;
  date: string;
  location: string;
  quantity: number;
  latitude: number;
  longitude: number;
  isComplete: boolean;
}
