import nextJest from 'next/jest.js';

// Fornece o caminho para o aplicativo Next.js para carregar o next.config.js e os arquivos .env
const createJestConfig = nextJest({
    dir: './',
});

// Qualquer configuração personalizada do Jest vai aqui
/** @type {import('jest').Config} */
const config = {
    coverageProvider: 'v8',
    testEnvironment: 'jsdom'
};

// createJestConfig é exportado dessa forma para garantir que o next/jest possa carregar a configuração assíncrona do Next.js
export default createJestConfig(config);