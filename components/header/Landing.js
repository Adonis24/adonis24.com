import React, { Component } from "react";
import JsonData from "./data.json";
import Link from "next/link";


const data = JsonData;
export class Landing extends Component {

  state = {
    landingPageData: {},
  };
  getlandingPageData() {
    this.setState({ landingPageData: JsonData });
  }

  componentDidMount() {
    this.getlandingPageData();
  }
  render() {
  
    return (
      <header id="header"  className="" >
       <div class="flex h-screen justify-center items-center flex-col">
        <div className="tw-bg-[url('/images/intro-bg.jpg')] 
            tw-bg-fixed tw-w-full tw-h-screen tw-bg-center 
            tw-bg-cover
            tw-bg-slate-900
            tw-bg-no-repeat 
            " >
         <div class="tw-w-full tw-h-full tw-flex tw-flex-col tw-space-y-4 tw-justify-center tw-items-center  tw-bg-slate-400/30 tw-backdrop-brightness-60">
          <h1 className={`tw-text-white tw-text-7xl tw-font-raleway-700 tw-font-bold` }>
            {data.Header.title ? data.Header.title : "Loading"}
            <span></span>
          </h1>
          <p className={`tw-text-black tw-text-3xl tw-w-1/2 tw-text-center tw-font-raleway-700 tw-font-bold`}>{data.Header ? data.Header.paragraph : "Loading"}</p>
         
          <Link href="/about" className="btn btn-primary btn-lg page-scroll">
          Подробнее
                  </Link>
     
        </div>
        </div>
        </div>
      </header>
    );
  }
}

export default Landing;
{
  /* <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                </div>
              </div>
            </div>
          </div> */
}
