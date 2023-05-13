import Image from 'next/image'


export default function OverlayCard({isDesktop, isTablet}:any){
    return <div
    className="px-8 py-4 absolute top-[10vh] left-[10vw] sm:top-[18vh] sm:left-[18vw] md:top-[26vh] md:left-[24vw] lg:top-[28vh] lg:left-[32vw] "
    style={{
      background: 'rgba(255, 255, 255, 0.7)',
    }}
  >
    <div className="w-full h-full flex justify-center">
      <Image
        src={'/wework-logo.png'}
        alt="We Work Logo"
        width={isDesktop || isTablet ? (isDesktop ? 300 : 250) : 100}
        height={200}
      />
    </div>
    <p className="mt-4 text-xs sm:text-lg md:text-xl text-center">
      For all the ways you work, we 
      <span className='font-sans'>&#39;</span>
      re here
    </p>
  </div>
}