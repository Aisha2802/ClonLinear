import imgOne from "public/img/issue10_01.png";
import imgTwo from "public/img/issue10_02.png";

export default function Issue8() {
  return (
    <div className="bg-[#08090A] flex justify-center w-full my-20">
      <div className=" w-[65%] flex border-y-2 border-[#212121] py-20">
        <div className="w-[50%]">
          <h3 className="font-medium text-xl mb-1">Build momentum with Cycles</h3>
          <p className="text-[#707b7c] w-[300px] mb-5">Create healthy routines and focus your team on what work should happen next.</p>
          <img src={imgOne} alt="" />
        </div>
        <div className="w-[50%] ">
          <h3 className="font-medium text-xl mb-1">Manage incoming work with Triage</h3>
          <p className="text-[#707b7c] w-[400px] mb-5">Review and assign incoming bug reports, feature requests, and other unplanned work.</p>
          <img src={imgTwo} alt="" />
        </div>
      </div>
    </div>
  );
}
