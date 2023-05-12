'use client'
import CustomMediaQuery from '@/components/GetMediaQuery/page'
import MobileLayout from '@/components/MobileLayout/page'

export default function Page() {
  const [isDesktop, isTablet] = CustomMediaQuery()
  if (isDesktop) {
    return <p>DEsktop</p>
  }
  if (isTablet) {
    return <p>Tablet</p>
  }
  return (
    <>
      <MobileLayout />
      <div>
        <span className="font-customFont font-extrabold">WeWork </span>{' '}
        <span className="font-customFont">Salesforce</span>
      </div>
    </>
  )
}
