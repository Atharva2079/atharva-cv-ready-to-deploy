export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-gray-800 to-black text-white p-4">
      <h1 className="text-5xl font-bold animate-pulse">👋 Hi, I'm Atharva</h1>
      <p className="mt-4 text-lg">AI/ML Enthusiast | AR Developer | Problem Solver</p>
      <button className="mt-6 px-6 py-3 bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-105">
        View My Work
      </button>
    </section>
  );
}