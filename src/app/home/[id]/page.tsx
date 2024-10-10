import { getNoticiaById } from '@/app/services/noticias';
import Link from 'next/link';
import Comentarios from '@/app/components/comentario';

interface NoticiaPageProps {
  params: {
    id: string;
  };
}

const getNoticia = async (id: string) => {
  const noticia = getNoticiaById(Number(id)); 
  return noticia;
};

const NoticiaPage = async ({ params }: NoticiaPageProps) => {
  const noticia = await getNoticia(params.id);

  if (!noticia) {
    return <p>Notícia não encontrada</p>;
  }

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">{noticia.titulo}</h1>
      <img src={noticia.imagem} alt={noticia.titulo} className="mb-4 w-2/5 h-auto" />
      <p className="mb-4">{noticia.conteudo}</p>

      <Link href="/home" className="text-blue-500 underline">
        Voltar para Home
      </Link>

      <Comentarios comentarios={noticia.comentarios} />
    </div>
  );
};

export default NoticiaPage;
