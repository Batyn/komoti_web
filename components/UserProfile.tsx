import { UserProfileProps } from '../types';
import Link from 'next/link';
import { useState } from 'react';
import EventCard from './EventCard';

const UserProfile = ({ user }: UserProfileProps) => {
  const [activeTab, setActiveTab] = useState<'hosted' | 'participated'>('hosted');
  const [imgSrc, setImgSrc] = useState(user.photo);
  
  // Универсальное изображение-заглушка
  const placeholderAvatar = "https://picsum.photos/seed/avatar/150/150";
  
  const handleAvatarError = () => {
    setImgSrc(placeholderAvatar);
  };
  
  return (
    <div className="py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Левая колонка - информация о пользователе */}
        <div className="w-full md:w-1/3">
          <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100">
            <div className="flex flex-col items-center mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-green-500">
                <img 
                  src={imgSrc}
                  alt={user.name}
                  className="w-full h-full object-cover"
                  onError={handleAvatarError}
                />
              </div>
              <h1 className="text-2xl font-semibold">{user.name}</h1>
              <div className="flex items-center mt-1">
                <span className="text-yellow-500 mr-1">⭐</span>
                <span className="font-medium">{user.rating}</span>
              </div>
              <p className="text-gray-500 mt-1">{user.location}</p>
              <p className="text-gray-500 text-sm">На Komoti с {user.joinedDate}</p>
            </div>
            
            <div className="mb-6">
              <h2 className="text-lg font-medium mb-2">О себе</h2>
              <p className="text-gray-700">{user.bio || 'Информация отсутствует'}</p>
            </div>
            
            {user.favoriteSports && user.favoriteSports.length > 0 && (
              <div className="mb-6">
                <h2 className="text-lg font-medium mb-2">Любимые виды спорта</h2>
                <div className="flex flex-wrap gap-2">
                  {user.favoriteSports.map((sport, index) => (
                    <span 
                      key={index}
                      className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded-full"
                    >
                      {sport}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <div className="mb-6">
              <h2 className="text-lg font-medium mb-2">Контакты</h2>
              <div className="space-y-2">
                <p className="text-gray-700 flex items-center gap-2">
                  <span className="text-gray-400">✉️</span> {user.email}
                </p>
                {user.phone && (
                  <p className="text-gray-700 flex items-center gap-2">
                    <span className="text-gray-400">📱</span> {user.phone}
                  </p>
                )}
              </div>
            </div>
            
            {user.socialLinks && Object.values(user.socialLinks).some(link => link) && (
              <div>
                <h2 className="text-lg font-medium mb-2">Социальные сети</h2>
                <div className="flex gap-4">
                  {user.socialLinks.instagram && (
                    <a href={`https://instagram.com/${user.socialLinks.instagram}`} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                      Instagram
                    </a>
                  )}
                  {user.socialLinks.facebook && (
                    <a href={`https://facebook.com/${user.socialLinks.facebook}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                      Facebook
                    </a>
                  )}
                  {user.socialLinks.twitter && (
                    <a href={`https://twitter.com/${user.socialLinks.twitter}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                      Twitter
                    </a>
                  )}
                  {user.socialLinks.telegram && (
                    <a href={`https://t.me/${user.socialLinks.telegram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                      Telegram
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Правая колонка - события */}
        <div className="w-full md:w-2/3">
          <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100">
            <div className="flex border-b border-gray-200 mb-6">
              <button
                className={`pb-2 px-4 text-center ${
                  activeTab === 'hosted'
                    ? 'border-b-2 border-green-500 text-green-500 font-medium'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('hosted')}
              >
                Организованные события ({user.hostedEvents.length})
              </button>
              <button
                className={`pb-2 px-4 text-center ${
                  activeTab === 'participated'
                    ? 'border-b-2 border-green-500 text-green-500 font-medium'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('participated')}
              >
                Посещенные события ({user.participatedEvents.length})
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeTab === 'hosted'
                ? user.hostedEvents.map((event) => (
                    <div key={event.id} className="flex justify-center">
                      <EventCard event={event} />
                    </div>
                  ))
                : user.participatedEvents.map((event) => (
                    <div key={event.id} className="flex justify-center">
                      <EventCard event={event} />
                    </div>
                  ))}
            </div>
            
            {((activeTab === 'hosted' && user.hostedEvents.length === 0) ||
              (activeTab === 'participated' && user.participatedEvents.length === 0)) && (
              <div className="text-center py-8">
                <p className="text-gray-500">
                  {activeTab === 'hosted'
                    ? 'Нет организованных событий'
                    : 'Нет посещенных событий'}
                </p>
                <Link href="/" className="text-green-500 hover:text-green-700 mt-2 inline-block">
                  Найти события
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile; 