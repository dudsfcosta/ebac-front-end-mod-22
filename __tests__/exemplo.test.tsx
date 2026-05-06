import { describe, expect, it } from '@jest/globals';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

// Componente para garantir que a configuração do Jest e do React Testing Library está funcionando.
const ComponenteSimples = () => <h1>Olá, Testes!</h1>;

describe('Teste de Exemplo para CI/CD', () => {
    it('deve renderizar o componente corretamente', () => {
        // 1. Renderiza o componente na memória
        render(<ComponenteSimples />);

        // 2. Busca o elemento <h1> na tela
        const titulo = screen.getByRole('heading', { level: 1 });

        // 3. Verifica se o texto do elemento é o esperado
        expect(titulo).toHaveTextContent('Olá, Testes!');
    });
});