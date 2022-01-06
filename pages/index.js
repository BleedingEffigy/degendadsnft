import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header class="text-gray-400 bg-gray-900 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">

            <span class="ml-3 text-xl">WeedStrainsNFT</span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-white">About</a>
            <a class="mr-5 hover:text-white">Contract</a>
            <a class="mr-5 hover:text-white">OpenSea</a>
          </nav>
          <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Connect
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
        
        <section class="text-gray-400 bg-gray-900 body-font bg-fixed relative min-h-[90vh] w-full" style={{backgroundImage: "url('/weedstrainsnftbg2.png')"}}>
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center min-w-full bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-blue-500/80 min-h-[90vh]">
            <div class=" md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center bg-gray-900 rounded-lg p-4 z-20">
              <h1 class="title-font sm:text-7xl text-5xl mb-4 font-medium p-5 text-white z-50">WEEDSTRAINS NFT
                <br class="hidden lg:inline-block"/><span class='title-font sm:text-6xl text-4xl mb-4 font-medium text-white'>Let's get high together.</span>
              </h1>
              <p class="mb-8 leading-relaxed text-2xl font-bold z-50 text-white/90">
              Find your perfect strain or strains that you already enjoy.
              </p>
              <div class="flex justify-center">
                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Mint</button>
                <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">OpenSea</button>
              </div>
            </div>
            <div class="lg:max-w-2xl lg:w-full md:w-1/2 w-5/6 absolute inset-y-0 -right-2">
              <img class="object-cover object-center rounded-tl-[50%] z-10 min-h-[110vh]" alt="hero" src="8.jpg"/>
            </div>
          </div>
        </section>

      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
