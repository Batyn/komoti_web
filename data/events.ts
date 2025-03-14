import { Event } from '../types';

// Mock data for events
// In the future, this can be replaced with data from Supabase
// Something like this:

// export const getEvents = async () => {
//   const { data, error } = await supabase
//     .from('events')
//     .select('*');
//   return data;
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
      id: '1',
      name: 'Alexey Ivanov',
      rating: 4.7,
      photo: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80'
    },
    amenities: ['Parking Available', 'Locker Rooms', 'Shower'],
    eventDescription: "Join our friendly 5x5 football match at Arena Pro! We're looking for skilled players to complete our teams. Great atmosphere and competitive gameplay guaranteed."
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
      id: '2',
      name: 'Marina Petrova',
      rating: 4.9,
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80'
    },
    amenities: ['Parking Available', 'Locker Rooms', 'Shower'],
    eventDescription: "Start your day with an energizing run through Green Grove Park! All fitness levels welcome. We'll follow scenic routes and support each other along the way."
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
      id: '3',
      name: 'Denis Kozlov',
      rating: 4.7,
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80'
    },
    amenities: ['Parking Available', 'Locker Rooms', 'Shower'],
    eventDescription: "Show off your best moves at our Hip-Hop Night! Dancers of all levels can participate or just come to enjoy the performances. Great music and vibrant atmosphere!"
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
      id: '4',
      name: 'Ivan Sokolov',
      rating: 4.8,
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80'
    },
    amenities: ['Parking Available', 'Locker Rooms', 'Shower'],
    eventDescription: "Learn boxing techniques from professional trainers! This session welcomes both beginners and experienced boxers. All equipment provided. Come get fit while learning self-defense!"
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
      id: '5',
      name: 'Natalia Orlova',
      rating: 4.6,
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80'
    },
    amenities: ['Parking Available', 'Locker Rooms', 'Shower'],
    eventDescription: "Experience the ultimate paintball battle! Join our team competition with various tactical scenarios. Equipment and safety gear included. Strategy and teamwork is key!"
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
      id: '6',
      name: 'Elena Volkova',
      rating: 4.9,
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80'
    },
    amenities: ['Parking Available', 'Locker Rooms', 'Shower'],
    eventDescription: "Find your inner peace with our morning yoga and meditation session in a beautiful park setting. Perfect for all levels. Bring your own mat and enjoy nature as you practice."
  }
]; 