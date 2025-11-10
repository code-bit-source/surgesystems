import React, { useEffect, useRef } from 'react'
import Navbar from './Navbar'
import gsap from 'gsap'

const Landing = () => {
  const text1 = useRef(null)
  const text2 = useRef(null)
  const navbarRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.style.transformOrigin = 'center center'
      video.style.willChange = 'transform'
    }

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
    tl.addLabel('start')

    // Navbar fade-in animation
    tl.fromTo(
      navbarRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.2 },
      'start'
    )

    // Background video zoom subtle animation
    if (video) {
      tl.fromTo(
        video,
        { scale: 1 },
        {
          scale: 1.06,
          duration: 2.5,
          ease: 'power2.out',
          overwrite: true,
          onComplete: () => gsap.set(video, { scale: 1.06 }),
        },
        'start'
      )
    }

    // Text animations
    tl.fromTo(
      text1.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      'start+=0.2'
    )
    tl.fromTo(
      text2.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      'start+=0.25'
    )

    // Cleanup
    return () => {
      tl.kill()
      if (video) gsap.set(video, { clearProps: 'transform,willChange' })
    }
  }, [])

  return (
    <div className="min-h-screen z-90 text-white font-sans relative ">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <video
          ref={videoRef}
          className="object-cover w-full h-full"
          autoPlay
          muted
          loop
          playsInline
        >
          {/* 👇 Correct path to video (from public folder) */}
          <source src="/front.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay for better text visibility */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
      </div>

      {/* Navbar */}
      <div ref={navbarRef} className='relative z-99'>
        <Navbar />
      </div>

      {/* Centered Text Section */}
      <section className="absolute mt-[18vw] inset-0 flex flex-col items-center justify-center text-center px-6">
        <h1
          ref={text1}
          className=" tracking-tighter 
                     text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold xl:text-8xl uppercase italic"
        >
          Always <span className="text-[#CD2027]  ">Solving</span>
        </h1>
        <h1
          ref={text2}
          className="tracking-tighter 
                     text-4xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-8xl font-bold uppercase italic"
        >
          Always <span className="text-[#CD2027]  ">Evolving</span>
        </h1>
      </section>   
    </div>
  )
}

export default Landing
