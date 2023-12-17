'use client'

export function Video() {
  return (
    <>
      <div>
        <div className="md:z-1 w-[100vw] md:absolute md:inset-0 md:h-[100vh]">
          <video className="h-full w-full object-fill" autoPlay muted loop>
            <source
              src="https://api.jdbgaming.com/assets/upload/images/banner/banner-c81e728d9d4c2f636f067f89cc14862c-video-desktop.mp4?a1c0077740c5177b3b3ef441"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  )
}
