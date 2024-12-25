import Link from "next/link";

export default function Recents() {
    return (
      <div className="flex flex-col items-center justify-center min-h-full bg-gray-100">
      <h1 className="text-4xl font-bold text-black mb-4">
        Recents
      </h1>
      <p className="text-xl text-gray-700 mb-6">
        Visit leads route to see available leads
      </p>
      <Link href="/leads" className="text-blue-500 hover:underline">
        Leads
      </Link>
    </div>
    );
  }
  