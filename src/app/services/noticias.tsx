import { Noticia } from '../types/noticia';

export const noticias: Noticia[] = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  titulo: `Notícia ${index + 1}`,
  data: new Date().toISOString(),
  conteudo: `Este é o conteúdo da notícia ${index + 1}. Um resumo breve para simular o conteúdo real das notícias.`,
  imagem: `https://picsum.photos/seed/${index + 1}/300/200`,
  categorias: ['Categoria' + ((index % 3) + 1)], 
  comentarios: [
    { nome: 'Usuário ' + (index % 10 + 1), texto: `Comentário sobre a notícia ${index + 1}` },
    { nome: 'Usuário ' + (index % 5 + 2), texto: `Outro comentário relevante sobre a notícia ${index + 1}` }
  ]
}));

export function getNoticias(page: number, limit: number): Noticia[] {
  const start = (page - 1) * limit;
  const end = start + limit;
  return noticias.slice(start, end);
}

export function getNoticiaById(id: number): Noticia | undefined {
  return noticias.find((noticia) => noticia.id === id);
}
