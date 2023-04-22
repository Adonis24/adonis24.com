import React from "react"
import Fade from "react-reveal/Fade"
import Image from "next/image";
import "./styles.module.scss"
// import starter from "../assets/images/starter.svg"
// import proffessional from "../assets/images/proffessional.svg"
// import premium from "../assets/images/premium.svg"

export default function Services() {
const starter = "https://res.cloudinary.com/ddgn7lxr9/image/upload/v1680598760/web-services-banner_sob2do.png";//"https://res.cloudinary.com/ddgn7lxr9/image/upload/v1679468035/images/trracntq5ewhyekojbqu.jpg"
 const proffessional ="https://res.cloudinary.com/ddgn7lxr9/image/upload/v1680598843/%D0%91%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_qodcdt.png";//"https://res.cloudinary.com/ddgn7lxr9/image/upload/v1679468035/images/trracntq5ewhyekojbqu.jpg"
 const premium = "https://res.cloudinary.com/ddgn7lxr9/image/upload/v1680599303/automatization-1c_gkvumc.png";//"https://res.cloudinary.com/ddgn7lxr9/image/upload/v1679468035/images/trracntq5ewhyekojbqu.jpg"
    return (
    <section className="pricing-list" id="plans">
      <div className="container">
        <Fade up>
          {/* <div className="row">
            <div className="col-sm-12">
              <div className="d-sm-flex justify-content-between align-items-center mb-2">
                <div>
                  <h3 className="font-weight-medium text-dark ">Pricing</h3>
                  <h5 className="text-dark ">
                    Lorem ipsum dolor sit amet, consectetur pretium pretium
                    tempor. Lorem ipsum dolor{" "}
                  </h5>
                </div>
                <div className="mb-5 mb-lg-0 mt-3 mt-lg-0">
                  <div className="d-flex align-items-center">
                    <p className="mr-2 font-weight-medium monthly text-active check-box-label">
                      Monthly
                    </p>
                    <label className="toggle-switch toggle-switch">
                      <input
                        type="checkbox"
                        defaultChecked
                        id="toggle-switch"
                      />
                      <span className="toggle-slider round" />
                    </label>
                    <p className="ml-2 font-weight-medium yearly check-box-label">
                      Yearly
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </Fade>
        <Fade up>
          <div className="row">
            <div className="col-sm-4">
              <div className="pricing-box">
                <img src={starter} alt="starter" />
                <h6 className="tw-font-bold tw-text-lg tw-text-center title-text">
                 Веб-сервисы
                </h6>
                <h1 className="text-amount mb-4 mt-2">
                Разрабатываем сложные веб-сервисы,
                которые упрощают бизнес-процессы
                и помогают улучшать результаты
                </h1>
                <ul className="pricing-list">             
                </ul>
                <button className="btn btn-outline-primary tw-p-4">Подробнее</button>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="pricing-box selected">
                <img src={proffessional} alt="starter" />
                <h6 className="tw-font-bold tw-text-lg tw-text-center title-text">Мобильные приложения</h6>
                <h1 className="text-amount mb-4 mt-2">
                Разрабатываем надежные кроссплатформенные приложения с современным и эффективным UX/UI
                </h1>
                <ul className="pricing-list">
                  <li>{""}</li>
                  <li>{""}</li>
                  <li>{""}</li>
                  <li>{""}</li>
                </ul> 
                <button className="btn btn-primary">Подробнее</button>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="pricing-box">
                <img src={premium} alt="starter" width={350} height={350} />
            
                <h6 className="tw-font-bold tw-text-lg tw-text-center title-text">Внедрение и интеграция 1С решений</h6>
                <h1 className="text-amount mb-4 mt-2">
                Автоматизация процессов  учета на решений на базе программных решений 1С
                </h1>
                <ul className="pricing-list">
                  <li>{""}</li>
                  <li>{""}</li>
                  <li>{""}</li>
                  <li>{""}</li>
                </ul> 
                <button className="btn btn-outline-primary">Подробнее</button>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  )
}