import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "https://sevakm10.github.io/weather/", // Replace with your GitHub repository name
});