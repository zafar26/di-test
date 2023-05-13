'use client'
import MyDrawer from '@/components/MyDrawer/page'
import { Badge, Layout } from 'antd'
import { useState } from 'react'
import Image from 'next/image'
import {
  HelpSVG,
  InboxSVG,
  LogoSVG,
  MenuSVG,
  NotificationSVG,
  SearchSVG,
} from '../SVG'

export default function MobileLayout({ isDesktop }: any) {
  const [open, setOpen] = useState(false)
  const onClose = () => {
    setOpen(false)
  }

  let navIcons = [
    {
      icon:()=><SearchSVG />
    },
    {
      icon:()=><InboxSVG />
    },
    {
      badge : true,
      icon:()=><NotificationSVG />
    },
    {
      icon:()=><HelpSVG />
    }
  ]
  return (
    <Layout className="w-full px-2 md:px-6 py-2 border-b-2 border-gray-2 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <LogoSVG />
        </div>
        {/* Desktop Nav Items */}
        {isDesktop ? (
          <div className="flex">
            {navIcons.map((d:any,i:number)=>{
              if (d.badge){
                return <div key={i} className="flex items-center px-6">
                <Badge count={5}>
                  {d.icon()}
                </Badge>
              </div>
              }
              return <div key={i} className="flex items-center px-6">
              {d.icon()}
            </div>
            })}
            
            <div className="flex items-center ">
              <Image
                src="/user_image.png"
                width={60}
                height={60}
                alt="Picture of the author"
              />
            </div>
          </div>
        ) : (
          <div onClick={() => setOpen(true)}>
            <MenuSVG />
          </div>
        )}
      </div>
      {/* Drawer for Mobile */}
      <MyDrawer open={open} onClose={onClose} />
    </Layout>
  )
}
