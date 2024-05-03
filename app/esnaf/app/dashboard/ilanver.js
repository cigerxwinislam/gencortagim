"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Ilanver() {
  const [name, setName] = useState("");
 const [Telno, setTelno] = useState("")
  const [Fiyat, setFiyat] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("Bütün Alanları Doldurunuz!");
      return;
    }

    try {
      const resUserExists = await fetch("/api/esnaf/ilanteyit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("Böyle bir ilan zaten var");
        return;
      }

      const res = await fetch("/api/esnaf/ilan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/esnaf/app/dashboard");
      } else {
        console.log("ilan hatası oldu");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">yeni ilan ver</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder=""
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder=""
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder=""
          />

<input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            place
            holder=""
          />
  <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder=""
          />

<input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder=""
          />
          <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
            ilanı yayınla
          </button>

          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

        
        </form>
      </div>
    </div>
  );
}
