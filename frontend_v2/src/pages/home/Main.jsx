import React from 'react'
import bgImage from '../../assets/mainIMG.jpg'
import Button from '../../components/Button';
import AnimatedText from 'react-animated-text-content';
import Typewriter from 'typewriter-effect';


function Main() {
  const mainStyle = {
    // FOR FULL CSS STYLES GO TO THE INDEX.CSS FILE
    backgroundImage: `url(${bgImage})`,
    isolation: 'isolate'}; 
  return (
    <main id='home' className='
      h-screen w-full relative overflow-hidden 
      bg-cover bg-no-repeat bg-center bg-primary'
      style={mainStyle}>
      <div className='w-full h-full flex flex-col items-center justify-center gap-20 text-3xl'>
        <div className='
          text-center flex flex-col text-white 
          text-[20px] font-bold leading-[40.8px]
          md:text-[45px] md:leading-[91.8px]'>
          <h1 className='tracking-widest '>
            <AnimatedText
              type="chars" // animate words or chars
              animation={{
                x: '200px',
                y: '-20px',
                scale: 1.1,
                ease: 'ease-in-out',
              }}
              animationType="float"
              interval={0.06}
              duration={3}
              tag="p"
              className="animated-paragraph"
              includeWhiteSpaces='true'
              threshold={0.1}
              rootMargin="20%"
              infinite='true'

            >
              SenaResearch
            </AnimatedText>
          </h1>
          <h1 className=''>أفضل الخدمات التعليمية</h1>
            <Typewriter
              options={{
                strings: ['أحسن جودة', 'و أسرع وقت'],
                autoStart: true,
                loop: true,
                cursor: ''
              }} />
        </div>
        {/* 2 BTNs */}
        <div className='flex items-center justify-center gap-8'>
          
          <Button paddingX={'md:px-12 px-4'} linkText={'مساعدة إفتراضية'} bgColor={'bg-transparent'} textColor={'text-white'} redirectTo={'/#ourServices'} borderColor={'border-white'} />
          <Button paddingX={'md:px-12 px-4'} linkText={'تعرف علينا'} bgColor={'bg-white'} textColor={'text-primary'} redirectTo={'/#aboutUs'} borderColor={'border-white'} />
        </div>
      </div>
    </main>
  )
}
export default Main