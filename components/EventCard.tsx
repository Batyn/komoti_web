import { EventCardProps } from '../types';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const EventCard = ({ event }: EventCardProps) => {
  const router = useRouter();
  // Universal placeholder image
  const placeholderImage = "https://picsum.photos/seed/event/800/600";
  const placeholderAvatar = "https://picsum.photos/seed/avatar/150/150";
  
  const [imgSrc, setImgSrc] = useState(event.image);
  const [avatarSrc, setAvatarSrc] = useState(event.host.photo);
  const [isHostHovered, setIsHostHovered] = useState(false);
  // Adding state to track when either the image or Join button is hovered
  const [isCardHovered, setIsCardHovered] = useState(false);
  
  const handleImageError = () => {
    setImgSrc(placeholderImage);
  };
  
  const handleAvatarError = () => {
    setAvatarSrc(placeholderAvatar);
  };
  
  const handleEventImageClick = () => {
    router.push(`/event/${event.id}`);
  };
  
  const handleJoinClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Stop event propagation
    router.push(`/event/${event.id}?join=true`);
  };
  
  const handleHostClick = (e: React.MouseEvent) => {
    if (!event.host.id) return;
    
    e.stopPropagation(); // Stop event propagation
    router.push(`/profile/${event.host.id}`);
  };
  
  return (
    <div className="w-full">
      {/* Upper part with image - clickable */}
      <div 
        className={`relative w-full h-[250px] sm:h-[220px] mb-3 sm:mb-4 transition-transform duration-200 ${isCardHovered ? 'scale-[1.03]' : ''} cursor-pointer`}
        onClick={handleEventImageClick}
        onMouseEnter={() => setIsCardHovered(true)}
        onMouseLeave={() => setIsCardHovered(false)}
      >
        <div className="w-full h-full rounded-[20px] overflow-hidden">
          <div 
            className="w-full h-full bg-cover bg-center rounded-[20px]"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 72.14%, rgba(0, 0, 0, 0.35) 82.14%), url(${imgSrc})`,
            }}
          >
            <div className="flex flex-col justify-end h-full p-3 sm:p-4">
              <div className="flex items-center bg-white bg-opacity-80 rounded-full px-3 py-1.5 w-fit">
                <span className="text-gray-700 mr-1">👤</span>
                <span className="text-xs font-normal">{event.participants.current}/{event.participants.total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lower part - not clickable */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <h3 className="text-base font-medium leading-[24px] mb-1">{event.title}</h3>
          <p className="text-sm leading-[20px] text-[#919191]">{event.location}</p>
          <p className="text-sm leading-[20px] text-[#919191]">{event.date}, {event.time}</p>
          <p className="text-base font-medium leading-[24px]">
            {event.isFree ? (
              <span className="text-green-600">Free</span>
            ) : (
              <span>{event.price} ₽</span>
            )}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <div 
              className={`flex items-center gap-2 ${isHostHovered ? 'text-green-600' : ''} hover:text-green-600 transition-colors cursor-pointer`}
              onClick={handleHostClick}
              onMouseEnter={() => setIsHostHovered(true)}
              onMouseLeave={() => setIsHostHovered(false)}
            >
              <div className={`w-7 h-7 rounded-full overflow-hidden ${isHostHovered ? 'ring-1 ring-green-500' : ''}`}>
                <img 
                  src={avatarSrc} 
                  alt={event.host.name}
                  className="w-full h-full object-cover"
                  onError={handleAvatarError}
                />
              </div>
              <span className="text-sm font-normal leading-[20px]">{event.host.name}</span>
            </div>
            <div className="flex items-end gap-1">
              <span className="text-sm leading-[18px]">⭐️</span>
              <span className="text-sm leading-[20px]">{event.host.rating}</span>
            </div>
          </div>
          
          <p className="text-sm leading-[18px] text-[#919191] line-clamp-2 overflow-hidden text-ellipsis">
            {event.eventDescription || "Looking for players to join a friendly match. Come train and have fun!"}
          </p>
        </div>
        
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap gap-2">
            {event.amenities.map((amenity, index) => (
              <span key={index} className="text-xs leading-[18px] bg-[#E8E8E8] px-3 py-1 rounded-full flex items-center justify-center">
                {amenity}
              </span>
            ))}
          </div>
          
          <div 
            className="mt-4"
            onMouseEnter={() => setIsCardHovered(true)}
            onMouseLeave={() => setIsCardHovered(false)}
          >
            <button 
              className="w-full h-12 bg-green-100 text-green-800 text-base font-medium rounded-full hover:bg-green-200 transition-colors cursor-pointer"
              onClick={handleJoinClick}
            >
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard; 