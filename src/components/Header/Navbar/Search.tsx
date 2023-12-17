// import { Input } from '@nextui-org/input'

export function Search() {
  return (
    <>
      <div className="search__active">
        <div className="search__popup-wrap">
          <div className="search__layer" />
          <div className="search__close">
            <span>
              <i className="flaticon-swords-in-cross-arrangement" />
            </span>
          </div>
          <div className="search__wrap text-center">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2 className="title">
                    ... <span>Search Here</span> ...
                  </h2>
                  <div className="search__form">
                    <input
                      className="search-input-field"
                      type="text"
                      name="s"
                      value=""
                      placeholder="Type keywords here"
                    />
                    <button className="search-btn">123</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
