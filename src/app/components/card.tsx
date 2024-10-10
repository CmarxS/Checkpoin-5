import { Noticia } from '../types/noticia';

interface CardNoticiaProps {
  noticia: Noticia;
}

const CardNoticia = ({ noticia }: CardNoticiaProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full h-64 object-cover" src={noticia.imagem} alt={noticia.titulo} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{noticia.titulo}</div>
        <p className="text-gray-700 text-base">{noticia.conteudo.substring(0, 50)}...</p>
        <p className="mt-2 text-sm text-gray-600">Categorias: {noticia.categorias.join(', ')}</p>
      </div>
    </div>
  );
};

export default CardNoticia;