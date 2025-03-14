import { User } from '../types';
import { events } from './events';

// Mock data for users
// In the future, this can be replaced with data from Supabase

export const users: User[] = [
  {
    id: '1',
    name: 'Alexey Ivanov',
    photo: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80',
    email: 'alexey.ivanov@example.com',
    phone: '+7 (999) 123-45-67',
    bio: 'Football enthusiast and active lifestyle advocate. Organizing sports events since 2018. Always happy to meet new people and discover interesting activities.',
    rating: 4.7,
    location: 'Moscow',
    joinedDate: 'January 2022',
    hostedEvents: [events[0]],
    participatedEvents: [events[1], events[3]],
    favoriteSports: ['Football', 'Basketball', 'Volleyball'],
    socialLinks: {
      instagram: 'alexey_sportsman',
      telegram: '@alexey_sport',
    }
  },
  {
    id: '2',
    name: 'Marina Petrova',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80',
    email: 'marina.petrova@example.com',
    bio: 'Marathon runner and fitness enthusiast. I help others achieve their sports goals through group training and events.',
    rating: 4.9,
    location: 'Saint Petersburg',
    joinedDate: 'March 2022',
    hostedEvents: [events[1]],
    participatedEvents: [events[0], events[5]],
    favoriteSports: ['Running', 'Fitness', 'Yoga'],
    socialLinks: {
      instagram: 'marina_run',
      facebook: 'marina.petrova',
    }
  },
  {
    id: '3',
    name: 'Denis Kozlov',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80',
    email: 'denis.kozlov@example.com',
    bio: 'Dancing since I was 10 years old, teaching hip-hop and breakdance. Creating dance teams and organizing battles for everyone interested.',
    rating: 4.7,
    location: 'Moscow',
    joinedDate: 'April 2022',
    hostedEvents: [events[2]],
    participatedEvents: [events[4]],
    favoriteSports: ['Dancing', 'Fitness'],
    socialLinks: {
      instagram: 'denis_dance',
      telegram: '@denis_dance',
    }
  },
  {
    id: '4',
    name: 'Ivan Sokolov',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80',
    email: 'ivan.sokolov@example.com',
    phone: '+7 (999) 765-43-21',
    bio: 'Professional boxing coach. I conduct open training sessions for beginners and experienced athletes. I help master technique and improve physical fitness.',
    rating: 4.8,
    location: 'Moscow',
    joinedDate: 'February 2022',
    hostedEvents: [events[3]],
    participatedEvents: [events[0], events[2]],
    favoriteSports: ['Boxing', 'MMA', 'CrossFit'],
    socialLinks: {
      instagram: 'ivan_boxer',
      telegram: '@ivan_coach',
    }
  },
  {
    id: '5',
    name: 'Natalia Orlova',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80',
    email: 'natalia.orlova@example.com',
    bio: 'I love active recreation and team games. I organize paintball and airsoft matches, as well as other team activities for friendly gatherings and corporate events.',
    rating: 4.6,
    location: 'Yekaterinburg',
    joinedDate: 'May 2022',
    hostedEvents: [events[4]],
    participatedEvents: [events[1], events[3]],
    favoriteSports: ['Paintball', 'Football', 'Volleyball'],
    socialLinks: {
      instagram: 'natali_paintball',
      facebook: 'natalia.orlova',
    }
  },
  {
    id: '6',
    name: 'Elena Volkova',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80',
    email: 'elena.volkova@example.com',
    bio: 'Certified yoga instructor. I conduct group classes outdoors, with special attention to breathing, meditation, and balance of body and spirit.',
    rating: 4.9,
    location: 'Saint Petersburg',
    joinedDate: 'January 2022',
    hostedEvents: [events[5]],
    participatedEvents: [events[1], events[4]],
    favoriteSports: ['Yoga', 'Meditation', 'Pilates'],
    socialLinks: {
      instagram: 'elena_yoga',
      facebook: 'elena.volkova',
      telegram: '@elena_yoga',
    }
  }
];

export const getCurrentUser = (): User => {
  // In a real application, logic to get the current user would be here
  return users[0];
}; 