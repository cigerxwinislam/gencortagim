"use client";

import Link from "next/link";
import { useState } from "react";


export default function Ilanver() {
  const [Ilanadı, setIlanadı] = useState("");
 const [Telno, setTelno] = useState("")
  const [Fiyat, setFiyat] = useState("");
  const [error, setError] = useState("");

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (! Ilanadı|| !Fiyat || !Telno) {
      setError("Bütün Alanları Doldurunuz!");
      return;
    }

    try {
      const resIlanvar = await fetch("/api/esnaf/ilanteyit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { Ilanvar } = await resIlanvar.json();

      if (Ilanvar) {
        setError("Böyle bir ilan zaten var");
        return;
      }

      const res = await fetch("/api/esnaf/ilan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Ilanadı,
          Fiyat,
          Telno,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        
      } else {
        console.log("ilan hatası oldu");
      }
    } catch (error) {
      console.log("Hata oluştu : ", error);
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">yeni ilan ver</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setIlanadı (e.target.value)}
            type="text"
            placeholder=""
          />
          

<input
            onChange={(e) => setTelno(e.target.value)}
            type="password"
            place
            holder=""
          />
  <input
            onChange={(e) => setFiyat(e.target.value)}
            type="number"
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
