import React, { useEffect, useRef } from 'react'
import Navbar from '../HomePage/components/Navbar'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../HomePage/components/Footer'
import OurClients from '../HomePage/components/OurClients'

gsap.registerPlugin(ScrollTrigger)

const Aboutus = () => {
  const scrollRef = useRef(null)
  const image1Ref = useRef(null)
  const image2Ref = useRef(null)
  const carouselRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(scrollRef.current, {
        rotate: 360,
        duration: 12,
        repeat: -1,
        ease: 'linear',
      })

      gsap.from([image1Ref.current, image2Ref.current], {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      })

      gsap.utils.toArray('.event-section').forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        })
      })
    })
    return () => ctx.revert()
  }, [])

  const eventSections = [
     {
      title: 'Ventrac Demo at Rambagh Golf Course, Jaipur',
      images: [
       'Events/Ventrac/1.jpg',
       'Events/Ventrac/2.jpg',
       'Events/Ventrac/3.jpg',
       'Events/Ventrac/4.jpg',
       'Events/Ventrac/5.jpg',
       'Events/Ventrac/6.jpg',
       'Events/Ventrac/7.jpg',
       'Events/Ventrac/8.jpg',
       'Events/Ventrac/9.jpg',
       'Events/Ventrac/10.jpg',
       'Events/Ventrac/11.jpg',
       'Events/Ventrac/12.jpg',
       'Events/Ventrac/13.jpg',
       'Events/Ventrac/14.jpg',
       'Events/Ventrac/15.jpg',
       'Events/Ventrac/16.jpg',
       
      ],
    },
    {
      title: 'GIA 2025',
      images: [
       'Events/2025/1.jpg',
       'Events/2025/2.jpg',
       'Events/2025/3.jpg',
       'Events/2025/4.jpg',
       'Events/2025/5.jpg',
       'Events/2025/6.jpg',
       'Events/2025/7.jpg',
       'Events/2025/8.jpg',
       'Events/2025/9.jpg',
       'Events/2025/10.jpg',
       'Events/2025/11.jpg',
       'Events/2025/12.jpg',
       'Events/2025/13.jpg',
       'Events/2025/14.jpg',
       'Events/2025/15.jpg',
       'Events/2025/16.jpg',
       'Events/2025/17.jpg',
       'Events/2025/18.jpg',
      ],
    },
    {
      title: 'GIA 2024',
      images: [
       'Events/2024/1.jpg',
       'Events/2024/2.jpg',
       'Events/2024/3.jpg',
       'Events/2024/4.jpg',
       'Events/2024/5.jpg',
       'Events/2024/6.jpg',
       'Events/2024/7.jpg',
       'Events/2024/8.jpg',
       'Events/2024/9.jpg',
       'Events/2024/10.jpg',
       'Events/2024/11.jpg',
       'Events/2024/12.jpg',
       'Events/2024/13.jpg',
       'Events/2024/14.jpg',
       'Events/2024/15.jpg',
       'Events/2024/16.jpg',
      ],
    },
    {
      title: 'GIA 2023',
      images: [
       'Events/2023/1.jpg',
       'Events/2023/2.jpg',
       'Events/2023/3.jpg',
       'Events/2023/4.jpg',
       'Events/2023/5.jpg',
       'Events/2023/6.jpg',
      ],
    },
     {
      title: 'Landscape Expo 2023',
      images: [
       'Events/Landscape/1.jpg',
       'Events/Landscape/2.jpg',
       'Events/Landscape/3.jpg',
       'Events/Landscape/4.jpg',
       'Events/Landscape/5.jpg',
       'Events/Landscape/6.jpg',
       'Events/Landscape/7.jpg',
       'Events/Landscape/8.jpg',
       'Events/Landscape/9.jpg',
       'Events/Landscape/10.jpg'
       
      ],
    },
    {
      title: 'GIA 2022',
      images: [
       'Events/2022/1.jpg',
       'Events/2022/2.jpg',
       'Events/2022/3.jpeg',
       'Events/2022/4.jpeg',
       'Events/2022/5.jpeg',
       'Events/2022/6.jpeg',
       'Events/2022/7.jpeg',
       'Events/2022/8.jpeg',
       'Events/2022/9.jpeg',
        
      ],
    },
    
    
    {
      title: 'GSC&MAI Seminars',
      images: [
        'Events/GSC/1.JPG',
        'Events/GSC/2.JPG',
        'Events/GSC/3.jpg',
        'Events/GSC/4.jpg',
        'Events/GSC/5.jpg',
        'Events/GSC/6.JPG',
        'Events/GSC/7.JPG',
        'Events/GSC/8.JPG',
       
       
      ],
    },
   
    {
      title: 'Sports India Expo',
      images: [
       'Events/Sports/1.jpg',
       'Events/Sports/2.jpg',
       'Events/Sports/3.jpg',
       'Events/Sports/4.jpg',
       'Events/Sports/5.jpg',
       
      ],
    },
   
  ]


  const scrollLeft = (index) => {
    carouselRefs.current[index].scrollBy({ left: -300, behavior: 'smooth' })
  }
  const scrollRight = (index) => {
    carouselRefs.current[index].scrollBy({ left: 300, behavior: 'smooth' })
  }

  return (
    <div className='w-screen min-h-screen bg-black text-white overflow-x-hidden'>
      <Navbar />

      <h1 className='text-center text-8xl font-[font1] font-bold mt-12 mb-6 uppercase tracking-wide'>
        Company Profile
      </h1>

      <div className='flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 gap-12'>
        <div className='w-full lg:w-1/2'>
          <img ref={image1Ref} src='about/1.jpg' alt='Golf Player' className='w-full h-auto rounded-xl object-cover' />
        </div>
        <div className='w-full lg:w-1/2 text-left'>
          {/* <h4 className='text-sm text-gray-400 uppercase mb-2'>What we offer</h4> */}
          <h2 className='text-2xl lg:text-5xl font-bold   mb-4'>
            SURGE SYSTEMS INDIA PRIVATE LIMITED was established in 1993 by Mr. Vinit Mathur
          </h2>
          <p className='text-gray-300 text-[21px]  flex leading-relaxed'>
          Surge Systems is one of India’s leading providers of Irrigation Solutions and Turf Maintenance Equipment, committed to creating world-class sports and landscape environments across the country. We are the authorized distributor of The Toro Company, U.S.A. — a global leader in Sports, Turf, and Landscape Irrigation & Maintenance Equipment — for North and Eastern India. In addition, we proudly represent globally renowned brands such as Ventrac , Kinetic Greens Tonino Lamborghini, Maredo B.V., Campey Turf Care Systems, Par Aide, Turfoc, MCI Flowtronex, and several others. With decades of expertise, Surge Systems delivers comprehensive turf management solutions—ranging from residential gardens to international-standard golf courses and sports arenas. Our end-to-end capabilities include design, supply, installation, and after-sales support, ensuring superior performance, reliability, and sustainability. At Surge Systems, we take pride in being a trusted partner to leading golf courses, clubs, and sports organizations across India—empowering them to maintain immaculate playing surfaces and landscapes through innovation, technology, and an unwavering commitment to excellence.
          </p>
          {/* <img ref={image2Ref} src='about/2.jpg' alt='Golf Shoes' className='mt-8 w-full max-w-sm rounded-xl object-cover' /> */}
        </div>
      </div>

      <div className='fixed bottom-6 z-2 right-6 w-28 h-28 rounded-full bg-orange-400 flex items-center justify-center overflow-hidden'>
        <div ref={scrollRef} className='absolute inset-0 flex items-center justify-center'>
          <svg viewBox='0 0 100 100' className='w-full h-full'>
            <defs>
              <path id='circlePath' d='M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0' />
            </defs>
            <text fill='black' fontSize='10.5' fontWeight='bold'>
              <textPath href='#circlePath' startOffset='0'>
                INDIA PRIVATE LIMITED • SURGE SYSTEMS •
              </textPath>
            </text>
          </svg>
        </div>
      </div>

      {/* <p className='px-5 md:px-40 py-10 text-center text-2xl'>
        Surge Systems India Pvt. Ltd. is a leading North Indian company in turf irrigation...
      </p> */}
      <OurClients />

      <div className='w-full px-5 md:px-20 py-20 bg-black mt-20'>
        <h2 className='text-center text-7xl font-[font1] font-bold mb-12 uppercase tracking-wider'>
          Event Gallery
        </h2>

        {eventSections.map((section, index) => (
          <div key={index} className='event-section mb-16 relative'>
            <h3 className='text-2xl font-semibold mb-6 text-center text-gray-200'>
              {section.title}
            </h3>

            {/* Navigation Buttons */}
            <button
              onClick={() => scrollLeft(index)}
              className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 w-12 h-12 flex items-center justify-center rounded-full z-10 hover:bg-gray-600 transition'
            >
              &#10094;
            </button>
            <button
              onClick={() => scrollRight(index)}
              className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 w-12 h-12 flex items-center justify-center rounded-full z-10 hover:bg-gray-600 transition'
            >
              &#10095;
            </button>

            {/* Carousel */}
            <div
              ref={(el) => (carouselRefs.current[index] = el)}
              className='flex gap-6 overflow-x-auto scroll-smooth px-8'
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {section.images.map((img, i) => (
                <div
                  key={i}
                  className='min-w-[280px] flex-shrink-0 overflow-hidden rounded-2xl shadow-lg hover:scale-105 transform transition-all duration-500'
                >
                  <img src={img} alt={section.title} className='w-full h-64 object-cover' />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  )
}

export default Aboutus
