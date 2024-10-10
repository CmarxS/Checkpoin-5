import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold mb-4 text-pink-900">404</h1>
      <p className="text-2xl mb-8 text-pink-700">Página não encontrada</p>
      <Link href="/home" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Voltar para Home
      </Link>
    </div>
  );
}
export default NotFound