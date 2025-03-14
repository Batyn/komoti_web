import { EventCardProps } from '../types';
import { useState } from 'react';

const EventCard = ({ event }: EventCardProps) => {
  // Универсальное изображение-заглушка
  const placeholderImage = "https://picsum.photos/seed/event/800/600";
  const [imgSrc, setImgSrc] = useState(event.image);
  
  const handleImageError = () => {
    setImgSrc(placeholderImage);
  };
  
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <img 
          src={imgSrc} 
          alt={event.title}
          className="w-full h-full object-cover rounded-t-xl"
          onError={handleImageError}
        />
        <div className="absolute bottom-2 left-2 bg-white bg-opacity-80 rounded-full px-2 py-1 text-xs flex items-center">
          <span className="text-gray-700">👤</span>
          <span className="ml-1 font-medium">{event.participants.current}/{event.participants.total}</span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold mb-1">{event.title}</h3>
        <p className="text-gray-600 text-sm mb-3">{event.description}</p>
        
        <div className="flex justify-between items-center mb-3">
          <div className="flex flex-col">
            <p className="text-sm text-gray-600">{event.date}, {event.time}</p>
          </div>
          <div className="font-bold">
            {event.isFree ? (
              <span className="text-green-600">Free</span>
            ) : (
              <span>{event.price} ₽</span>
            )}
          </div>
        </div>

        <div className="flex items-center mb-3">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden mr-2">
              {/* Здесь может быть аватар хоста */}
              <div className="w-full h-full flex items-center justify-center text-xs">👤</div>
            </div>
            <div>
              <p className="text-sm font-medium">{event.host.name}</p>
              <div className="flex items-center">
                <span className="text-yellow-400 mr-1">★</span>
                <span className="text-sm">{event.host.rating}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          {event.amenities.map((amenity, index) => (
            <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
              {amenity}
            </span>
          ))}
        </div>
        
        <p className="text-sm text-gray-500 mb-2">
          Looking for players to join a friendly match. Come train and have fun!
        </p>
        
        <button className="w-full btn btn-primary mt-2">
          Подробнее
        </button>
      </div>
    </div>
  );
};

export default EventCard; 