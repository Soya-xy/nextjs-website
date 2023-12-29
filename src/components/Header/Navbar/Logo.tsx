import Image from 'next/image'

export const Logo = () => {
  return (
    <Image
      width={571}
      height={248}
      className="w-full text-black sm:w-full"
      style={{ color: 'transparent' }}
      src="/images/logo.png"
      alt="logo"
    />
  )
}
