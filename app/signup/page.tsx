"use client";
import { FormEvent, useState } from "react";
import { supabase } from "../lib/supabase";
import { useRouter } from "next/navigation";

function Signup() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const router = useRouter();

  const login = async (e: FormEvent) => {
    e.preventDefault();
    try {
      let { data: dataUser, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (error) {
        setSuccessMessage(
          "We're experiencing a high volume of requests. Please try again shortly."
        );
        throw new Error(error.message);
      }

      if (dataUser) {
        console.log(dataUser);
        setSuccessMessage(`An email has been sent to ${email}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={login}>
      <div>
        <label htmlFor="email">email</label>
        <input
          className="border border-black"
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input
          className="border border-black"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <p>{successMessage}</p>
      <button>signup</button>
    </form>
  );
}

export default Signup;

// "use client";

// import Link from "next/link";
// import { useRouter } from "next/navigation";

// function Home() {
//   const router = useRouter();
//   return (
//     <div>
//       <div>
//         <Link href="/login">login</Link>
//         <Link href="signup">sign up</Link>
//       </div>
//       <div>
//         <button onClick={() => router.push("/overview/addLink")}>
//           start adding your link
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Home;
