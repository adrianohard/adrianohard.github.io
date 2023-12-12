'use client'

import { Button, Card, Header, PushNotification, UserInfo } from '@/components'
import { BiDownload, BiLogoGithub, BiLogoInstagram, BiLogoLinkedinSquare } from 'react-icons/bi'
import { BsFillLaptopFill, BsFillPersonLinesFill } from "react-icons/bs";
import { MdOutlineWork } from "react-icons/md";


import Image from 'next/image'
export default function Home() {

  const onClickNotification = () => {
    const notification = document.querySelector('#notification')
    const notificationEnabled = notification?.classList.contains('enabled')

    if(notificationEnabled) {
      notification?.classList.add('disabled')
      setTimeout(() => {
        notification?.classList.remove('enabled')
      }, 1000);
    }
    else {
      notification?.classList.remove('disabled')
      notification?.classList.add('enabled')
    }
  }

  return (
    <main className="min-h-screen px-4 sm:px-8 py-4 flex flex-col items-center relative">
      <Header />
      <div className='flex flex-1 items-center justify-center lg:justify-between flex-wrap lg:flex-nowrap lg:mt-0 mt-8 '>
        <section id="hero" className='max-w-sm md:max-w-xl mr-8 flex flex-col justify-center text-center lg:text-left'>
          <h1 className='text-4xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h1>
          <p className='mt-4 text-light mb-8'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem est rerum nesciunt neque, ullam quae voluptate odit maxime doloribus necessitatibus at incidunt minus quas, dolorum, vitae quidem aut accusantium fugiat.
          </p>
          <div className='max-w-fit m-auto lg:m-0 lg:mb-0 mb-8'>
            <Button title="Download curriculum" variant="primary" Icon={<BiDownload size="24" className="mr-2" />} />
            <div id="social-icons" className="flex gap-4 text-primary-dark items-center justify-center mt-4 ">
              <BiLogoGithub size="28" className="cursor-pointer" />
              <BiLogoInstagram size="28" className="cursor-pointer" />
              <BiLogoLinkedinSquare size="28" className="cursor-pointer" />
            </div>
          </div>
        </section>
        <div className='flex items-center flex-wrap flex-1 flex-col xl:flex-row justify-center xl:justify-left'>
          <Image src={'/hero-background.png'} alt="Background Image Hero" width={307} height={536} className='mb-4' />
          <div className='ml-4 sm:flex gap-4 xl:block'>
            <Card
              title="Skills"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa viverra faucibus mattis ac lectus venenatis mauris ultrices."
              Icon={<BsFillLaptopFill />}
            />
            <Card
              title="Quem sou eu"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa viverra faucibus mattis ac lectus venenatis mauris ultrices."
              Icon={<BsFillPersonLinesFill />}
            />
          </div>
        </div>
      </div>
      <div className='lg:absolute lg:bottom-16 lg:left-8 relative w-full sm:w-auto'>
        <UserInfo onClick={() => onClickNotification()} />
      </div>
      <div className='absolute sm:right-8 sm:bottom-16 bottom-4 right-0 mx-2 sm:mx-0'>
        <PushNotification onClick={onClickNotification} />
      </div>
    </main>
  )
}
