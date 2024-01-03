// import bg from '~/assets/img/5.jpg'

export const Eight = () => {
  return (
    <>
      <section
        className=" flex min-h-[450px] bg-black bg-cover bg-center"
        // style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="container mx-auto">
          <div className="row h-full items-center py-[130px]">
            <div className="col-lg-12">
              <div className="pq-section-title-style-1 text-center">
                <h2 className="pq-section-main-title">our trusted clients</h2>
              </div>
            </div>
            <div className="mx-auto flex flex-wrap justify-start">
              {[2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((v) => {
                return (
                  <>
                    <div className="flex basis-[20%] items-center justify-center">
                      <div className="pq-client-box relative h-[100px] w-[200px] overflow-hidden">
                        <img
                          decoding="async"
                          src={`/images/logos/${v}.png`}
                          alt="pq-client-img"
                          className="pq-client-img wh-full"
                        />
                        <img
                          decoding="async"
                          src={`/images/logos/h${v}.png`}
                          alt="pq-client-img"
                          className="pq-client-hover-img wh-full"
                        />
                      </div>
                    </div>
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
