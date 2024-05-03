"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("Bütün Alanları Doldurunuz!");
      return;
    }

    try {
      const resUserExists = await fetch("/api/kullanici/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });


      console.log(resUserExists)

      const { user } = await resUserExists.json();

      if (user) {
        setError("Böyle bir Kullanıcı Zaten Var");
        return;
      }

      const res = await fetch("/api/kullanici/register", {
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
        router.push("/kullanici/app/");
      } else {
        console.log(res);
      }
    } catch (error) {
      console.log(  error);
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Kurumsal Kayıt</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Tam Adınız"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />



         <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Vergi No/TC No"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Şifre Belirleyin"
          />

          <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
            Kayıt Yap
          </button>

          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
          <Link className="text-sm mt-3 text-right" href={"/"}>
            Zaten Hesabın Var Mı? <span className="underline">Giriş Yap</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
