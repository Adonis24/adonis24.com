import React from "react";
import Image from "next/image";
import Navigation from "../components/header/Navigation";
import { AboutPopover } from "../components/popovers/AboutPopover";
import { useSession, signIn } from "next-auth/react";

import { useHref } from "react-router-dom";
const About = () => {
  const awards =
    "https://res.cloudinary.com/ddgn7lxr9/image/upload/v1681993182/%D0%98%D1%81%D1%85._N_%D0%9B%D0%9F%D0%9E9-7707823594-1_uywhwe.png";

  return (
    <>
      <Navigation />
      {/* <AboutPopover/> */}
      {/* <div className="row"> */}
      {/* <div className="col-6">
      
              <div class="card-zoom">
                <div class="card-zoom-image tw-bg-awardsAdonis2022_1"></div>
              </div>
            </div> */}
      {/* <div className="col"> */}
      {/* <a className="tw-flex items-center p-1 rounded-sm hover:tw-slate-400 diruation-300"> */}
      {/* <div className="tw-flex flex-col"> */}
      <p className="tw-text-left tw-leading-relaxed tw-m-5">
        <h3 className="tw-font-ProximaNovaRegular text-lg">
          Компания Адонис занимается консалтингом и автоматизацией бизнеса под ключ. Разрабатываем 
          web-приложения, мобильные приложения на базе платформы React.  Интегрируем все системы с учетными системами на базе программных продуктов 1С.
        </h3>
      </p>
      <p className="tw-text-left tw-leading-relaxed tw-mt-6 tw-m-5 ">
        <h2 className="tw-font-ProximaNovaRegular tw-text-left tw-leading-relaxed text-lg">
          Мы предоставляем полный спектр услуг по автоматизации управления и
          учета на предприятиях: консультации на этапе подбора программного
          продукта и его демонстрация; поставка программного обеспечения;
          внедрение программного обеспечения; сопровождение и обновление
          программного обеспечения; информационно-технологическое сопровождение;
          обучение пользователей и ИТ-специалистов.
        </h2>
      </p>
      <p className="tw-text-left tw-leading-relaxed tw-mt-6 tw-m-5">
        <h3 className="tw-font-ProximaNovaRegular tw-text-left tw-leading-relaxed text-lg">
          Наша компания также занимается разработкой собственных программных
          продуктов на платформе «1С:Предприятие 8», React.
          <blockquote>
            В  компании работают сертифицированные
             специалисты, которые постоянно совершенствуют свои
            знания и навыки.
          </blockquote>
          Они помогут качественно и оперативно решить задачи по автоматизации
          управления и учета на вашем предприятии. Наша компания опирается в
          своей работе на знание и повседневное применение стандартов качества,
          проектных методов в управлении, процессного подхода в организации
          нашей деятельности. В нашей компании работают высококвалифицированные
          специалисты в области системного администрирования, что помогает
          выполнять полную автоматизацию в короткие сроки.
        </h3>
      </p>
      {/* </div> */}
      {/* </a> */}
      {/* </div> */}
      {/* </div> */}

      <div class="tw-flex tw-flex-col">
        <div class="tw-overflow-x-auto tw-sm:mx-0.5 tw-lg:mx-0.5">
          <div class="tw-py-2 tw-inline-block tw-min-w-full tw-sm:px-6 tw-lg:px-8">
            <div class="tw-overflow-hidden">
              <table class="tw-min-w-full">
                <thead class="tw-bg-gray-200 tw-border-b">
                  <tr>
                    <th
                      scope="col"
                      class="tw-text-sm tw-font-medium tw-text-gray-900 tw-px-6 tw-py-4 tw-text-left"
                    >
                      Телефон
                    </th>
                    <th
                      scope="col"
                      class="tw-text-sm tw-font-medium tw-text-gray-900 tw-px-6 tw-py-4 tw-text-left"
                    >
                      E-mail
                    </th>
                    <th
                      scope="col"
                      class="tw-text-sm tw-font-medium tw-text-gray-900 tw-px-6 tw-py-4 tw-text-left"
                    >
                      Адрес
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="tw-bg-white tw-border-b tw-transition tw-duration-300 tw-ease-in-out tw-hover:bg-gray-100">
                    <td class="tw-px-6 tw-py-4 tw-whitespace-nowrap tw-text-sm tw-font-medium tw-text-gray-900">
                      <a href="tel:+74991101870">+7(499)-110-18-70</a>
                    </td>
                    <td class="tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-4 tw-whitespace-nowrap">
                      <a href="mailto:info@adonis24.ru"> info@adonis24.ru </a>
                    </td>
                    <td class="tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-4 tw-whitespace-nowrap">
                      127055, Москва г, Сущевская ул, дом № 12, строение 1,
                      кабинет 73
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

{
  /* <div className="awards-box">
  <Image alt="" src={awards} width={650} height={850} />
</div>; 


 <div class="tw-flex tw-items-center tw-min-h-screen">
            <div class="tw-flex tw-flex-wrap tw-justify-center">


*/
}
