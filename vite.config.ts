import { defineConfig } from 'vite';

export default defineConfig(async () => {
  const { default: react } = await import('@vitejs/plugin-react-swc');
  return {
    plugins: [react()],
  };
});
