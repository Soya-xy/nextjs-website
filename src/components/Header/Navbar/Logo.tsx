import Image from 'next/image'

export const Logo = () => {
  return (
    <Image
      width={1980}
      height={1980}
      className="w-20 text-black sm:w-14"
      style={{ color: 'transparent' }}
      src="/images/logo.png"
      alt="logo"
    />
  )
}
