import React from 'react';

const StyledButton = ({ children }) => {
  return <button className=" px-8 h-full hover:font-semibold hover:bg-slate-50">{children}</button>;
};

const StyledH1 = ({ children }) => {
  return <h1 className=" text-[100px] leading-none font-bold">{children}</h1>;
};
const StyledH3 = ({ children }) => {
  return <h3 className=" text-2xl leading-none">{children}</h3>;
};

export default function HeroBanner() {
  return (
    <>
      <nav className="sticky bg-white opacity-80 z-10  top-0 flex justify-between h-16 items-center">
        <StyledButton>logo</StyledButton>
        <div id="button-container" className="h-full">
          <StyledButton>company</StyledButton>
          <StyledButton>about</StyledButton>
        </div>
      </nav>

      <section id="hero-banner" className="h-[80vh] w-full relative overflow-hidden ">
        <div className="h-full w-full relative overflow-hidden blur-3xl  ">
          <div className=" h-[1200px] w-[1200px]  bg-green-300 animate-spotlight1 opacity-50 absolute left-[30%] top-[20%] rounded-full" />
          <div className=" h-[1200px] w-[1200px] bg-indigo-300 animate-spotlight2 opacity-50 absolute left-[30%] top-[20%] rounded-full" />
          <div className=" h-[1200px] w-[1200px] bg-blue-300 animate-spotlight3 opacity-50 absolute left-[30%] top-[20%] rounded-full" />
        </div>
        <div id="banner-text" className="absolute h-full w-full flex flex-col justify-center items-center top-0 left-0">
          <StyledH3>{"Don't settle for the status quo..."}</StyledH3>
          <StyledH1>BE EXCELLENT</StyledH1>
        </div>
      </section>

      <section id="test" className="h-[200vh] w-full bg-slate-200" />
    </>
  );
}
