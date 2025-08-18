'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Link from 'next/link'
import { Building, Building2, ChevronRight, Key, Rss, Shield, UserRound } from 'lucide-react'
import { DoorViFeature, doorViFeatures, Feature, } from '../../../constants'
import IntegrationPartner from './IntegrationPartner'
import axios from 'axios'
gsap.registerPlugin(ScrollTrigger, SplitText);


const HomeSection = () => {
  // window.scrollTo(0,0);
  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isHoveredRef = useRef<boolean>(false);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    getGeoInfo();
  }, [])
  useGSAP(() => {
    const headingSplit = new SplitText('.heading', { type: 'lines' })
    const headingSplitForGradiant = new SplitText('.gradiant', { type: 'chars' })
    const subtitles = new SplitText('.subtitle', { type: 'lines' })
    const useDoorViSubtitle = new SplitText('.usedoorvisubtitle', { type: 'lines' })
    headingSplitForGradiant.chars.forEach((char) => char.classList.add('text-gradient'))
    gsap.from(headingSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.05,
    })
    gsap.from(subtitles.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06,
      delay: 1,
    })
    gsap.from('#image', {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: 'power1.in',
      // delay: 1,
    })
    //second section animation
    const scrollTimeLineSectionTwo = gsap.timeline({
      scrollTrigger: {
        trigger: '#section_two',
        start: 'top center'
      }
    })
    scrollTimeLineSectionTwo.from('.group', {
      opacity: 0, duration: 1, ease: 'power1.inOut', stagger: 0.4,
    })
    scrollTimeLineSectionTwo.from('.usedoorvisubtitle', {
      opacity: 0,
      yPercent: 100,
      duration: 1,
      ease: 'expo.out',
      stagger: 0.06,
      // delay: 0.5,
    }, "-=1")

    // why choose us section
    const scrollTimeLineWhyChooseUs = gsap.timeline({
      scrollTrigger: {
        trigger: '#whyChoose',
        start: 'top bottom'
      }
    })
    scrollTimeLineWhyChooseUs.fromTo('#whyChooseImage', { opacity: 0, yPercent: 50 }, {
      yPercent: 0, opacity: 1, duration: 1.8, ease: 'power1.inOut'
    })
    scrollTimeLineWhyChooseUs.from('.whyChoosePara', {
      opacity: 0,
      yPercent: 100,
      duration: 1,
      ease: 'expo.out',
      stagger: 0.06,
      // delay: 0.5,
    }, "-=1")

    // doorvi works section
    const scrollTimeLineDoorViWorks = gsap.timeline({
      scrollTrigger:{
        trigger:"#doorviWorks",
        start:"top center"
      }
    })
    scrollTimeLineDoorViWorks.from('.card',{
      opacity:0,
      yPercent:50,
      stagger:0.5,
      duration:1
    })
    
  }, [])
  useGSAP(() => {
    gsap.fromTo('#section3Img', { opacity: 0, yPercent: 50 }, {
      yPercent: 0, opacity: 1, duration: 1.8, ease: 'power1.inOut'
    })
    gsap.fromTo('.about', { yPercent: 20, opacity: 0 }, {
      yPercent: 0, opacity: 100, duration: 1, ease: 'power1.inOut'
    })
  }, [index])
  // const startAutoChange = () => {
  //   if(intervalRef.current) return;
  //   intervalRef.current = setInterval(() => {
  //     if(!isHoveredRef.current){
  //       setIndex((prev) => (prev + 1) % doorViFeatures.length);
  //     }
  //   }, 5000);
  // };

  // const stopAutoChange = () => {
  //   if (intervalRef.current) clearInterval(intervalRef.current);
  //   intervalRef.current = null;
  // };
  // const handleMouseEnter = () => {
  //   isHoveredRef.current = true;
  // };

  // const handleMouseLeave = () => {
  //   isHoveredRef.current = false;
  // };
  const getCocktailAt = (indexOffset: number) => {
    return doorViFeatures[(index + indexOffset + doorViFeatures.length) % doorViFeatures.length]
  }
  const currDoorViFeature = getCocktailAt(0);
  const [country, setCountry] = useState("");
  const getGeoInfo = () => {
    axios
      .get("https://extreme-ip-lookup.com/json/?key=TIWLQiybO4SRhDrp6uT0")
      .then((response) => {
        const country = response.data.countryCode;
        setCountry(country);
        console.log(country)
      })
      .catch((error) => {
        console.error("Error fetching geo info:", error);
      });
  };
  return (
    <div>
      <section className="pt-15 px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen p-3">
          {/* Left column - Text content */}
          <div className="mt-10">
            <div>
              <h2 className="text-blue-500 font-semibold text-[2.488rem] heading gradiant">The Future Of</h2>
              <h1 className="font-semibold text-[2.986rem] heading">Visitor Management,</h1>
              <h1 className="font-semibold text-[2.986rem] heading"> Access Control and Intercom Solutions</h1>
            </div>
            <div className="pt-4">
              <p className="text-gray-500 subtitle ">
                DoorVi is a fully wireless app-based system that makes managing visitors and controlling access simple. With video and audio calling features, you can operate your door from anywhere. There’s no need for heavy or complicated hardware—just a QR code is enough for smooth intercom calls, easy access control, and better security.
              </p>
              <br />
              <p className="text-gray-500 subtitle">
                DoorVi visitor management is perfect for homes, offices, apartments and condominiums who are looking for a smart, simple, and sustainable way to manage visitors and access.
              </p>
              <br />
              <p className="text-gray-500 subtitle">
                We also offer lock integration, so DoorVi users can unlock doors wirelessly using your phone through the DoorVi app. This makes managing access even easier and more secure.
              </p>
            </div>
          </div>

          {/* Right column - Image */}
          <div className="my-auto p-2">
            <div id="image" className=" text-center flex items-center justify-center">
              <Image src={'/assets/homePage.jpeg'} alt="Home Page" width={1800} height={1000} />
            </div>
          </div>
        </div>
      </section>
      {/* section 2 ---> where can you use DoorVi */}
      <section id="section_two">
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
          {/* Hero Section */}
          <div className="max-w-[90%] md:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 pt-16">
            <h1 className="font-semibold text-[2.986rem] text-gray-900 mb-16">
              <span className="bg-gradient-to-r from-[#0470ec] to-indigo-400 text-transparent bg-clip-text inline-block">Where </span> Can You Use
              <br />
              DoorVi?
              <br />
            </h1>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-12 pb-16">
              {/* Apartment Buildings */}
              <div className="group">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <Image src={'/assets/apartment complexe.jpg'} alt='apartment_image' height={400} width={300} className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-6 h-6 text-coral-500" />
                  <h2 className="text-2xl font-bold">
                    <span className="bg-gradient-to-r from-[#0470ec] to-indigo-400 text-transparent bg-clip-text inline-block">
                      Condominium and Apartment
                    </span> Properties
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-[16px] usedoorvisubtitle">
                  Simplify visitor and entry management for both residents and
                  guests with ease. DoorVi eliminates the need for hardware
                  installations or complex setups, making it a hassle-free solution.
                  Residents can seamlessly grant access through their smartphones,
                  ensuring convenience and security. Say goodbye to traditional
                  systems and hello to smarter, stress-free access management.
                </p>
              </div>

              {/* Large Complexes */}
              <div className="group">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <Image src={'/assets/doorvi multi family properties.jpg'} alt='apartment_image' height={400} width={300} className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-6 h-6 text-coral-500" />
                  <h2 className="text-2xl font-bold">
                    <span className="bg-gradient-to-r from-[#0470ec] to-indigo-400 text-transparent bg-clip-text inline-block">Multi-Family </span>  Community
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-[16px] usedoorvisubtitle">
                  Streamline access management for multiple units with a smart,
                  centralized solution. DoorVi allows tenants to easily connect with
                  visitors via video or audio calls, all through a single,
                  user-friendly app. No need for extra hardware or complex
                  systems—tenants can manage entry securely from their smartphones.
                  It’s a modern, hassle-free way to enhance convenience and safety
                  for your property.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 pb-16">
              {/* Apartment Buildings */}
              <div className="group">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <Image src={'/assets/doorvi office spaces.jpg'} alt='apartment_image' height={400} width={300} className="w-full h-[300px] md:h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-6 h-6 text-coral-500" />
                  <h2 className="text-2xl font-bold">
                    <span className="bg-gradient-to-r from-[#0470ec] to-indigo-400 text-transparent bg-clip-text inline-block">
                      Offices, Co-Working Spaces, Commercial{" "}
                    </span>{" "}
                    Buildings
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-[16px] usedoorvisubtitle">
                  Make visitor check-ins faster and more efficient while giving
                  employees the power to grant access remotely. With DoorVi, there’s
                  no need for key cards, fobs, or additional hardware—everything is
                  managed securely through a smart and intuitive app. It’s the
                  modern way to enhance access management and security in your
                  workspace.
                </p>
              </div>

              {/* Large Complexes */}
              <div className="group">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <Image src={'/assets/doorvi for single house and offices.jpg'} alt='apartment_image' height={400} width={300} className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-6 h-6 text-coral-500" />
                  <h2 className="text-2xl font-bold">
                    <span className="bg-gradient-to-r from-[#0470ec] to-indigo-400 text-transparent bg-clip-text inline-block">DoorVi for Single </span> Homes
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-[16px] usedoorvisubtitle">
                  DoorVi is not just for big buildings—it’s the perfect solution for
                  single homes, offering advanced security, convenience, and full
                  control right at your doorstep. With DoorVi, you can manage
                  visitors, grant access remotely, and monitor your home’s security
                  from anywhere. The app-based system eliminates the need for
                  physical keys or complex hardware, making it an easy and modern
                  choice for homeowners looking to enhance their security and ease
                  of access <Link className="underline text-lg text-blue-500" href="https://www.doorvi.co/shop">Shop Now</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* third section */}
      <section className='md:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 pt-16'>
        <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
          {doorViFeatures.map((value) => {
            // const currentIndex = index; 
            const isActive = index === value.id  //index from state
            return (
              <button key={value.id} className={`${isActive ? ' bg-gradient-to-r from-[#0470ec] to-indigo-400 rounded-full lg:py-5 lg:px-5 md:py-3 md:px-3 py-2 px-3 text-white' : 'bg-gray-100 text-gray-500 rounded-full md:py-3 md:px-3 lg:py-5 lg:px-5 py-2 px-3'}`}
                onClick={() => setIndex(value.id)}
              // onMouseEnter={handleMouseEnter}
              // onMouseLeave={handleMouseLeave}
              >{value.titleHead}</button>
            )
          })}
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 p-4 pt-15 gap-4'>
          {/* currDoorViFeature */}
          <div className='flex items-start text-left flex-col '>
            <h1 className='font-semibold text-gray-900 mb-2'>{currDoorViFeature.title}</h1>
            {/* <p>{currDoorViFeature.description}</p> */}
            {
              currDoorViFeature.features.map((value: Feature) => {
                return (
                  <div key={value.name} className='flex gap-3 py-4'>
                    <div className='flex gap-2 flex-shrink-0'>
                      <value.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className=''>
                      <p className="font-semibold text-gray-900">{value.name}</p>
                      <p className="text-gray-600 text-2xl leading-relaxed text-[14px] about">{value.detail}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className='relative flex items-center h-[280px] w-[250px] md:w-[300px] md:h-[280px] lg:h-[450px] lg:w-[442px] section3 my-auto mx-auto'>
            <div id="section3Img" className="absolute inset-0 shadow-2xl rounded-lg z-0"></div>
            <Image id="section3Img" src={currDoorViFeature.img} alt={currDoorViFeature.titleHead} fill ></Image>
          </div>
        </div>
      </section>
      {/* why choose section */}
      <section id='whyChoose' className='md:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 lg:pt-8'>
        <div className="mt-24">
          <h2 className="font-semibold text-[2.986rem] text-gray-900 ">Why Choose <span className='bg-gradient-to-r from-[#0470ec] to-indigo-400 text-transparent bg-clip-text inline-block'>DoorVi</span>?</h2>

          <div className="grid lg:grid-cols-3 gap-x-24 gap-y-12 lg:pt-15">
            <div className="col-span-1 relative flex items-center h-[280px] w-[280px] md:w-[350px] md:h-[350px] lg:h-[400px] lg:w-[380px] section3 my-auto mx-auto" id='whyChooseImage'>
              <Image
                src='/assets/whyChoseUs.jpg'
                alt="Mobile App Interface"
                className="w-full "
                fill
              />
            </div>

            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Affordable & Simple
                </h3>
                <p className="text-gray-600 text-[16px] leading-6 mb-2 whyChoosePara">
                  No need for expensive hardware or messy wiring. Just place the
                  QR codes, and let DoorVi’s app-based system do the work.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Smart Intercom Features
                </h3>
                <p className="text-gray-600 text-[16px] leading-6 mb-2 whyChoosePara">
                  With DoorVi&apos;s intercom feature, apartment residents can make
                  video or audio calls with neighbors. It keeps phone numbers
                  private, ensuring secure and easy communication through the
                  app.{" "}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Multi Credentials
                </h3>
                <p className="text-gray-600 text-[16px] leading-6 mb-2 whyChoosePara">
                  Replace traditional keycards with secure smartphone-based
                  access credentials for added convenience and security.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Convenience with Security
                </h3>
                <p className="text-gray-600 text-[16px] leading-6 mb-2 whyChoosePara">
                  Manage visitor access, monitor entries, and connect with
                  visitors directly from your phone with video and audio calls.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Smart Lock Integration
                </h3>
                <p className="text-gray-600 text-[16px] leading-6 mb-2 whyChoosePara">
                  DoorVi offers lock integration, allowing you to unlock doors
                  wirelessly using your phone through the app. This feature
                  makes access management simpler, more secure, and incredibly
                  convenient.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Eco-Friendly</h3>
                <p className="text-gray-600 text-[16px] leading-6 mb-2 whyChoosePara">
                  Go wireless to save on materials, reduce energy use, and make
                  a positive impact on the environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Secure your property section */}
      <section className='md:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 pt-16'>
        <div className="mt-2 flex flex-col lg:flex-row lg:items-center gap-12">
          <div className="lg:w-1/2 ">
            <h1 className="text-[2.986rem] font-bold mb-4">
              Book Your Demo Now
            </h1>
            <p className="text-gray-600 mb-8 text-[20px]">
              Get in touch with a DoorVi Expert
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfRjvXWMClU5ucAxS2MAeki6RREn7liemspbHf4JsJi3ypVQw/viewform"
              target="_blank"
              className=" text-white px-6 py-3 rounded transition-colors shadow-lg bg-gradient-to-r from-blue-400 to-blue-600"
            >
              Connect With Us
            </a>
          </div>
          <div className="lg:w-1/2">
            <Image src="/assets/dobleDevice.jpg" alt="Security Device" width={300} height={400} className="w-full" />
          </div>
        </div>
      </section>
      {/* manage everything from one place */}
      <section className='md:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 pt-16'>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[2.986rem]  font-bold text-gray-900 mb-6">
              Manage Everything from One Place
            </h2>
            <p className="text-[16px]  text-gray-600 mb-8">
              DoorVi’s easy-to-use portal gives you full control over access,
              visitor management, and communication—all in one simple dashboard.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Building className="w-10 h-10 text-blue-600 " />
                <p className="text-[16px]  text-gray-600">
                  Centralized Control: Handle visitor logs, access permissions,
                  and communication from one platform.
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <Key className="w-10 h-10 text-blue-600 " />
                <p className="text-[16px]  text-gray-600">
                  Easy Operations: No need for multiple systems—everything is in
                  one place for smooth management.
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <UserRound className="w-10 h-10 text-blue-600" />
                <p className="text-[16px] text-gray-600">
                  User-Friendly Design: Simple and intuitive interface, with no
                  complicated setup
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <Rss className="w-10 h-10 text-blue-600" />
                <p className="text-[16px]  text-gray-600">
                  {" "}
                  Instant Updates: Receive real-time notifications for visitor
                  activities and access events, keeping you in the loop.
                </p>
              </li>
            </ul>
          </div>
          <div className='relative'>
            <Image
              src="/assets/doorviMulti.png"
              alt="Modern apartment building"
              width={300}
              height={400}
              className="w-[500px] lg:w-[1231px] lg:h-[350px] m-auto"
              unoptimized
            />
            <div id="" className="absolute inset-0 shadow-2xl rounded-lg z-0"></div>
          </div>
        </div>
      </section>
      {/* how doorvi works */}
      <section id='doorviWorks' className='md:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='p-2'><h1 className='text-[2.986rem] font-semibold'>How <span className='bg-gradient-to-r from-[#0470ec] to-indigo-400 text-transparent bg-clip-text inline-block'>DoorVi</span> Works ?</h1></div>
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-6 mt-8'>
          <div className='bg-gradient-to-br from-blue-50 to-white rounded-2xl p-5 shadow-2xl card'>
            <h1 className='font-semibold text-[2.488rem] p-3'>Step 1</h1>
            <Image src="/assets/downloadApp.jpg" alt='Download_From_AppStore' width={300} height={400} className='w-[400px] h-[300px] 2xl:h-[400px] mx-auto rounded-2xl my-4' />
            <p className='text-[16px] md:font-semibold  p-2 text-gray-700 text-center'>Download the DoorVi app from the App Store or Play Store.</p>
          </div>
          <div className='bg-gradient-to-br from-blue-50 to-white rounded-2xl p-5 shadow-2xl card'>
            <h1 className='font-semibold text-[2.488rem] p-3'>Step 2</h1>
            <Image src="/assets/business/4.png" alt='Download_From_AppStore' width={300} height={400} className='w-[400px] mx-auto rounded-2xl my-4' />
            <p className='text-[16px] md:font-semibold p-2 text-gray-700 text-center'>Scan the QR code to connect it to your account.</p>
          </div>
          <div className='bg-gradient-to-br from-blue-50 to-white rounded-2xl p-5 shadow-2xl card'>
            <h1 className='font-semibold text-[2.488rem] p-3'>Step 3</h1>
            <Image src="/assets/business/2.jpg" alt='Download_From_AppStore' width={300} height={400} className='w-[400px] mx-auto rounded-2xl my-4' />
            <p className='text-[16px] md:font-semibold p-2 text-gray-700 text-center'>Get instant visitor alerts, video calls, and audio calls, all at your fingertips.</p>
          </div>
        </div>
      </section>
      <section className='md:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 pt-16'>
        <div className="bg-gradient-to-r from-[#0470ec] to-indigo-400 rounded-2xl p-8 md:p-16 text-center">
          <h2 className="text-[2.986rem] font-bold text-white mb-8">
            Ready to Upgrade Your Old Hardware System?
          </h2>
          <p className="text-blue-100 mb-12 max-w-5xl mx-auto text-2xl mt-5">
            Works with your existing access system You don&apos;t have to replace or
            {/* <br/> */}
            buy new expensive hardware to get started.
          </p>
        </div>
        <IntegrationPartner />
        <div className="relative m-auto h-[100vh]  ">
          <iframe
            src={
              ["br", "pt"].includes(country?.toLowerCase())
                ? "https://www.youtube.com/embed/naJ8jySg_Ok"
                : "https://www.youtube.com/embed/QfswshWURn0?controls=0"
            }
            // https://youtu.be/Ps-0f0K6izM
            title="YouTube video player"
            allow="accelerometer; 
            autoplay; 
            clipboard-write; 
            encrypted-media; 
            gyroscope; 
            picture-in-picture; 
            web-share"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-[80%]"
          ></iframe>
        </div>
      </section>
      {/* doorvi for single home */}
      <section className='md:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 '>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className='flex justify-center items-center'>
              <Image
                width={300}
                height={300}
                src="/assets/doorViSingle.png"
                alt="Smart doorbell interface"
                className="rounded-2xl shadow-2xl w-[343px] md:w-[500px] 2xl:w[700px]"
              />
            </div>
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              <span className='bg-gradient-to-r from-[#0470ec] to-indigo-400 text-transparent bg-clip-text inline-block'>DoorVi</span> for Single Homes
            </h1>
            <p className="text-gray-600 text-[16px] mb-8">
              DoorVi is not just for big buildings it’s the ideal choice for
              single homes, bringing top-notch security, convenience, and
              control right to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 cursor-pointer">
              <Link
                href="https://www.doorvi.co/shop"
                className="flex items-center justify-center self-start inline-flex text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition bg-gradient-to-r from-blue-400 to-blue-600"
              >
                Shop Now
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Download Mobile App Section */}
      <section className="py-16">
        <div className="w-[95%] md:w-[80%] mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[2.986rem] font-bold text-gray-900 mb-6">
                Download the <span className='bg-gradient-to-r from-[#0470ec] to-indigo-400 text-transparent bg-clip-text inline-block'>DoorVi</span> App Today
              </h2>
              <p className="text-[16px] text-gray-600 mb-8">
                Upgrade your door communication with the DoorVi app – download now to easily connect with visitors using QR code pairing
              </p>
              <div className="flex flex-col sm:flex-row items-center md:gap-6">
                {/* Google Play */}
                <a
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=com.doorvi"
                  className="flex items-center justify-center  py-3 rounded-lg transition"
                >
                  <div className="relative w-[150px] h-14">
                    <Image
                      src="/assets/google-play.jpg"
                      alt="Google Play"
                      fill
                      className=" shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
                      sizes="(max-width: 640px) 100px, 160px"
                    />
                  </div>
                </a>

                {/* App Store */}
                <a
                  target="_blank"
                  href="https://apps.apple.com/in/app/doorvi-door-video-calling/id1634023696"
                  className="flex items-center justify-center py-3 rounded-lg transition"
                >
                  <div className="relative w-[150px] h-14">
                    <Image
                      src="/assets/app-store.jpg"
                      alt="App Store"
                      fill
                      className="shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
                      sizes="(max-width: 640px) 100px, 120px"
                    />
                  </div>
                </a>
              </div>

            </div>
            <div className="flex justify-center">
              <Image
                height={0} width={0}
                src="/assets/downloadApp.jpg"
                alt="Mobile app interface"
                className="w-[75%]"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeSection