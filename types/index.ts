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
    id?: string;
    name: string;
    rating: number;
    photo: string;
  };
  amenities: string[];
  eventDescription?: string;
}

export interface EventCardProps {
  event: Event;
}

export interface User {
  id: string;
  name: string;
  photo: string;
  email: string;
  phone?: string;
  bio?: string;
  rating: number;
  location?: string;
  joinedDate: string;
  hostedEvents: Event[];
  participatedEvents: Event[];
  favoriteSports?: string[];
  socialLinks?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    telegram?: string;
  };
}

export interface UserProfileProps {
  user: User;
} 