'use client';

import { Comentario } from '../types/noticia';

interface ComentariosProps {
  comentarios: Comentario[];
}

const Comentarios = ({ comentarios }: ComentariosProps) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Comentários</h2>
      {comentarios.length > 0 ? (
        <ul>
          {comentarios.map((comentario, index) => (
            <li key={index} className="mb-4">
              <p className="font-semibold">{comentario.nome}</p>
              <p>{comentario.texto}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum comentário encontrado.</p>
      )}
    </div>
  );
};

export default Comentarios;
