import { spawn } from 'child_process';

console.log('\x1b[36m%s\x1b[0m', '=====================================================');
console.log('\x1b[36m%s\x1b[0m', '🚀 Launching VisaMedicals Pro (API Server & Frontend)');
console.log('\x1b[36m%s\x1b[0m', '=====================================================');

// 1. Start Node API Server on port 5000
const server = spawn('node', ['server/index.js'], { stdio: 'inherit', shell: true });

// 2. Start Vite Frontend Server on port 5173
const vite = spawn('npx', ['vite', '--port', '5173', '--host'], { stdio: 'inherit', shell: true });

// Clean exit handling
process.on('SIGINT', () => {
  server.kill();
  vite.kill();
  process.exit();
});
