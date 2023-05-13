import Image from 'next/image'

export default function ProposalSection({isDesktop,isTablet}:any){
    return (
        <div
        className="mt-2 px-2 w-full relative md:bg-auto bg-cover box-border"
        style={{
          height: isDesktop || isTablet ? (isDesktop ? 300 : 200) : 80,
          background: `linear-gradient(110deg, rgba(4,121,195,0) 57%, rgba(159,159,218,0.34141578994879207) 57%), url(${
            isDesktop || isTablet
              ? isDesktop
                ? '/work_proposal_desktop.png'
                : '/work_proposal_tablet.png'
              : '/work_proposal.png'
          })`,
          backgroundRepeat: 'no-repeat',
        }}
      >
        <p className="absolute bottom-6 right-0 sm:bottom-[12vh] sm:right-[12vw] lg:bottom-[15vh] lg:right-[6vw] w-36 sm:w-1/3 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold">
          Workspace Proposal
        </p>
        <div className="flex  items-center absolute box-border bg-white rounded-md px-2 py-2 -bottom-8 ml-2 shadow">
          <Image
            src="/we.png"
            width={isDesktop|| isTablet ? isDesktop ? 70 : 40 : 20}
            height={isDesktop|| isTablet ? isDesktop ? 70 : 40 : 20}
            alt="Picture of the author"
          />
          <span className="font-sans mx-3"> + </span>
          <Image
            src="/salesforce.png"
            width={isDesktop|| isTablet ? isDesktop ? 80 : 50 : 30}
            height={isDesktop|| isTablet ? isDesktop ? 80 : 50 : 30}
            alt="Picture of the author"
          />
        </div>
      </div>
    )
}