import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import { events } from '../../data/events';
import { Event } from '../../types';

interface EventPageProps {
  event: Event | null;
}

const EventPage: NextPage<EventPageProps> = ({ event }) => {
  const router = useRouter();
  const [joining, setJoining] = useState(false);
  const [joinStatus, setJoinStatus] = useState<{ success: boolean; message: string } | null>(null);

  // Проверяем параметр join при загрузке компонента
  useEffect(() => {
    if (router.query.join === 'true' && event && !joining && !joinStatus) {
      handleJoinEvent();
    }
  }, [router.query, event]);

  // Если страница загружается или ивент не найден
  if (router.isFallback || !event) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-xl">Загрузка...</p>
        </div>
      </Layout>
    );
  }

  const handleJoinEvent = async () => {
    try {
      setJoining(true);
      setJoinStatus(null);

      // Удаляем параметр join из URL, чтобы при обновлении страницы не происходило повторного запроса
      if (router.query.join) {
        const { join, ...query } = router.query;
        router.replace({ pathname: router.pathname, query }, undefined, { shallow: true });
      }

      const response = await fetch('/api/join-event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventId: event.id,
          // userId будет добавлен когда появится авторизация
        }),
      });

      const data = await response.json();
      
      setJoinStatus({
        success: data.success,
        message: data.message,
      });
    } catch (error) {
      setJoinStatus({
        success: false,
        message: 'Произошла ошибка при обработке вашего запроса',
      });
    } finally {
      setJoining(false);
    }
  };

  return (
    <Layout>
      <Head>
        <title>{event.title} | Komoti</title>
        <meta name="description" content={event.eventDescription || `Подробная информация о мероприятии ${event.title}`} />
      </Head>

      <div className="pt-[100px] pb-[50px] max-w-7xl mx-auto px-4">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-green-600 transition-colors">
            <span className="mr-2">←</span>
            <span>Вернуться на главную</span>
          </Link>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Левая колонка с изображением и основной информацией */}
          <div className="w-full md:w-2/3">
            <div className="relative w-full h-[300px] md:h-[400px] mb-6 rounded-[20px] overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center rounded-[20px]"
                style={{
                  backgroundImage: `url(${event.image})`,
                }}
              />
            </div>
            
            <h1 className="text-2xl md:text-3xl font-bold mb-4">{event.title}</h1>
            
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <span className="mr-2">📍</span>
                <p className="text-md">{event.location}, {event.address}</p>
              </div>
              <div className="flex items-center mb-2">
                <span className="mr-2">📅</span>
                <p className="text-md">{event.date}, {event.time}</p>
              </div>
              <div className="flex items-center">
                <span className="mr-2">💰</span>
                <p className="text-md font-medium">
                  {event.isFree ? (
                    <span className="text-green-600">Бесплатно</span>
                  ) : (
                    <span>{event.price} ₽</span>
                  )}
                </p>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Описание</h2>
              <p className="text-gray-700 whitespace-pre-line">
                {event.eventDescription || "Детальное описание отсутствует."}
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Удобства</h2>
              <div className="flex flex-wrap gap-2">
                {event.amenities.map((amenity, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Правая колонка с информацией о хосте и участии */}
          <div className="w-full md:w-1/3">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
              <h2 className="text-xl font-semibold mb-4">Организатор</h2>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                  <img 
                    src={event.host.photo} 
                    alt={event.host.name}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <p className="font-medium">{event.host.name}</p>
                  <div className="flex items-center">
                    <span className="text-sm mr-1">⭐️</span>
                    <span className="text-sm">{event.host.rating}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
              <h2 className="text-xl font-semibold mb-4">Участники</h2>
              <div className="flex items-center justify-between mb-2">
                <span>Текущее количество:</span>
                <span className="font-medium">{event.participants.current}</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span>Всего мест:</span>
                <span className="font-medium">{event.participants.total}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                <div 
                  className="bg-green-500 h-2 rounded-full" 
                  style={{ width: `${(event.participants.current / event.participants.total) * 100}%` }}
                />
              </div>
              
              {joinStatus && (
                <div className={`p-3 mb-4 rounded-lg ${joinStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {joinStatus.message}
                </div>
              )}
              
              <button 
                className={`w-full py-3 ${
                  joining 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-green-600 hover:bg-green-700 cursor-pointer'
                } text-white font-medium rounded-full transition-colors`}
                onClick={handleJoinEvent}
                disabled={joining}
              >
                {joining ? 'Обработка...' : 'Присоединиться'}
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold mb-4">Поделиться</h2>
              <div className="flex gap-3">
                <button className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                  <span>📱</span>
                </button>
                <button className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                  <span>📧</span>
                </button>
                <button className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                  <span>🔗</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = events.map((event) => ({
    params: { id: event.id },
  }));
  
  return {
    paths,
    fallback: false, // возвращает 404 для неизвестных ID
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  const event = events.find((e) => e.id === id) || null;
  
  return {
    props: {
      event,
    },
  };
};

export default EventPage; 