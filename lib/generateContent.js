module.exports = function generateContent() {
  return `// @ts-check
    const app = () => "honey pot for bees ${Math.random()}";
    export default app;
    `;
};
