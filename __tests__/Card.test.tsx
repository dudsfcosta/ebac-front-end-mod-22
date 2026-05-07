import { describe, expect, it, beforeAll } from '@jest/globals';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Card from "@/app/components/Card";
// @ts-expect-error usando o tipo "Filme" para filtrar erros nos testes
import Filme from "@/types/types";

// 1. Configurando a variável de ambiente antes do teste rodar
// Placeholder para garantir que o Jest "use" a variável de ambiente, já que
// o componente usa process.env.NEXT_PUBLIC_TMDB_API_IMG_URL.
beforeAll(() => {
    process.env.NEXT_PUBLIC_TMDB_API_IMG_URL = 'https://placehold.co/';
});

// 2. Criando dados "falsos" (mocks) para os testes
const mockFilmeCurto = {
    id: 123,
    title: 'O Poderoso Chefão',
    poster_path: '600x400',
    overview: 'Uma verdadeira obra prima do cinema mundial.',
    vote_average: 9.2,
    released_date:""
} as Filme;

const mockFilmeLongo = {
    id: 456,
    title: 'O Senhor dos Anéis',
    poster_path: '/600x400',
    // Criando uma string  para testar a substring
    overview: 'Um anel para a todos governar, um anel para encontrá-los, um anel para a todos trazer e na escuridão aprisioná-los, na Terra de Mordor onde as Sombras se deitam. '.repeat(3),
    vote_average: 8.9,
    released_date:""
} as Filme;

describe('Componente Card', () => {

    it('deve renderizar o título, a imagem e a nota corretamente', () => {
        render(<Card key={mockFilmeCurto.id} filme={mockFilmeCurto} />);

        // Verifica o título (<h3>)
        expect(screen.getByRole('heading', { level: 3, name: 'O Poderoso Chefão' })).toBeInTheDocument();

        // Verifica a nota (rating)
        expect(screen.getByText('Rating: 9.2')).toBeInTheDocument();

        // Verifica a imagem: busca pelo Alt e depois confere se o Src juntou a variável de ambiente + o poster
        const imagem = screen.getByAltText('poster do filme O Poderoso Chefão');
        expect(imagem).toBeInTheDocument();
        expect(imagem).toHaveAttribute('src', 'https://placehold.co/600x400');
    });

    it('deve envolver o card com um Link para a página de detalhes do filme', () => {
        render(<Card key={mockFilmeCurto.id} filme={mockFilmeCurto} />);

        // O Next.js <Link> renderiza uma tag <a> por baixo dos panos
        const link = screen.getByRole('link');
        // Verifica se a URL do link aponta para o ID correto do filme
        expect(link).toHaveAttribute('href', '/filmes/123');
    });

    it('deve renderizar a sinopse inteira se for menor que 256 caracteres', () => {
        render(<Card key={mockFilmeCurto.id} filme={mockFilmeCurto} />);
        expect(screen.getByText('Uma verdadeira obra prima do cinema mundial.')).toBeInTheDocument();
    });

    it('deve truncar a sinopse e adicionar "..." se tiver 256 caracteres ou mais', () => {
        render(<Card key={mockFilmeLongo.id} filme={mockFilmeLongo} />);

        // Prevê qual deve ser a substring
        const textoEsperado = mockFilmeLongo.overview.substring(0, 253) + '...';

        // Verifica se o texto encurtado está na tela
        expect(screen.getByText(textoEsperado)).toBeInTheDocument();
    });

});