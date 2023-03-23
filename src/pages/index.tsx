import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>SSDA</title>
        <meta name="description" content="Make your own" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-[url('../../img/landing_bg.jpg')]">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight text-gray-100 md:text-5xl xl:text-6xl">
              Write Your Own.
            </h1>
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight text-gray-100 md:text-5xl xl:text-6xl">
              Make Only One.
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-200 md:text-lg lg:mb-8 lg:text-xl ">
              Its been a long day without you my friend. and i will tell you all about it when i see
              you again.
            </p>

            <button className="inline-flex items-center justify-center rounded bg-blue-600 px-5 py-3 py-2 px-4 text-center text-base font-medium font-bold text-white hover:bg-blue-700">
              Try For Free !
            </button>
          </div>
          <div className="hidden lg:col-span-5 lg:mt-0 lg:flex"></div>
        </div>
      </section>
    </>
  );
};

export default Home;
