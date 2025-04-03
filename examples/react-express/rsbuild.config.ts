import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  output: {
    assetPrefix: '/example/react-express-example',
  },
  server: {
    port: 3002,
  },
});
