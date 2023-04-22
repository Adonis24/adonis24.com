const styles = {
    boxWidth: "tw-xl:max-w-[1280px] tw-w-full",
  
    heading2: "tw-font-poppins twfont-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
  
    flexCenter: "tw-flex tw-justify-center tw-items-center",
    flexStart: "tw-flex tw-justify-center tw-items-start",
  
    paddingX: "tw-sm:px-16 tw-px-6",
    paddingY: "tw-sm:py-16 tw-py-6",
    padding: "tw-sm:px-16 tw-px-6 tw-sm:tw-py-12 tw-py-4",
  
    marginX: "tw-sm:mx-16 tw-mx-6",
    marginY: "tw-sm:my-16 tw-my-6",
  };
  
  export const layout = {
    section: `tw-flex tw-md:flex-row tw-flex-col ${styles.paddingY}`,
    sectionReverse: `tw-flex md:flex-row tw-flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `tw-flex-1 flex ${styles.flexCenter} tw-md:mr-10 tw-mr-0 tw-md:mt-0 tw-mt-10 tw-relative`,
    sectionImg: `tw-flex-1 tw-flex ${styles.flexCenter} tw-md:ml-10 tw-ml-0 tw-md:mt-0 tw-mt-10 tw-relative`,
  
    sectionInfo: `tw-flex-1 ${styles.flexStart} tw-flex-col`,
  };
  
  export default styles;
  