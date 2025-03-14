import { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import UserProfile from '../../components/UserProfile';
import { users } from '../../data/users';
import { User } from '../../types';

interface ProfilePageProps {
  user: User | null;
}

const ProfilePage: NextPage<ProfilePageProps> = ({ user }) => {
  const router = useRouter();
  
  // Если пользователь не найден, показываем сообщение об ошибке
  if (!user) {
    return (
      <Layout>
        <Head>
          <title>Пользователь не найден | Komoti</title>
          <meta name="description" content="Пользователь не найден на Komoti" />
        </Head>
        
        <div className="py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Пользователь не найден</h1>
          <p className="text-gray-600 mb-8">Извините, запрашиваемый профиль не существует или был удален.</p>
          <button 
            onClick={() => router.push('/')}
            className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
          >
            Вернуться на главную
          </button>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <Head>
        <title>{user.name} | Профиль | Komoti</title>
        <meta name="description" content={`Профиль пользователя ${user.name} на Komoti`} />
      </Head>
      
      <UserProfile user={user} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params || {};
  
  // Находим пользователя по id
  const user = users.find(u => u.id === id);
  
  // Если пользователь не найден, возвращаем null
  if (!user) {
    console.log(`Пользователь с id ${id} не найден`);
  }
  
  return {
    props: {
      user: user || null,
    },
  };
};

export default ProfilePage; 