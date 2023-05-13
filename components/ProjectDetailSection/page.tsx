import Image from 'next/image'
import { Progress } from 'antd'
import {
  DownArrow,
  OpenSVG,
  PDFSVG,
  SubMenuSVG,
  ZoomInSVG,
  ZoomOutSVG,
} from '../SVG'
import OverlayCard from '../OverlayCard/page'

let projectScope = [
  {
    label: 'Basic Info',
  },
  {
    label: 'Files',
  },
  {
    label: 'Mutual Action Plan',
  },
  {
    label: 'Contact',
  },
]

let companyOverview = [
  {
    label: 'Welcome',
  },
  {
    label: 'Product Capabilities',
  },
  {
    label: 'Customer Succes Stories',
  },
  {
    label: 'File Sharing',
  },
  {
    label: 'Our Deck',
  },
]

let barIcons = [
  {
    icon: () => <PDFSVG />,
  },
  {
    icon: () => <DownArrow />,
  },
  {
    icon: () => <ZoomOutSVG />,
  },
  {
    icon: () => <ZoomInSVG />,
  },
  {
    icon: () => <OpenSVG />,
  },
]
export default function ProjectDetailSection({ isDesktop, isTablet }: any) {
  return (
    <>
      <div>
        <div className="mt-1 flex justify-between">
          <span className="font-medium md:text-xl lg:text-2xl ">
            Project Scope Recap
          </span>

          <div className="flex flex-col p-1">
            <div className="flex text-xs sm:text-sm md:text-md lg:text-lg">
              <span className="text-gray-500">Mutual Action Plan</span>
              <span className="font-bold ml-1 text-green-800 font-sans">
                3%
              </span>
            </div>
            <Progress
              percent={3}
              steps={17}
              size={isDesktop || isTablet ? (isDesktop ? 12 : 9) : 5}
              strokeColor="green"
              showInfo={false}
            />
          </div>
        </div>
        <div className="mt-2  flex justify-between">
          <div className="flex justify-between flex-wrap border-b ">
            {projectScope.map((d: any, i: number) => (
              <span
                className={`p-1 mx-0.5 rounded-t border shadow text-xs sm:text-sm md:text-md lg:text-lg font-bold ${
                  i == 0 ? 'text-green-700 border-green-700' : 'text-gray-500'
                }`}
                key={i}
              >
                {d.label}
              </span>
            ))}
          </div>
          <span className="text-xs sm:text-sm md:text-md lg:text-lg font-bold p-1 sm:block hidden rounded-t border shadow text-gray-500">
            Internal Actions
          </span>
        </div>
      </div>

      {/* Compoany Profile */}
      <div className="mt-2  ">
        <div className=" flex items-center justify-between sm:text-sm md:text-md lg:text-lg">
          <span>Company Profile</span>
          <SubMenuSVG />
        </div>
        <div className="flex">
          <div className="hidden lg:flex mx-2 mt-4 text-gray-800">
            <div className="w-full h-full bg-white rounded-lg p-4 ">
              <h3 className="px-4 text-xl font-bold pb-2">Overview</h3>
              <div className="flex flex-col h-full ">
                {companyOverview.map((d: any, i: number) => (
                  <p
                    key={i}
                    className="w-full px-4 py-4 border-t text-sm border-gray-300"
                  >
                    {d.label}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full h-full mt-4 relative ">
            <Image
              className="bg-cover w-full h-full"
              src={
                isDesktop || isTablet
                  ? isDesktop
                    ? '/company_profile_desktop.png'
                    : '/company_profile_tablet.png'
                  : '/company_profile.png'
              }
              alt={'Company Profile'}
              width={isDesktop || isTablet ? (isDesktop ? 1000 : 700) : 500}
              height={isDesktop || isTablet ? (isDesktop ? 800 : 800) : 800}
            />
            <div
              className="absolute top-[1vh] left-[28vw] sm:left-[32vw] md:left-[40vw] lg:left-[44vw] py-2 "
              style={{
                background: 'rgba(255, 255, 255, 0.7)',
                border: '1.02567px solid #D3D7D7',
                backdropFilter: 'blur(5.12837px)',
              }}
            >
              <div className="flex ">
                {barIcons.map((d:any)=> d.icon() )}
              </div>
            </div>
            {/* We Work Title */}
            <OverlayCard isDesktop={isDesktop} isTablet={isTablet}/>
          </div>
        </div>
      </div>
    </>
  )
}
