'use client'
import { Badge, Drawer } from 'antd'
import Image from 'next/image'
import { HelpSVG, InboxSVG, NotificationSVG, SearchSVG } from '../SVG'

let navIcons = [
  {
    icon:()=><SearchSVG />,
    label:"Search"
  },
  {
    icon:()=><InboxSVG />,
    label:"Inbox"

  },
  {
    badge : true,
    icon:()=><NotificationSVG />,
    label:"Notifications"
  },
  {
    icon:()=><HelpSVG />,
    label:"Help"
  }
]
export default function MyDrawer({ onClose, open }: any) {
  return (
    <Drawer
      title={``}
      width={'100%'}
      height={'100%'}
      placement="left"
      closable={false}
      size={'default'}
      onClose={onClose}
      open={open}
    >
      <div className="p-4">
        <div className="w-full flex justify-end">
          <svg
            onClick={onClose}
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 10.75L2.875 16.875C2.64583 17.1042 2.35417 17.2188 2 17.2188C1.64583 17.2188 1.35417 17.1042 1.125 16.875C0.895833 16.6458 0.78125 16.3542 0.78125 16C0.78125 15.6458 0.895833 15.3542 1.125 15.125L7.25 9L1.125 2.875C0.895833 2.64583 0.78125 2.35417 0.78125 2C0.78125 1.64583 0.895833 1.35417 1.125 1.125C1.35417 0.895833 1.64583 0.78125 2 0.78125C2.35417 0.78125 2.64583 0.895833 2.875 1.125L9 7.25L15.125 1.125C15.3542 0.895833 15.6458 0.78125 16 0.78125C16.3542 0.78125 16.6458 0.895833 16.875 1.125C17.1042 1.35417 17.2188 1.64583 17.2188 2C17.2188 2.35417 17.1042 2.64583 16.875 2.875L10.75 9L16.875 15.125C17.1042 15.3542 17.2188 15.6458 17.2188 16C17.2188 16.3542 17.1042 16.6458 16.875 16.875C16.6458 17.1042 16.3542 17.2188 16 17.2188C15.6458 17.2188 15.3542 17.1042 15.125 16.875L9 10.75Z"
              fill="#657372"
            />
          </svg>
        </div>
        <div className="flex items-center pb-2 border-gray-100 border-b-2">
          <Image
            src="/user_image.png"
            width={60}
            height={60}
            alt="Picture of the author"
          />
          <div className="ml-2 flex flex-col">
            <span className="text-lg">Jane Smith</span>
            <span className="font-light">Sales Executive</span>
          </div>
        </div>
        {navIcons.map((d:any,i:number)=>{
              if (d.badge){
                return <div key={i} className="flex items-center  py-3 border-gray-100 border-b-2">
                <Badge count={5}>
                  {d.icon()}
                </Badge>
                <span className="ml-4 text-lg"> { d.label} </span>
              </div>
              }
              return <div key={i} className="flex items-center py-3 border-gray-100 border-b-2">          
              {d.icon()}
              <span className="ml-4 text-lg"> {d.label}</span>
            </div>
            })}
      </div>
    </Drawer>
  )
}
