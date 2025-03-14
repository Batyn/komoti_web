import { UserProfileProps } from '../types';
import Link from 'next/link';
import { useState } from 'react';
import EventCard from './EventCard';

const UserProfile = ({ user }: UserProfileProps) => {
  const [activeTab, setActiveTab] = useState<'hosted' | 'participated'>('hosted');
  const [imgSrc, setImgSrc] = useState(user.photo);
  
  // Universal placeholder image
  const placeholderAvatar = "https://picsum.photos/seed/avatar/150/150";
  
  const handleAvatarError = () => {
    setImgSrc(placeholderAvatar);
  };
  
  return (
    <div className="py-6 sm:py-8">
      <div className="flex flex-col md:flex-row gap-4 sm:gap-8">
        {/* Left column - user information */}
        <div className="w-full md:w-1/3">
          <div className="bg-white rounded-[20px] p-4 sm:p-6 shadow-sm border border-gray-100">
            <div className="flex flex-col items-center mb-4 sm:mb-6">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-3 sm:mb-4 border-2 border-green-500">
                <img 
                  src={imgSrc}
                  alt={user.name}
                  className="w-full h-full object-cover"
                  onError={handleAvatarError}
                />
              </div>
              <h1 className="text-xl sm:text-2xl font-semibold">{user.name}</h1>
              <div className="flex items-center mt-1">
                <span className="text-yellow-500 mr-1">⭐</span>
                <span className="font-medium text-sm sm:text-base">{user.rating}</span>
              </div>
              <p className="text-gray-500 text-sm sm:text-base mt-1">{user.location}</p>
              <p className="text-gray-500 text-xs sm:text-sm mt-0.5">On Komoti since {user.joinedDate}</p>
            </div>
            
            <div className="mb-4 sm:mb-6">
              <h2 className="text-base sm:text-lg font-medium mb-2">About Me</h2>
              <p className="text-sm sm:text-base text-gray-700">{user.bio || 'No information available'}</p>
            </div>
            
            {user.favoriteSports && user.favoriteSports.length > 0 && (
              <div className="mb-4 sm:mb-6">
                <h2 className="text-base sm:text-lg font-medium mb-2">Favorite Sports</h2>
                <div className="flex flex-wrap gap-2">
                  {user.favoriteSports.map((sport, index) => (
                    <span 
                      key={index}
                      className="text-xs sm:text-sm bg-gray-100 text-gray-800 px-3 py-1.5 sm:py-1 rounded-full"
                    >
                      {sport}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <div className="mb-4 sm:mb-6">
              <h2 className="text-base sm:text-lg font-medium mb-2">Contact</h2>
              <div className="space-y-2">
                <p className="text-gray-700 flex items-center gap-2 text-sm sm:text-base">
                  <span className="text-gray-400 text-lg sm:text-base">✉️</span> {user.email}
                </p>
                {user.phone && (
                  <p className="text-gray-700 flex items-center gap-2 text-sm sm:text-base">
                    <span className="text-gray-400 text-lg sm:text-base">📱</span> {user.phone}
                  </p>
                )}
              </div>
            </div>
            
            {user.socialLinks && Object.values(user.socialLinks).some(link => link) && (
              <div>
                <h2 className="text-base sm:text-lg font-medium mb-2">Social Media</h2>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {user.socialLinks.instagram && (
                    <a href={`https://instagram.com/${user.socialLinks.instagram}`} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 text-sm sm:text-base">
                      Instagram
                    </a>
                  )}
                  {user.socialLinks.facebook && (
                    <a href={`https://facebook.com/${user.socialLinks.facebook}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm sm:text-base">
                      Facebook
                    </a>
                  )}
                  {user.socialLinks.twitter && (
                    <a href={`https://twitter.com/${user.socialLinks.twitter}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 text-sm sm:text-base">
                      Twitter
                    </a>
                  )}
                  {user.socialLinks.telegram && (
                    <a href={`https://t.me/${user.socialLinks.telegram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 text-sm sm:text-base">
                      Telegram
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Right column - events */}
        <div className="w-full md:w-2/3">
          <div className="bg-white rounded-[20px] p-4 sm:p-6 shadow-sm border border-gray-100">
            <div className="flex border-b border-gray-200 mb-4 sm:mb-6">
              <button
                className={`pb-2 px-3 sm:px-4 text-center text-sm sm:text-base ${
                  activeTab === 'hosted' 
                    ? 'border-b-2 border-green-500 text-green-500 font-medium'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('hosted')}
              >
                Hosted Events ({user.hostedEvents.length})
              </button>
              <button
                className={`pb-2 px-3 sm:px-4 text-center text-sm sm:text-base ${
                  activeTab === 'participated' 
                    ? 'border-b-2 border-green-500 text-green-500 font-medium'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('participated')}
              >
                Participated Events ({user.participatedEvents.length})
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6">
              {activeTab === 'hosted'
                ? user.hostedEvents.map((event) => (
                    <div key={event.id} className="w-full">
                      <EventCard event={event} />
                    </div>
                  ))
                : user.participatedEvents.map((event) => (
                    <div key={event.id} className="w-full">
                      <EventCard event={event} />
                    </div>
                  ))}
            </div>
             
             {((activeTab === 'hosted' && user.hostedEvents.length === 0) ||
               (activeTab === 'participated' && user.participatedEvents.length === 0)) && (
               <div className="text-center py-6 sm:py-8">
                 <p className="text-gray-500 text-sm sm:text-base">
                   {activeTab === 'hosted'
                     ? 'No hosted events'
                     : 'No participated events'}
                 </p>
                 <Link href="/" className="text-green-500 hover:text-green-700 mt-2 inline-block text-sm sm:text-base">
                   Find events
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