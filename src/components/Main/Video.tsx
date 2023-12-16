export function Video() {
  return (
    <div className="relative">
      <video className="w-full" autoPlay muted loop>
        <source
          src="https://api.jdbgaming.com/assets/upload/images/banner/banner-c81e728d9d4c2f636f067f89cc14862c-video-desktop.mp4?a1c0077740c5177b3b3ef441"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute left-[50%] top-[50%] hidden translate-x-[-50%] translate-y-[-60%] bg-transparent font-serif text-[64px] border-text lg:block">
        <p>Myrlie SLOTS</p>
        <p>Let players enjoy it endlessly</p>
      </div>
    </div>
  )
}
