import Image from "next/image";
import img from "../public/img.png";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="mb-10 min-h-screen bg-[url('../public/landing_bg.jpg')]">
        <div>
          <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
            <div className="mr-auto place-self-center pt-16 lg:col-span-7">
              <h1 className="mb-4 max-w-4xl text-5xl font-extrabold leading-none tracking-tight text-gray-100 md:text-6xl xl:text-7xl">
                내 손에서 태어난 글씨
              </h1>
              <h1 className="mb-4 max-w-4xl text-5xl font-extrabold leading-none tracking-tight text-gray-100 md:text-6xl xl:text-7xl">
                단 하나, 그대만의 글씨로.
              </h1>
              <p className="mb-6 max-w-2xl font-light text-gray-200 md:text-lg lg:mb-8 lg:text-xl">
                Creativity is the fuel that ignites innovation and sets the path for extraordinary
                accomplishments.
              </p>
              <Link href="/user/signup">
                <button className="inline-flex items-center justify-center rounded bg-blue-600 px-5 py-3 text-center text-base font-bold text-white hover:bg-blue-700">
                  Try For Free!
                </button>
              </Link>
            </div>
            <div className="hidden lg:col-span-5 lg:mt-0 lg:flex"></div>
          </div>
        </div>
      </section>

      <section className="body-font text-gray-600">
        <div className="container mx-auto flex flex-wrap px-5 py-24">
          <div className="flex w-full flex-wrap items-center justify-center">
            <div className="md:w-1/2 md:py-6 md:pr-8 lg:w-2/5">
              <div className="relative flex pb-12">
                <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                  <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
                </div>
                <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-yellow-500 text-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">
                    STEP 1
                  </h2>
                  <p className="leading-relaxed">
                    회원가입 버튼을 누르고 우리 서비스의 회원이 되세요!
                  </p>
                </div>
              </div>
              <div className="relative flex pb-12">
                <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                  <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
                </div>
                <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-yellow-500 text-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">
                    STEP 2
                  </h2>
                  <p className="leading-relaxed">
                    사이트 상단의 메뉴에 있는 만들기 버튼을 누르세요
                  </p>
                </div>
              </div>
              <div className="relative flex pb-12">
                <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                  <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
                </div>
                <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-yellow-500 text-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">
                    STEP 3
                  </h2>
                  <p className="leading-relaxed">그리기 버튼을 누르면 4X7 그리드가 보입니다</p>
                </div>
              </div>
              <div className="relative flex pb-12">
                <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                  <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
                </div>
                <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-yellow-500 text-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">
                    STEP 4
                  </h2>
                  <p className="leading-relaxed">
                    28개 글자에 해당하는 손글씨를 입력하면 나만의 손글씨가 자동으로 생성됩니다!
                  </p>
                </div>
              </div>
              <div className="relative flex">
                <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-yellow-500 text-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">
                    FINISH
                  </h2>
                  <p className="leading-relaxed">나만의 폰트를 게시판에 자유롭게 공유해보세요</p>
                </div>
              </div>
            </div>
            <Image
              className="mt-12 rounded-lg object-cover object-center md:mt-0 md:w-1/2 lg:w-1/2"
              src={img}
              alt="step"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
