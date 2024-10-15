import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "./heroSection.css";

const navigation = [
  { name: "Features", href: "#", current: false },
  { name: "Why Us", href: "#", current: false },
  { name: "Tokenomics", href: "#", current: false },
  { name: "Roadmap", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HeroSection() {
  return (
    <nav className="relative w-full h-screen ">
      <video
  className="absolute top-0 left-0 w-full h-full object-cover -z-10"
  autoPlay
  muted
  loop
>
  <source src="./assets/-c85c-4755-a1c0-4646ee276bd5.mp4" type="video/mp4" />
  </video>


      <Disclosure as="nav" >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-8 lg:px-8 navBarSmall">
              <div className="relative flex h-16 items-center justify-between pt-10 navBarSmall2">
                <div className="flex items-center justify-start">
                  <div className="flex items-center sm:hidden">
                    <img
                      alt="logo"
                      src="./assets/Group 20.png"
                      className="h-8 w-auto"
                    />
                  </div>
                  <div className="hidden sm:flex items-center">
                    <img
                      alt="logo"
                      src="./assets/Frame 43094.png"
                      className="h-8 w-auto"
                      style={{paddingLeft:"1rem"}}
                    />
                  </div>
                </div>

                <div className="hidden sm:ml-5 sm:block">
                  <div className="flex space-x-4 navigates">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-[#B0FAFFB2]"
                            : "text-gray-300 hover:text-white",
                          "rounded-md px-4 py-2 text-sm font-medium"
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="hidden sm:flex items-center space-x-4">
                  <button
                    type="button"
                    className="relative rounded-full p-4 text-white"
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    className="relative p-2.5 text-black bg-[#CDFCFF] rounded-xl px-4"
                  >
                    WhitePaper
                  </button>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>


      <div className="flex justify-center items-center mt-28 relative z-10">
        <div className="text-center px-4">
          <h1 className="headingH1 text-white text-6xl md:text-7xl sm:text-3xl md:font-medium sm:font-[100] whenClass">
            When Innovation <br />
            <span className="sm:inline block MeetsName">Meets</span>&nbsp;
            <span className="bg-[#B0F9FF] text-[#0B2A2D] rounded-[4rem] px-6 pb-2 font-semibold investmentClass">
              Innovation
            </span>
          </h1>
        </div>
      </div>

      <p className="text-[1.25rem] font-light text-[#B0FAFFB2] text-center  relative z-10">
        Empowering Trading Through Advanced Technology
      </p>

      <div className="text-center mt-7 relative z-10">
        <button className="p-2.5 px-5 text-white rounded-[1rem] hover:text-black font-semibold custom-button">
          Open dApp
        </button>
      </div>
    </nav>
  );
}
