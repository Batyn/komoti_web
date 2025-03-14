import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../../components/Layout';
import UserProfile from '../../components/UserProfile';
import { getCurrentUser } from '../../data/users';

const ProfilePage: NextPage = () => {
  // В реальном приложении здесь будет получение данных с сервера
  const user = getCurrentUser();
  
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

export default ProfilePage; 