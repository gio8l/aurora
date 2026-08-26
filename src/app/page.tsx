export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-8">
      <div className="w-full max-w-6xl flex justify-between items-center">
        <div className="space-y-4">
          <h1 className="text-7xl font-bold text-gray-100">
            aurora
          </h1>

          <p className="text-gray-300 text-lg">
            edit description later
          </p>
        </div>

        <div className="text-gray-200 text-lg mr-19">
          <div className="space-y-6">
            <div>
              <p>java: mc.example.com</p>
            </div>

            <div>
              <p>bedrock:</p>
              <p>ip - mc.example.com</p>
              <p>port - XXXXX</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}