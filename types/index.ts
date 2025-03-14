export interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  address: string;
  date: string;
  time: string;
  price: string | number;
  isFree?: boolean;
  image: string;
  category: string;
  participants: {
    current: number;
    total: number;
  };
  host: {
    name: string;
    rating: number;
    photo: string;
  };
  amenities: string[];
}

export interface EventCardProps {
  event: Event;
} 