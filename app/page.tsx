'use client'
import CustomMediaQuery from '@/components/GetMediaQuery/page'
import MobileLayout from '@/components/MobileLayout/page'
import ProposalSection from '@/components/ProposalSection/page'
import ProjectDetailSection from '@/components/ProjectDetailSection/page'

export default function Page() {
  const [isDesktop, isTablet] = CustomMediaQuery()
  return (
    <>
      <MobileLayout isDesktop={isDesktop} />
      <div className="px-2 md:px-6 mt-2 flex justify-between font-customFont">
        <div className="text font-extrabold">
          <span className="">WeWork</span>
          <span className="font-sans">{' + '}</span>
          <span className="font-customFont">Salesforce</span>
        </div>
        <button className="bg-[#00B686] text-white px-4 py-1 rounded">
          Publish <span className="font-sans">/</span> Share
        </button>
      </div>
      <ProposalSection isDesktop={isDesktop} isTablet={isTablet}/>
      <div className="mt-10 px-2">
          <ProjectDetailSection isDesktop={isDesktop} isTablet={isTablet}/>
      </div>
    </>
  )
}
