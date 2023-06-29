import styles from "./styles/style";
// import { logo } from "../assets";
import { footerLinks, socialMedia } from "../data/constants";
const logo =
  "https://res.cloudinary.com/ddgn7lxr9/image/upload/v1679551336/images/ftjd1nhuzc120xwftska.jpg";
const Footer = () => (

    <div className="tw-container">
      <div className="tw-flex tw-justify-center">
        <div className="tw-flex tw-flex-col tw-w-1/4">
        <div className="tw-shrink-0 "> 
            <img className="tw-h-48   tw-md:h-full tw-md:w-48" src={logo} alt="Modern building architecture" />
         </div> 
        </div>
        <div className="tw-flex tw-flex-col tw-w-3/4">
          <div className=" tw-p-6  tw-uppercase tw-text-bold  tw-tracking-wide tw-text-sm tw-text-indigo-500 tw-font-semibold">
          Описание компании
          </div>
           <a href="#" className="tw-block tw-mt-1 tw-text-lg tw-leading-tight tw-font-medium tw-text-black tw-hover:underline">Incredible accommodation for your team</a>
          <p className="tw-mt-2 tw-text-slate-500">
            Looking to take your team away on a retreat to enjoy awesome food
            and take in some sunshine? We have a list of places to do just that.
          </p>
        </div>
      </div>
    </div>

);

export default Footer;

// className="tw-h-48   tw-md:h-full tw-md:w-48"
