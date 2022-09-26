import Nav from './nav'
import Footer from './footer'
import Form from './form'
import Price from './pricecards';
import Card from './card';
import { Player } from '@lottiefiles/react-lottie-player';


export default function Community() {
    return (
        <>
        <Nav />

        <main className="relative bg-white py-16">
            <div className="absolute inset-x-0 top-0 hidden h-1/2 bg-gray-50 lg:block" aria-hidden="true"></div>
            <div className="mx-auto max-w-7xl bg-indigo-600 lg:bg-transparent lg:px-8">
                <div className="lg:grid lg:grid-cols-12">
                    <div className="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
                        <div className="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden" aria-hidden="true"></div>
                        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                            <div className=''> 
                                <Player
                                src='https://assets6.lottiefiles.com/packages/lf20_gNCP2JOT1l.json'
                                className=''
                                background='transparent'
                                loop={true}
                                autoplay={true} >
                                </Player>
                            </div>
                        </div>
                    </div>
                    <div className="relative bg-slate-900 lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
                        <div className="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block" aria-hidden="true">
                            <svg className="absolute bottom-full left-full translate-y-1/3 -translate-x-2/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
                                <defs>
                                    <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                        <rect x="0" y="0" width="4" height="4" className="text-indigo-500" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                            </svg>
                            <svg className="absolute top-full -translate-y-1/3 -translate-x-1/3 transform xl:-translate-y-1/2" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
                                <defs>
                                    <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                        <rect x="0" y="0" width="4" height="4" className="text-indigo-500" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                            </svg>
                        </div>
                        <div className="relative mx-auto max-w-md space-y-6 py-12 px-4 sm:max-w-3xl sm:py-16 sm:px-6 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
                            <h2 className="text-3xl font-bold tracking-tight text-white" id="join-heading">
                                Join Our Community
                            </h2>
                            <p className="text-lg text-white lg:w-3/4">
                                Independent creatives, designers and developers who are passionate about helping our community grow.
                                <span className='text-indigo-500'> Hablamos español</span>                            
                            </p>
                            <a href="/pricing" className="block w-full rounded-md border border-transparent bg-white py-3 px-5 text-center text-base font-medium text-indigo-700 shadow-md hover:bg-gray-50 sm:inline-block sm:w-auto">
                                Let's Connect 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <Card />

        <main className="overflow-hidden bg-gray-50">
            <div className="relative mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
                <svg className="absolute top-0 left-full -translate-x-1/2 -translate-y-3/4 transform lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
                    <defs>
                        <pattern id="8b1b5f72-e944-4457-af67-0c6d15a99f38" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="404" height="784" fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
                </svg>
                <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
                    <div className="lg:col-span-1">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">VIVA Web Design</h2>
                        <span className='block text-indigo-600 text-lg md:text-xl'>Your idea brought to life</span>
                    </div>
                    <dl className="mt-10 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:space-y-0 lg:col-span-2 lg:mt-0">
                        <div>
                            <dt>
                                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                                    {/* <!-- Heroicon mobile --> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                    </svg>
                                </div>
                                <p className="mt-5 text-lg font-medium leading-6 text-gray-900">Responsive Web Design</p>
                            </dt>
                            <dd className="mt-2 text-base text-gray-500">
                                Built into every design and built for every screen size. Your website will look great on any device and will respond to changing screen sizes in real time. 
                            </dd>
                        </div>
                        <div>
                            <dt>
                                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                                    {/* <!-- Heroicon globe --> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                    </svg>
                                </div>
                                <p className="mt-5 text-lg font-medium leading-6 text-gray-900">Search Engine Optimization</p>
                            </dt>
                            <dd className="mt-2 text-base text-gray-500">
                                With updates directly from google search central, we utilize the latest google search techniques to give your idea the platform it needs to grow.
                            </dd>
                        </div>
                        <div>
                            <dt>
                                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                                    {/* <!-- Heroicon bolt --> */}
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                    </svg>
                                </div>
                                <p className="mt-5 text-lg font-medium leading-6 text-gray-900">Design | Develop | Animation</p>
                            </dt>
                            <dd className="mt-2 text-base text-gray-500">
                                Our design tools give our developers the creative platform to challenge themselves, experient and continue to learn new techniques.
                            </dd>
                        </div>
                        <div>
                            <dt>
                                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                                    {/* <!-- Heroicon store front --> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                                    </svg>
                                </div>
                                <p className="mt-5 text-lg font-medium leading-6 text-gray-900">Headless CMS</p>
                            </dt>
                            <dd className="mt-2 text-base text-gray-500">
                                Headless gives us the creative freedom to design and the CMS opens the door for managing your content, your way 
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </main>

        <Price />
        <Form />

        <main className="relative bg-slate-900">
            <div className="absolute bottom-0 h-80 w-full xl:inset-0 xl:h-full">
                <div className="h-full w-full xl:grid xl:grid-cols-2">
                    <div className="h-full xl:relative xl:col-start-2">
                        <img 
                            className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0" 
                            src="right.png" 
                            alt="People working on laptops"
                        />
                        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"></div>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
                <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
                    <h2 className="text-base font-semibold text-indigo-500">
                        VIVA Web Design
                    </h2>
                    <p className="mt-3 text-3xl font-bold tracking-tight text-white">
                        Create Your Own Path
                    </p>
                    <p className="mt-5 text-lg text-gray-300">
                        You have great ideas and we want you to try them, lots of them. 
                        We can help bring your ideas to life and we can help you do it quickly. 
                    </p>
                    <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                        <p>
                            <span className="block text-2xl font-bold text-white">Transparency</span>
                            <span className="mt-1 block text-base text-gray-300">The future is transparency and that's how we run our business.</span>
                        </p>
                        <p>
                            <span className="block text-2xl font-bold text-white">Your Site, Your Way</span>
                            <span className="mt-1 block text-base text-gray-300"> Listen, collaborate and build. Our goal is to bring your idea to life.</span>
                        </p>
                        <p>
                            <span className="block text-2xl font-bold text-white">Community</span>
                            <span className="mt-1 block text-base text-gray-300">Network with our growing Community for your future needs.</span>
                        </p>
                        <p>
                            <span className="block text-2xl font-bold text-white">VIVA+</span>
                            <span className="mt-1 block text-base text-gray-300">With our yearly subscription, gain access to seasonal content updates.</span>
                        </p>
                    </div>
                </div>
            </div>
        </main>

        <main className="bg-slate-900">
            <div className="mx-auto md:max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    <span className="">Share Your Work </span>
                    <span className="block text-indigo-500">Someone Out there needs it</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <a href="/contact" className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-500 px-5 py-3 text-base font-medium text-white hover:bg-slate-700">Get started</a>
                    </div>
                    <div className="ml-3 inline-flex rounded-md shadow">
                        <a href="/community" className="inline-flex items-center justify-center rounded-md border border-slate-900 px-5 py-3 text-base font-medium text-slate-900 hover:bg-slate-200">Learn more</a>
                    </div>
                </div>
            </div>
        </main>

        <Footer />
        </>
    );
}

/* 
<main class="bg-white md:border-b md:border-gray-900">
<div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
<p class="text-center text-lg font-semibold text-gray-600">
    Trusted by the San Antonio Community
</p>
<div class="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
    <div class="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
        <img 
            class="w-40 md:w-44" 
            src="./ponce.png" 
            alt="Workcation"
        />
    </div>
    <div class="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
        <img 
            class="w-40 md:w-44" 
            src="./logo.png" 
            alt="Mirage"
        />
    </div>
    <div class="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
        <img 
            class="w-40 md:w-44" 
            src="bl.png" 
            alt="Tuple"
        />
    </div>
    <div class="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
        <img 
            class="max-h-12" 
            src="https://tailwindui.com/img/logos/laravel-logo-gray-400.svg" 
            alt="Laravel"
        />
    </div>
    <div class="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
        <img 
            class="max-h-12" 
            src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" 
            alt="StaticKit"
        />
    </div>
    <div class="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
        <img 
            class="max-h-12" 
            src="https://tailwindui.com/img/logos/statamic-logo-gray-400.svg" 
            alt="Statamic"
        />
    </div>
</div>
</div>
</main> */