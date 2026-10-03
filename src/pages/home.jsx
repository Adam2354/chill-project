import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  VolumeX,
} from "lucide-react";

import logo from "../assets/Logo.png";
import heroImage from "../assets/Duty Afterschool.png";
import poster from "../assets/Sonic 2.jpg";

//Lanjutkan nonton film
import blueLock from "../assets/Bluelock.png"
import dontlookup from "../assets/DontLookUp.png"
import AManCalledOtho from "../assets/AManCalledOtto.png"
import batman from "../assets/batman.png"
import quantuman from "../assets/QuantumMan.png"
import doctorstrange from "../assets/DoctorStrange.png"
import bighero6 from "../assets/BigHero6.png"
import baymax from "../assets/Baymax.png"
import blackadam from "../assets/BlackAdam.png"
import dilan from "../assets/Dilan.png"
import jurassic from "../assets/Jurassic.png"
import megan from "../assets/Megan.png"
import suzume from "../assets/Suzume.png"

//top rating
import littlemermaid from "../assets/Little Mermaid.png"
import gog from "../assets/Gog.png"
import missing from "../assets/Missing.png"
import jurrassicWorld from "../assets/Jurrasic World.png"
import allofus from "../assets/Allofus.png"
import antman from "../assets/Antman.png"
import suzumePost from "../assets/Suzume Post.png"
import sonic from "../assets/Sonic 2.jpg";
import bighero61 from "../assets/Bighero6 Post.png"
import otto from "../assets/Otto.png"
import tomorrowwar from "../assets/Thetomorrowwar.png"
import Dac from "../assets/DAC.png"



/* =========================================================
   DATA DUMMY
   ========================================================= */

const continueWatching = [
  {
    id: 1,
    image : dontlookup,
    title: "Don't Look Up",
    rating: "4.5/5",
  },
  {
    id: 2,
    image : batman,
    title: "The Last of Us",
    rating: "4.2/5",
  },
  {
    id: 3,
    image : blueLock,
    title: "Blue Lock",
    rating: "4.6/5",
    episode: true,
  },
  {
    id: 4,
    image : quantuman,
    title: "Quantum Man",
    rating: "4.4/5",
  },
    {
    id: 5,
    image : bighero6,
    title: "Big Hero 6",
    rating: "4.4/5",
  },
    {
    id: 6,
    image : doctorstrange,
    title: "Doctor Strange",
    rating: "4.4/5",
  },
    {
    id: 7,
    image : AManCalledOtho,
    title: "A Man Called Otto",
    rating: "4.4/5",
  },
    {
    id: 8,
    image : blackadam,
    title: "Black Adam",
    rating: "4.4/5",
  },
    {
    id: 8,
    image : baymax,
    title: "Baymax",
    rating: "4.4/5",
  },
    {
    id: 9,
    image : dilan,
    title: "Dilan",
    rating: "4.4/5",
  },
    {
    id: 10,
    image : megan,
    title: "Megan",
    rating: "4.4/5",
  },
     {
    id: 11,
    image : suzume,
    title: "Suzume",
    rating: "4.8/5",
  },
    {
    id: 12,
    image : jurassic,
    title: "Jurassic World",
    rating: "4.2/5",
  },
  
];

const topRating = [
  {
    id: 1,
    image: suzumePost,
    title: "Suzume",
    rating: "4.8/5",
    episode: true,
  },
  {
    id: 2,
    image: jurrassicWorld,
    title: "Jurassic World",
    rating: "4.7/5",
  },
  {
    id: 3,
    image: sonic,
    title: "Sonic the Hedgehog 2",
    rating: "4.6/5",
  },
  {
    id: 4,
    image: allofus,
    title: "The Last of Us",
    rating: "4.5/5",
    episode: true,
  },
  {
    id: 5,
    image: bighero61,
    title: "Big Hero 6",
    rating: "4.8/5",
    top10: true,
  },
    {
    id: 6,
    image: otto,
    title: "A Man Called Otto",
    rating: "4.7/5",
  },
  {
    id: 7,
    image: tomorrowwar,
    title: "The Tomorrow War",
    rating: "4.6/5",
  },
    {
    id: 8,
    image: tomorrowwar,
    title: "The Tomorrow War",
    rating: "4.6/5",
  },
      {
    id: 9,
    image: tomorrowwar,
    title: "The Tomorrow War",
    rating: "4.6/5",
  },
      {
    id: 10,
    image: tomorrowwar,
    title: "The Tomorrow War",
    rating: "4.6/5",
  },
];

const trending = [
  {
    id: 1,
    image: tomorrowwar,
    title: "The Tomorrow War",
    rating: "4.5/5",
    top10: true,
  },
  {
    id: 2,
    image: antman,
    title: "Ant-Man: Quantumania",
    rating: "4.4/5",
  },
  {
    id: 3,
    image: gog,
    title: "Guardians of the Galaxy",
    rating: "4.7/5",
    top10: true,
  },
  {
    id: 4,
    image: otto,
    title: "The Man Called Otto",
    rating: "4.6/5",
    top10: true,
  },
  {
    id: 5,
    image: littlemermaid,
    title: "The Little Mermaid",
    rating: "4.3/5",
    top10: true,
  },
{
    id: 6,
    image: missing,
    title: "Missing",
    rating: "4.3/5",
    top10: true,
  },
  {
    id: 7,
    image: suzumePost,
    title: "Suzume No Tojimari",
    rating: "4.6/5",
    top10: true,
  },
];

const newRelease = [
  {
    id: 1,
    image: littlemermaid,
    title: "The Little Mermaid",
    rating: "4.3/5",
    top10: true,
  },
  {
    id: 2,
    image: Dac,
    title: "Duty After School",
    rating: "4.8/5",
    episode: true,
  },
  {
    id: 3,
    image: bighero61,
    title: "Big Hero 6",
    rating: "4.7/5",
    top10: true,
  },
  {
    id: 4,
    image: allofus,
    title: "The Last of Us",
    rating: "4.5/5",
    episode: true,
  },
  {
    id: 5,
    image: missing,
    title: "Missing",
    rating: "4.4/5",
  },
    {
    id: 6,
    image: gog,
    title: "Guardians of the Galaxy",
    rating: "4.4/5",
  },
];

/* =========================================================
   MOVIE CARD
   ========================================================= */

function MovieCard({ movie }) {
  return (
    <article className="group relative w-full min-w-0">
      <div className="relative aspect-[2/3] overflow-hidden rounded-[6px] bg-[#25272a]">
        <img
          src={movie.image}
          alt={movie.title}
          className="
            h-full
            w-full
            object-cover
            transition
            duration-300
            group-hover:scale-105
          "
        />

        {movie.episode && (
          <span
            className="
            absolute
            left-[5px]
            top-[5px]
            z-10
            rounded-full
            bg-[#2536a8]
            px-[7px]
            py-[3px]
            text-[8px]
            font-medium
            leading-[7px]
            text-white
            "
          >
            Episode Baru
          </span>
        )}

        {movie.top10 && (
        <span
            className="
            absolute
            right-0
            top-0
            z-10
            flex
            h-[27px]
            w-[20px]
            flex-col
            items-center
            justify-center
            rounded-bl-[5px]
            bg-[#e53935]
            text-white
            "
        >
            <span className="text-[7px] font-medium leading-[8px]">
            Top
            </span>

            <span className="text-[9px] font-bold leading-[14px]">
            10
            </span>
        </span>
        )}
      </div>
    </article>
  );
}

/* =========================================================
   CONTINUE WATCHING CARD
   ========================================================= */

function ContinueCard({ movie }) {
  return (
    <article className="group relative min-w-0">
      <div
        className="
          relative
          aspect-[16/8]
          overflow-hidden
          rounded-[6px]
          bg-[#25272a]
        "
      >
        <img
          src={movie.image}
          alt={movie.title}
          className="
            h-full
            w-full
            object-cover
            transition
            duration-300
            group-hover:scale-105
          "
        />

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            bg-gradient-to-t
            from-black/95
            via-black/60
            to-transparent
            px-[10px]
            pb-[8px]
            pt-[30px]
          "
        >
          <div className="flex items-center justify-between gap-2">
            <span className="truncate text-[10px] text-white">
              {movie.title}
            </span>

            <span className="shrink-0 text-[9px] text-white">
              ★ {movie.rating}
            </span>
          </div>
        </div>

        {movie.episode && (
        <span
            className="
            absolute
            left-[8px]
            top-[8px]
            z-10
            rounded-full
            bg-[#2536a8]
            px-[9px]
            py-[4px]
            text-[8px]
            font-medium
            leading-[10px]
            text-white
            shadow-sm
            "
        >
            Episode Baru
        </span>
        )}
      </div>
    </article>
  );
}

/* =========================================================
   SECTION TITLE
   ========================================================= */

function SectionTitle({ children }) {
  return (
    <h2
      className="
        mb-[14px]
        text-[16px]
        font-semibold
        leading-[20px]
        text-white
        sm:text-[18px]
        sm:leading-[22px]
      "
    >
      {children}
    </h2>
  );
}

/* =========================================================
   CAROUSEL BUTTON
   ========================================================= */

function CarouselButton({ direction, onClick }) {
  const positionClass =
    direction === "left"
      ? "left-[6px] sm:left-[8px]"
      : "right-[6px] sm:right-[8px]";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        absolute
        top-1/2
        z-[50]
        flex
        h-[28px]
        w-[28px]
        -translate-y-1/2
        items-center
        justify-center
        rounded-full
        bg-[#303235]/95
        text-white
        shadow-lg
        transition
        hover:bg-[#45484c]
        sm:h-[32px]
        sm:w-[32px]
        ${positionClass}
      `}
    >
      {direction === "left" ? (
        <ChevronLeft size={17} />
      ) : (
        <ChevronRight size={17} />
      )}
    </button>
  );
}

/* =========================================================
   MOVIE SECTION
   ========================================================= */

function MovieSection({ title, movies }) {
  const scrollRef = useRef(null);

  const scrollMovies = (direction) => {
    const container = scrollRef.current;

    if (!container) return;

    container.scrollLeft += direction === "right" ? 300 : -300;
  };

  return (
    <section className="mt-[28px] sm:mt-[36px]">
      <SectionTitle>{title}</SectionTitle>

      <div className="relative">
        {/* TOMBOL KIRI */}
        <CarouselButton
          direction="left"
          onClick={() => scrollMovies("left")}
        />

        {/* LIST FILM */}
        <div
          ref={scrollRef}
          className="
            movie-scroll
            flex
            gap-[16px]
            overflow-x-auto
            overflow-y-hidden
            scroll-smooth
          "
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
                className="movie-card-wrapper"
            >
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>

        {/* TOMBOL KANAN */}
        <CarouselButton
          direction="right"
          onClick={() => scrollMovies("right")}
        />
      </div>
    </section>
  );
}

/* =========================================================
   HOME
   ========================================================= */

function Home() {
  const continueScrollRef = useRef(null);
  const [profileOpen, setProfileOpen] = useState(false);

  const scrollContinue = (direction) => {
    if (!continueScrollRef.current) return;

    continueScrollRef.current.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen bg-[#18191b] text-white">

      {/* ================= NAVBAR ================= */}

      <nav
        className="
          sticky
          top-0
          z-50
          h-[56px]
          border-b
          border-white/5
          bg-[#171819]
        "
      >
        <div
          className="
            mx-auto
            flex
            h-full
            w-full
            max-w-[1280px]
            items-center
          "
        >
          {/* LOGO */}

          <Link to="/">
            <img
              src={logo}
              alt="CHILL"
              className="
                h-[25px]
                w-auto
                object-contain
                sm:h-[25px]
              "
            />
          </Link>

          {/* MENU */}

          <div
            className="
            ml-[20px]
            flex
            items-center
            gap-[16px]
            sm:ml-[55px]
            sm:gap-[42px]
             "
            
          >
            <Link
              to="/"
              className="
                text-[12px]
                text-white
                transition
                hover:text-gray-300
              "
            >
              Series
            </Link>

            <Link
              to="/"
              className="
                text-[12px]
                text-white
                transition
                hover:text-gray-300
              "
            >
              Film
            </Link>

            <Link
              to="/"
              className="
                text-[12px]
                text-white
                transition
                hover:text-gray-300
              "
            >
              Daftar Saya
            </Link>
          </div>

          {/* PROFILE */}

         {/* PROFILE */}
        <div className="relative ml-auto">
            <button
                type="button"
                onClick={() => setProfileOpen(!profileOpen)}
                className="
                flex
                items-center
                gap-[8px]
                text-gray-300
                "
            >
                <span
                className="
                    flex
                    h-[30px]
                    w-[30px]
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-full
                    border
                    border-white/20
                    bg-[#596274]
                    text-[13px]
                "
                >
                👤
                </span>

                <ChevronDown
                size={15}
                className={`
                    transition-transform
                    duration-200
                    ${profileOpen ? "rotate-180" : ""}
                `}
                />
            </button>

            {profileOpen && (
                <div
                className="
                    absolute
                    right-0
                    top-[40px]
                    z-[100]
                    w-[170px]
                    overflow-hidden
                    rounded-[4px]
                    bg-[#171819]
                    py-[6px]
                    shadow-xl
                    ring-1
                    ring-white/5
                "
                >
                <button
                    type="button"
                    className="
                    flex
                    w-full
                    items-center
                    gap-[12px]
                    px-[14px]
                    py-[10px]
                    text-left
                    text-[12px]
                    text-[#4c5fff]
                    hover:bg-white/5
                    "
                >
                    👤
                    Profil Saya
                </button>

                <button
                    type="button"
                    className="
                    flex
                    w-full
                    items-center
                    gap-[12px]
                    px-[14px]
                    py-[10px]
                    text-left
                    text-[12px]
                    text-gray-200
                    hover:bg-white/5
                    "
                >
                    ★
                    Ubah Premium
                </button>

                <button
                    type="button"
                    onClick={() => {
                    localStorage.removeItem("chillLoggedIn");
                    localStorage.removeItem("chillUser");
                    window.location.href = "/login";
                    }}
                    className="
                    flex
                    w-full
                    items-center
                    gap-[12px]
                    px-[14px]
                    py-[10px]
                    text-left
                    text-[12px]
                    text-gray-200
                    hover:bg-white/5
                    "
                >
                    ⇥
                    Keluar
                </button>
                </div>
            )}
            </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}

      <section
        className="
        relative
        h-[310px]
        w-full
        overflow-hidden
        "
      >
        {/* HERO IMAGE */}

        <img
          src={heroImage}
          alt="Duty After School"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
          "
        />

        {/* HERO OVERLAY */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black/80
            via-black/40
            to-black/5
          "
        />

        {/* BOTTOM GRADIENT */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[190px]
            bg-gradient-to-t
            from-[#18191b]
            to-transparent
          "
        />

        {/* HERO CONTENT */}

        <div
          className="
            relative
            mx-auto
            flex
            h-full
            w-full
            max-w-[1280px]
            items-center
            px-[20px]
        "
        >
          <div className="max-w-[480px]">
            <h1
              className="
            text-[26px]
            font-semibold
            leading-[32px]
            sm:text-[32px]
            sm:leading-[38px]
              "
            >
              Duty After School
            </h1>

            <p
              className="
                mt-[10px]
                max-w-[440px]
                line-clamp-3
                text-[12px]
                leading-[18px]
                text-gray-200
                line-clamp-3
                sm:line-clamp-none
              "
            >
              Sebuah benda tak dikenal mengambil alih
              dunia. Dalam keputusasaan, Departemen
              Pertahanan mulai merekrut lebih banyak
              tentara, termasuk siswa sekolah menengah.
              Mereka pun segera menjadi pejuang garis
              depan perang.
            </p>

            <div className="
                mt-[16px]
                flex
                items-center
                gap-[8px]
                sm:mt-[20px]">
              <button
                type="button"
                className="
                    rounded-full
                    bg-[#1637c9]
                    px-[18px]
                    py-[8px]
                    text-[11px]
                    font-medium
                    text-white
                    transition
                    hover:bg-[#2147e5]
                "
              >
                Mulai
              </button>

              <button
                type="button"
                className="
                    flex
                    items-center
                    gap-[6px]
                    rounded-full
                    bg-[#3b3e41]
                    px-[14px]
                    py-[8px]
                    text-[11px]
                    text-white
                    transition
                    hover:bg-[#4b4e51]
                "
              >
                <span>ⓘ</span>
                Selengkapnya
              </button>

              <span
                className="
                  flex
                  h-[30px]
                  w-[30px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/50
                  text-[9px]
                  text-gray-200
                "
              >
                18+
              </span>
            </div>
          </div>
        </div>

        {/* MUTE */}

        <button
          type="button"
          className="
            absolute
            bottom-[38px]
            right-[24px]
            flex
            h-[32px]
            w-[32px]
            items-center
            justify-center
            rounded-full
            border
            border-white/50
            bg-black/20
            text-white
          "
        >
          <VolumeX size={15} />
        </button>
      </section>

      {/* ================= CONTENT ================= */}

      <div
        className="
            mx-auto
            w-full
            max-w-[1280px]
            px-[20px]
            pb-[70px]
        "
      >

        {/* MELANJUTKAN TONTON */}

        <section className="pt-[18px]">
            <SectionTitle>
                Melanjutkan Tonton Film
            </SectionTitle>

            <div className="relative">
                <CarouselButton
                direction="left"
                onClick={() => scrollContinue("left")}
                />

                <div
                ref={continueScrollRef}
                className="continue-scroll"
                >
                {continueWatching.map((movie) => (
                    <div
                    key={movie.id}
                    className="continue-card-wrapper"
                    >
                    <ContinueCard movie={movie} />
                    </div>
                ))}
                </div>

                <CarouselButton
                direction="right"
                onClick={() => scrollContinue("right")}
                />
            </div>
        </section>

        {/* TOP RATING */}

        <MovieSection
          title="Top Rating Film dan Series Hari Ini"
          movies={topRating}
        />

        {/* TRENDING */}

        <MovieSection
          title="Film Trending"
          movies={trending}
        />

        {/* RILIS BARU */}

        <MovieSection
          title="Rilis Baru"
          movies={newRelease}
        />
      </div>

      {/* ================= FOOTER ================= */}

      <footer
        className="
          border-t
          border-white/10
          bg-[#18191b]
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-[1280px]
            gap-[40px]
            px-[20px]
            py-[42px]
            sm:grid-cols-3
            lg:grid-cols-[1.5fr_2fr_1fr]
          "
        >

          {/* BRAND */}

          <div>
            <img
              src={logo}
              alt="CHILL"
              className="h-[32px] w-auto"
            />

            <p
              className="
                mt-[18px]
                text-[10px]
                text-gray-400
              "
            >
              @2023 Chill All Rights Reserved.
            </p>
          </div>

          {/* GENRE */}

          <div>
            <h3 className="text-[11px] font-semibold">
              Genre
            </h3>

            <div
              className="
                mt-[14px]
                grid
                grid-cols-3
                gap-y-[10px]
                text-[10px]
                text-gray-400
              "
            >
              <span>Aksi</span>
              <span>Drama</span>
              <span>Komedi</span>

              <span>Anak-anak</span>
              <span>Fantasi Ilmiah & Fantasi</span>
              <span>Sains & Alam</span>

              <span>Anime</span>
              <span>Kejahatan</span>
              <span>Petualangan</span>

              <span>Britania</span>
              <span>KDrama</span>
              <span>Romantis</span>
            </div>
          </div>

          {/* BANTUAN */}

          <div>
            <h3 className="text-[11px] font-semibold">
              Bantuan
            </h3>

            <div
              className="
                mt-[14px]
                space-y-[10px]
                text-[10px]
                text-gray-400
              "
            >
              <p>FAQ</p>
              <p>Kontak Kami</p>
              <p>Privasi</p>
              <p>Syarat & Ketentuan</p>
            </div>
          </div>

        </div>
      </footer>

    </main>
  );
}

export default Home;