import { User } from '../types';
import { events } from './events';

// Моковые данные для пользователей
// В будущем их можно заменить на данные из Supabase

export const users: User[] = [
  {
    id: '1',
    name: 'Alexey Ivanov',
    photo: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80',
    email: 'alexey.ivanov@example.com',
    phone: '+7 (999) 123-45-67',
    bio: 'Любитель футбола и активного отдыха. Организую спортивные мероприятия с 2018 года. Всегда рад новым знакомствам и интересным событиям.',
    rating: 4.7,
    location: 'Москва',
    joinedDate: 'Январь 2022',
    hostedEvents: [events[0]],
    participatedEvents: [events[1], events[3]],
    favoriteSports: ['Футбол', 'Баскетбол', 'Волейбол'],
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
    bio: 'Бегаю марафоны и люблю фитнес. Помогаю другим достигать своих спортивных целей через групповые тренировки и мероприятия.',
    rating: 4.9,
    location: 'Санкт-Петербург',
    joinedDate: 'Март 2022',
    hostedEvents: [events[1]],
    participatedEvents: [events[0], events[5]],
    favoriteSports: ['Бег', 'Фитнес', 'Йога'],
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
    bio: 'Танцую с 10 лет, преподаю хип-хоп и брейк-данс. Создаю танцевальные коллективы и организую батлы для всех желающих.',
    rating: 4.7,
    location: 'Москва',
    joinedDate: 'Апрель 2022',
    hostedEvents: [events[2]],
    participatedEvents: [events[4]],
    favoriteSports: ['Танцы', 'Фитнес'],
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
    bio: 'Профессиональный тренер по боксу. Провожу открытые тренировки для начинающих и опытных спортсменов. Помогаю освоить технику и улучшить физическую форму.',
    rating: 4.8,
    location: 'Москва',
    joinedDate: 'Февраль 2022',
    hostedEvents: [events[3]],
    participatedEvents: [events[0], events[2]],
    favoriteSports: ['Бокс', 'ММА', 'Кроссфит'],
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
    bio: 'Люблю активный отдых и командные игры. Организую пейнтбольные и страйкбольные матчи, а также другие командные мероприятия для дружеских встреч и корпоративов.',
    rating: 4.6,
    location: 'Екатеринбург',
    joinedDate: 'Май 2022',
    hostedEvents: [events[4]],
    participatedEvents: [events[1], events[3]],
    favoriteSports: ['Пейнтбол', 'Футбол', 'Волейбол'],
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
    bio: 'Сертифицированный инструктор по йоге. Провожу групповые занятия на свежем воздухе, уделяя особое внимание дыханию, медитации и балансу тела и духа.',
    rating: 4.9,
    location: 'Санкт-Петербург',
    joinedDate: 'Январь 2022',
    hostedEvents: [events[5]],
    participatedEvents: [events[1], events[4]],
    favoriteSports: ['Йога', 'Медитация', 'Пилатес'],
    socialLinks: {
      instagram: 'elena_yoga',
      facebook: 'elena.volkova',
      telegram: '@elena_yoga',
    }
  }
];

export const getCurrentUser = (): User => {
  // В реальном приложении здесь будет логика получения текущего пользователя
  return users[0];
}; 