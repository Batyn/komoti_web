import { Event } from '../types';

// Моковые данные для ивентов
// В будущем их можно заменить на данные из Supabase
// Примерно так:
// import { createClient } from '@supabase/supabase-js';
// const supabase = createClient('YOUR_SUPABASE_URL', 'YOUR_SUPABASE_KEY');
// export const fetchEvents = async () => {
//   const { data, error } = await supabase.from('events').select('*');
//   if (error) throw error;
//   return data as Event[];
// };

export const events: Event[] = [
  {
    id: '1',
    title: '5x5 Football Match',
    description: '"Arena Pro" Sports Complex, Field 3',
    location: 'Arena Pro',
    address: 'Sports Complex, Field 3',
    date: 'March 9',
    time: '18:00',
    price: '100',
    isFree: false,
    image: 'https://picsum.photos/seed/football/800/600',
    category: 'Sports',
    participants: {
      current: 7,
      total: 10
    },
    host: {
      name: 'Alexey Ivanov',
      rating: 4.7,
      photo: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80'
    },
    amenities: ['Parking Available', 'Locker Rooms', 'Shower']
  },
  {
    id: '2',
    title: 'Morning Park Run',
    description: '"Green Grove" Park, Main Entrance',
    location: 'Green Grove',
    address: 'Park, Main Entrance',
    date: 'March 10',
    time: '7:30',
    price: '0',
    isFree: true,
    image: 'https://picsum.photos/seed/running/800/600',
    category: 'Fitness',
    participants: {
      current: 6,
      total: 24
    },
    host: {
      name: 'Marina Petrova',
      rating: 4.9,
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80'
    },
    amenities: ['Parking Available', 'Locker Rooms', 'Shower']
  },
  {
    id: '3',
    title: 'Dance Battle "Hip-Hop Night"',
    description: '"Move Up" Dance Studio',
    location: 'Move Up',
    address: 'Dance Studio',
    date: 'March 15',
    time: '20:00',
    price: '80',
    isFree: false,
    image: 'https://picsum.photos/seed/dance/800/600',
    category: 'Dance',
    participants: {
      current: 8,
      total: 9
    },
    host: {
      name: 'Denis Kozlov',
      rating: 4.7,
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80'
    },
    amenities: ['Parking Available', 'Locker Rooms', 'Shower']
  },
  {
    id: '4',
    title: 'Open Boxing Training',
    description: '"Fight Club" Boxing Gym',
    location: 'Fight Club',
    address: 'Boxing Gym',
    date: 'March 12',
    time: '19:00',
    price: '70',
    isFree: false,
    image: 'https://picsum.photos/seed/boxing/800/600',
    category: 'Martial Arts',
    participants: {
      current: 8,
      total: 10
    },
    host: {
      name: 'Ivan Sokolov',
      rating: 4.8,
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80'
    },
    amenities: ['Parking Available', 'Locker Rooms', 'Shower']
  },
  {
    id: '5',
    title: 'Paintball Clash "Team Battle"',
    description: '"Storm" Paintball Arena',
    location: 'Storm',
    address: 'Paintball Arena',
    date: 'March 17',
    time: '13:00',
    price: '100',
    isFree: false,
    image: 'https://picsum.photos/seed/paintball/800/600',
    category: 'Team Games',
    participants: {
      current: 9,
      total: 12
    },
    host: {
      name: 'Natalia Orlova',
      rating: 4.6,
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80'
    },
    amenities: ['Parking Available', 'Locker Rooms', 'Shower']
  },
  {
    id: '6',
    title: 'Yoga & Meditation in the Park',
    description: 'Riverside Park, Zen Zone',
    location: 'Riverside Park',
    address: 'Zen Zone',
    date: 'March 14',
    time: '9:00',
    price: '0',
    isFree: true,
    image: 'https://picsum.photos/seed/yoga/800/600',
    category: 'Wellness',
    participants: {
      current: 3,
      total: 10
    },
    host: {
      name: 'Elena Volkova',
      rating: 4.9,
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80'
    },
    amenities: ['Parking Available', 'Locker Rooms', 'Shower']
  }
]; 