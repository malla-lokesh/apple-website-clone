const Header = () => {
  return (
    <header className="flex justify-between mx-auto my-0 max-w-5xl px-[22px]">
      <div className="opacity-[0.88 whitespace-nowrap] mt-[14px]">
        <div className="text-[12px] opacity-[0.64] leading-snug">
          13” and 15” models with M2 chip
        </div>
        <div className="text-[21px] opacity-[0.88] font-medium whitespace-nowrap">
          MacBook Air
        </div>
      </div>
      <div className="flex text-[12px] items-center leading-4 mt-[-3px] pt-8">
        <div className="ml-6 opacity-[0.56] leading-[22px]">Overview</div>
        <div className="ml-6 hover:text-[#06c] cursor-pointer leading-[22px] opacity-85">
          Tech Specs
        </div>
        <div className="ml-6 hover:text-[#06c] cursor-pointer leading-[22px] opacity-85">
          Compare
        </div>
        <div className="ml-6 hover:text-[#06c] cursor-pointer leading-[22px] opacity-85">
          New to Mac
        </div>
        <button className="ml-6 bg-[#0071e3] hover:bg-[#147ce5] text-white border-white leading-snug text-center min-w-[25px] px-[10px] py-[3px] border-[1px] border-solid rounded-[980px] mt-[-1px]">
          Buy
        </button>
      </div>
    </header>
  );
};

export default Header;
