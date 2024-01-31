import Image from "next/image";

export default function Home() {
  return (
    <main id="main" className="h-screen grid place-content-center bg-slate-900">
      <h1 id="mainHeadingText" className="grid place-content-center text-4xl font-bold text-white">TeaTalks</h1>
      <div id="mainMessageBox" className="size-96 mt-10 mx-10 my-2 p-8 text-right border-2">
        <p>This Is A Message!</p>
      </div>
      <div id="mainControls" className="grid place-content-center">
        <input type="text" id="messageInpBox" className="m-2 h-8 text-gray-500 rounded-xl" placeholder="Chat Here!"/>
      <button id="sendMessageBtn" className="m-2 border-2 w-50 h-10 rounded-full">Send Message</button>
      </div>
    </main>
  );
}
