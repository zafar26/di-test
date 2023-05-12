'use client'
import { Badge, Drawer } from 'antd'
import Image from 'next/image'

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
        <div className="flex items-center py-3 border-gray-100 border-b-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.50195 0.4375C14.5071 0.4375 18.5645 4.49493 18.5645 9.5C18.5645 11.6649 17.8053 13.6524 16.5388 15.211L22.6648 21.3371C23.031 21.7032 23.031 22.2967 22.6648 22.6629C22.3321 22.9957 21.8112 23.026 21.4442 22.7536L21.3391 22.6629L15.213 16.5369C13.6543 17.8034 11.6668 18.5625 9.50195 18.5625C4.49688 18.5625 0.439453 14.5051 0.439453 9.5C0.439453 4.49493 4.49688 0.4375 9.50195 0.4375ZM9.50195 2.3125C5.5324 2.3125 2.31445 5.53045 2.31445 9.5C2.31445 13.4695 5.5324 16.6875 9.50195 16.6875C13.4715 16.6875 16.6895 13.4695 16.6895 9.5C16.6895 5.53045 13.4715 2.3125 9.50195 2.3125Z"
              fill="#657372"
            />
          </svg>
          <span className="ml-4 text-lg"> Search</span>
        </div>

        <div className="flex items-center  py-3 border-gray-100 border-b-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.8125 0.75H19.1875C21.3538 0.75 23.124 2.44556 23.2436 4.58197L23.25 4.8125V19.1875C23.25 21.3538 21.5544 23.124 19.418 23.2436L19.1875 23.25H4.8125C2.64621 23.25 0.875938 21.5544 0.756425 19.418L0.75 19.1875V4.8125C0.75 2.64621 2.44556 0.875938 4.58197 0.756425L4.8125 0.75ZM2.625 15.125V19.1875C2.625 20.3353 3.50889 21.2765 4.63309 21.3678L4.8125 21.375H19.1875C20.3353 21.375 21.2765 20.4911 21.3678 19.3669L21.375 19.1875V15.125H16.5938C16.1755 17.1854 14.4059 18.755 12.2504 18.8684L12 18.875C9.81625 18.875 7.98123 17.3816 7.46046 15.3605L7.40626 15.125H2.625ZM19.1875 2.625H4.8125C3.66479 2.625 2.72351 3.50889 2.63225 4.63309L2.625 4.8125V13.25H8.25C8.72463 13.25 9.11686 13.6027 9.17894 14.0603L9.1875 14.1875C9.1875 15.7408 10.4467 17 12 17C13.4886 17 14.707 15.8435 14.806 14.38L14.8125 14.1875C14.8125 13.7129 15.1652 13.3206 15.6228 13.2585L15.75 13.25H21.375V4.8125C21.375 3.66479 20.4911 2.72351 19.3669 2.63225L19.1875 2.625Z"
              fill="#657372"
            />
          </svg>

          <span className="ml-4 text-lg"> Inbox</span>
        </div>

        <div className="flex items-center  py-3 border-gray-100 border-b-2">
          <Badge count={5}>
            <svg
              width="22"
              height="24"
              viewBox="0 0 22 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6195 0.75C15.4113 0.75 19.3238 4.43525 19.4884 9.11202L19.4933 9.40149V14.1275L21.1261 17.7681C21.2079 17.9502 21.25 18.1469 21.25 18.3458C21.25 19.142 20.5879 19.7877 19.771 19.7877L14.1691 19.7894C14.1691 21.7006 12.5799 23.25 10.6195 23.25C8.72917 23.25 7.184 21.8092 7.07603 19.9927L7.06948 19.7868L1.47935 19.7877C1.27663 19.7877 1.07607 19.747 0.89012 19.6683C0.140933 19.3509 -0.202602 18.5017 0.122819 17.7713L1.74572 14.1286V9.40137C1.74643 4.60869 5.71183 0.75 10.6195 0.75ZM12.3938 19.7868L8.84476 19.7894C8.84476 20.745 9.63938 21.5197 10.6195 21.5197C11.542 21.5197 12.3002 20.8335 12.3861 19.956L12.3938 19.7868ZM10.6195 2.4803C6.69121 2.4803 3.52105 5.56514 3.52048 9.40149V14.4881L1.93032 18.0574H19.3188L17.7186 14.4893L17.7187 9.41632L17.7143 9.15655C17.5829 5.42663 14.4549 2.4803 10.6195 2.4803Z"
                fill="#657372"
              />
            </svg>
          </Badge>
          <span className="ml-4 text-lg"> Notification</span>
        </div>

        <div className="flex items-center  py-3 border-gray-100 border-b-2">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 0.5C19.9037 0.5 25.5 6.0975 25.5 13C25.5 19.9025 19.9037 25.5 13 25.5C6.09625 25.5 0.5 19.9025 0.5 13C0.5 6.0975 6.09625 0.5 13 0.5ZM13 2.58375C7.25625 2.58375 2.58375 7.25625 2.58375 13C2.58375 18.7437 7.25625 23.4163 13 23.4163C18.7437 23.4163 23.4163 18.7437 23.4163 13C23.4163 7.25625 18.7437 2.58375 13 2.58375ZM13 17.375C13.6904 17.375 14.25 17.9346 14.25 18.625C14.25 19.3154 13.6904 19.875 13 19.875C12.3096 19.875 11.75 19.3154 11.75 18.625C11.75 17.9346 12.3096 17.375 13 17.375ZM13 6.4375C14.8985 6.4375 16.4375 7.97652 16.4375 9.875C16.4375 11.1385 16.0656 11.8425 15.1236 12.8232L14.9129 13.0379C14.1355 13.8153 13.9375 14.1454 13.9375 14.875C13.9375 15.3927 13.5177 15.8125 13 15.8125C12.4823 15.8125 12.0625 15.3927 12.0625 14.875C12.0625 13.6115 12.4344 12.9075 13.3764 11.9268L13.5871 11.7121C14.3645 10.9347 14.5625 10.6046 14.5625 9.875C14.5625 9.01205 13.863 8.3125 13 8.3125C12.191 8.3125 11.5256 8.92734 11.4456 9.71524L11.4375 9.875C11.4375 10.3928 11.0177 10.8125 10.5 10.8125C9.98224 10.8125 9.5625 10.3928 9.5625 9.875C9.5625 7.97652 11.1015 6.4375 13 6.4375Z"
              fill="#657372"
            />
          </svg>

          <span className="ml-4 text-lg"> Help</span>
        </div>
      </div>
    </Drawer>
  )
}