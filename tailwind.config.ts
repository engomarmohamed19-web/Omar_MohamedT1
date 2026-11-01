import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { navy: '#0B1220', cyan: '#67E8F9', teal: '#2DD4BF' } } }, plugins: [] };
export default config;
