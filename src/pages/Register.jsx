import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";

function GoogleIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fill="#4285F4"
        d="M21.35 12.27c0-.72-.06-1.42-.18-2.09H12v3.96h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.91-4.18 2.91-7.26Z"
      />
      <path
        fill="#34A853"
        d="M12 21.82c2.63 0 4.84-.87 6.45-2.36l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.69-1.72-5.46-4.03H3.3v2.53A9.75 9.75 0 0 0 12 21.82Z"
      />
      <path
        fill="#FBBC05"
        d="M6.54 13.9A5.86 5.86 0 0 1 6.23 12c0-.66.11-1.3.31-1.9V7.57H3.3A9.82 9.82 0 0 0 2.18 12c0 1.59.38 3.09 1.12 4.43l3.24-2.53Z"
      />
      <path
        fill="#EA4335"
        d="M12 6.07c1.43 0 2.72.49 3.73 1.45l2.8-2.8C16.83 3.17 14.63 2.18 12 2.18a9.75 9.75 0 0 0-8.7 5.39l3.24 2.53C7.31 7.79 9.46 6.07 12 6.07Z"
      />
    </svg>
  );
}

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!username || !password || !confirmPassword) {
      alert("Semua field wajib diisi!");
      return;
    }

    if (password.length < 6) {
      alert("Kata sandi minimal 6 karakter!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Konfirmasi kata sandi tidak cocok!");
      return;
    }

    localStorage.setItem("chillLoggedIn", "true");
    localStorage.setItem("chillUser", username);

    alert("Pendaftaran berhasil!");

    navigate("/");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      {/* BACKGROUND */}
      <div className="auth-background absolute inset-0" />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/20" />

      {/* REGISTER CARD */}
      <section
        className="
          relative z-10
          mx-auto
          flex min-h-screen
          w-full max-w-[460px]
          items-center
          justify-center
          px-5
        "
      >
        <div
          className="
            w-full
            rounded-xl
            border border-white/10
            bg-[#1b1d1f]/90
            px-6 py-8
            shadow-2xl
            backdrop-blur-xl
            sm:px-8
          "
        >
          {/* LOGO */}
          <div className="mb-5 flex justify-center">
            <img
              src={logo}
              alt="Logo CHILL"
              className="h-[40px] w-auto object-contain"
            />
          </div>

          {/* TITLE */}
          <h1 className="text-center text-[24px] font-semibold text-white">
            Daftar
          </h1>

          <p className="mt-1 text-center text-[14px] text-gray-300">
            Buat akun baru untuk mulai menonton!
          </p>

          {/* FORM */}
          <form
            onSubmit={handleRegister}
            className="mt-7 space-y-4"
          >
            {/* USERNAME */}
            <div>
              <label className="mb-2 block text-xs text-gray-200">
                Username
              </label>

              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Masukkan username"
                className="
                  w-full
                  rounded-full
                  border border-gray-600
                  bg-[#1d1f21]
                  px-4 py-3
                  text-xs text-white
                  outline-none
                  placeholder:text-gray-500
                  transition
                  focus:border-gray-400
                "
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="mb-2 block text-xs text-gray-200">
                Kata Sandi
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan kata sandi"
                  className="
                    w-full
                    rounded-full
                    border border-gray-600
                    bg-[#1d1f21]
                    px-4 py-3
                    pr-12
                    text-xs text-white
                    outline-none
                    placeholder:text-gray-500
                    transition
                    focus:border-gray-400
                  "
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-gray-400
                    hover:text-white
                  "
                >
                  {showPassword ? "◉" : "◌"}
                </button>
              </div>
            </div>

            {/* CONFIRM PASSWORD */}
            <div>
              <label className="mb-2 block text-xs text-gray-200">
                Konfirmasi Kata Sandi
              </label>

              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }
                  placeholder="Konfirmasi kata sandi"
                  className="
                    w-full
                    rounded-full
                    border border-gray-600
                    bg-[#1d1f21]
                    px-4 py-3
                    pr-12
                    text-xs text-white
                    outline-none
                    placeholder:text-gray-500
                    transition
                    focus:border-gray-400
                  "
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-gray-400
                    hover:text-white
                  "
                >
                  {showConfirmPassword ? "◉" : "◌"}
                </button>
              </div>
            </div>

            {/* LOGIN LINK */}
            <div className="pt-1 text-center text-[14px] text-gray-400">
              Sudah punya akun?{" "}
              <Link
                to="/login"
                className="text-white hover:underline"
              >
                Masuk
              </Link>
            </div>

            {/* REGISTER BUTTON */}
            <button
              type="submit"
              className="
                w-full
                rounded-full
                border border-gray-500
                bg-[#4a4d50]
                py-3
                text-xs
                font-medium
                text-white
                transition
                hover:bg-[#5a5d60]
              "
            >
              Daftar
            </button>
          </form>

          {/* DIVIDER */}
          <div
            className="
              my-4
              flex
              items-center
              gap-3
              text-[10px]
              text-gray-500
            "
          >
            <span className="h-px flex-1 bg-gray-700" />
            <span>Atau</span>
            <span className="h-px flex-1 bg-gray-700" />
          </div>

          {/* GOOGLE BUTTON */}
          <button
            type="button"
            className="
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-full
              border border-gray-600
              bg-transparent
              py-3
              text-xs
              text-white
              transition
              hover:bg-white/5
            "
          >
            <GoogleIcon />
            <span>Daftar dengan Google</span>
          </button>
        </div>
      </section>
    </main>
  );
}

export default Register;