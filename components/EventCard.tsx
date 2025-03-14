import { EventCardProps } from '../types';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const EventCard = ({ event }: EventCardProps) => {
  const router = useRouter();
  // Универсальное изображение-заглушка
  const placeholderImage = "https://picsum.photos/seed/event/800/600";
  const placeholderAvatar = "https://picsum.photos/seed/avatar/150/150";
  
  const [imgSrc, setImgSrc] = useState(event.image);
  const [avatarSrc, setAvatarSrc] = useState(event.host.photo);
  const [isHostHovered, setIsHostHovered] = useState(false);
  // Добавляем состояние для отслеживания наведения на изображение или кнопку Join
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
    e.stopPropagation(); // Останавливаем всплытие события
    router.push(`/event/${event.id}?join=true`); // Переходим на страницу ивента с параметром join
  };
  
  const handleHostClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Останавливаем всплытие события
    
    // Проверяем, что у хоста есть id, и перенаправляем на его страницу профиля
    if (event.host.id) {
      router.push(`/profile/${event.host.id}`);
    }
  };
  
  return (
    <div className="w-[210px]">
      {/* Верхняя часть с изображением - кликабельная */}
      <div 
        className={`relative w-full h-[200px] mb-[10px] transition-transform duration-200 ${isCardHovered ? 'scale-[1.03]' : ''} cursor-pointer`}
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
            <div className="flex flex-col justify-end h-full p-[10px]">
              <div className="flex items-center bg-white bg-opacity-80 rounded-full px-2 py-1 w-fit">
                <span className="text-gray-700 mr-[2px]">👤</span>
                <span className="text-[10px] font-normal">{event.participants.current}/{event.participants.total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Нижняя часть - не кликабельная */}
      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-col">
          <h3 className="text-[13px] font-medium leading-[20px] mb-1">{event.title}</h3>
          <p className="text-[13px] leading-[20px] text-[#919191]">{event.location}</p>
          <p className="text-[13px] leading-[20px] text-[#919191]">{event.date}, {event.time}</p>
          <p className="text-[13px] font-medium leading-[20px]">
            {event.isFree ? (
              <span className="text-green-600">Free</span>
            ) : (
              <span>{event.price} ₽</span>
            )}
          </p>
        </div>

        <div className="flex flex-col gap-[4px]">
          <div className="flex justify-between items-center">
            <div 
              className={`flex items-center gap-[5px] ${isHostHovered ? 'text-green-600' : ''} hover:text-green-600 transition-colors cursor-pointer`}
              onClick={handleHostClick}
              onMouseEnter={() => setIsHostHovered(true)}
              onMouseLeave={() => setIsHostHovered(false)}
            >
              <div className={`w-[20px] h-[20px] rounded-full overflow-hidden ${isHostHovered ? 'ring-1 ring-green-500' : ''}`}>
                <img 
                  src={avatarSrc} 
                  alt={event.host.name}
                  className="w-full h-full object-cover"
                  onError={handleAvatarError}
                />
              </div>
              <span className="text-[13px] font-normal leading-[20px]">{event.host.name}</span>
            </div>
            <div className="flex items-end gap-[2px]">
              <span className="text-[12.29px] leading-[18px]">⭐️</span>
              <span className="text-[13px] leading-[20px]">{event.host.rating}</span>
            </div>
          </div>
          
          <p className="text-[11px] leading-[15px] text-[#919191] line-clamp-2 overflow-hidden text-ellipsis">
            {event.eventDescription || "Looking for players to join a friendly match. Come train and have fun!"}
          </p>
        </div>
        
        <div className="flex flex-col gap-[4px]">
          <div className="flex flex-wrap gap-[5px]">
            {event.amenities.map((amenity, index) => (
              <span key={index} className="text-[10px] leading-[15px] bg-[#E8E8E8] px-[6px] py-0 rounded-full flex items-center justify-center">
                {amenity}
              </span>
            ))}
          </div>
          
          <div 
            className="mt-[20px]"
            onMouseEnter={() => setIsCardHovered(true)}
            onMouseLeave={() => setIsCardHovered(false)}
          >
            <button 
              className="w-full h-[30px] bg-green-100 text-green-800 text-[13px] font-medium rounded-full hover:bg-green-200 transition-colors cursor-pointer"
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