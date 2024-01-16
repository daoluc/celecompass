import Image from "next/image";

export default function Home() {
  return (
    <main className="text-[#1C2B62]">
      <div className="text-4xl font-bold text-center p-4 fixed top-0 left-0 min-w-full bg-white bg-opacity-90 border-b-[#E3E3E3] border-b">
        <span className="bg-gradient-to-r from-[#608F9F] to-[#FBB217] inline-block text-transparent bg-clip-text">
          CelesCompass
        </span>
      </div>
      <div className="flex flex-col items-center min-h-screen py-2 gap-3 pt-24">
        <div className="mt-3 text-3xl text-center p-3 grow justify-center font-bold">
          Navigate Payment Compliance with Ease
        </div>

        <p className="text-2xl font-semibold">About Us</p>
        <div>
          <p className="mt-2">Oisín O&apos;Sullivan & Luc Dao</p>
        </div>

        <div className="flex flex-col mt-8 items-center justify-center">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <form className="flex flex-col mt-4 justify-center items-center gap-2">
            <input
              type="text"
              placeholder="Your Name"
              className="border p-2 mr-2 rounded-md text-center"
            />
            <input
              type="email"
              placeholder="Email"
              className="border p-2 mr-2 rounded-md text-center"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-full mt-2"
            >
              Register Interest
            </button>
          </form>
        </div>

        <footer className="w-full text-center py-6 mt-8">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} CelesCompass. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
