export interface Comentario {
    nome: string;
    texto: string;
  }
  
export interface Noticia {
    id: number;
    titulo: string;
    data: string;
    conteudo: string;
    imagem: string;
    categorias: string[];
    comentarios: Comentario[];
  }
  