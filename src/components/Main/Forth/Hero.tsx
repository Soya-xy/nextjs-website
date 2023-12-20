import Marquee from 'react-fast-marquee'

export default () => {
  return (
    <>
      <div className="overflow-hidden md:ml-[10px]">
        <Marquee pauseOnHover={true}>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((v, k) => (
            <div className="mx-5 h-full select-none" key={k}>
              <img
                src="https://themedox.com/mykd/wp-content/uploads/2023/10/project_05.jpg"
                alt=""
              />
              {k}
            </div>
          ))}
        </Marquee>
      </div>
    </>
  )
}
