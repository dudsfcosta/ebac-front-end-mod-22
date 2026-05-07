# CineLista - Projeto Next.js com CI/CD

Este projeto é uma aplicação de listagem de filmes que consome a API do TMDB (The Movie Database). Ele foi desenvolvido como parte de um desafio técnico para configurar uma pipeline completa de CI/CD (Integração Contínua e Entrega Contínua).

## 🚀 Deploy

O app está disponível no link:
[Cinelista](https://nextjs-cinelista-orpin.vercel.app/)

## 🛠️ Tecnologias Utilizadas

- **Front-end:** [Next.js](https://nextjs.org/), [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** CSS Modules
- **Consumo de API:** [Axios](https://axios-http.com/)
- **Qualidade de Código:** [ESLint](https://eslint.org/)
- **Testes:** [Jest](https://jestjs.io/) e [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- **CI/CD:** [GitHub Actions](https://github.com/features/actions)
- **Hospedagem:** [Vercel](https://vercel.com/)

## 📋 Requisitos de CI/CD Implementados

A pipeline configurada no arquivo `.github/workflows/main.yml` contempla os seguintes estágios obrigatórios:

1.  **Validação de Código:** Execução do ESLint (`npm run lint`).
2.  **Testes Automatizados:** Execução de testes unitários com Jest (`npm run test`).
3.  **Build da Aplicação:** Verificação da compilação do projeto (`npm run build`).
4.  **Deploy Automatizado:** Publicação automática na Vercel a cada push na branch `main`.

## 🔧 Instalação e Uso Local

Para rodar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/dudsfcosta/ebac-front-end-mod-22.git](https://github.com/dudsfcosta/ebac-front-end-mod-22.git)
   ```
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Configure as Variáveis de Ambiente:**
   Crie um arquivo ```.env.local``` na raiz do projeto e adicione suas chaves do TMDB:
   ```bash
   TMDB_API_URL=[https://api.themoviedb.org/3](https://api.themoviedb.org/3)
   TMDB_API_KEY=sua_chave_aqui
   NEXT_PUBLIC_TMDB_API_IMG_URL=[https://image.tmdb.org/t/p/w500](https://image.tmdb.org/t/p/w500)
   ```
4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

## 🧪 Rodando Testes
Para garantir que os componentes estão renderizando corretamente:
```bash
npm run test
```
