'use client'
import { useState, useEffect } from 'react';
import { Noticia } from '../types/noticia';
import Link from 'next/link';
import { getNoticias } from '../services/noticias';
import CardNoticia from '../components/card';

const HomePage = () => {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [pagina, setPagina] = useState<number>(1); 
  const noticiasPorPagina = 10; 
  const totalNoticias = 50; 
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    try {
      const noticiasPaginadas = getNoticias(pagina, noticiasPorPagina);
      
      if (noticiasPaginadas.length === 0 && pagina > 1) {
        setErro("Não há mais itens");
      } else {
        setErro(null); 
        setNoticias((prevNoticias) => [...prevNoticias, ...noticiasPaginadas]);
      }
    } catch (error) {
      setErro("Erro ao carregar notícias");
    }
  }, [pagina]);

  const carregarMaisNoticias = () => {
    setPagina((prevPagina) => prevPagina + 1); 
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Últimas Notícias</h1>

      {erro && <p className="text-red-500">{erro}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {noticias.map((noticia) => (
          <Link key={noticia.id} href={`/home/${noticia.id}`}>
              <CardNoticia noticia={noticia} />
          </Link>
        ))}
      </div>

      {!erro && noticias.length < totalNoticias && (
        <div className="flex justify-center mt-8">
          <button
            onClick={carregarMaisNoticias}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-md shadow-md transition duration-300 ease-in-out"
          >
            Carregar Mais
          </button>
        </div>
      )}

      {noticias.length >= totalNoticias && (
        <p className="text-center text-gray-500 mt-4">Não há mais itens</p>
      )}
    </div>
  );
};

export default HomePage;
