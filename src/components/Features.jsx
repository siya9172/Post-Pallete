import React from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { LiaEditSolid } from "react-icons/lia";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { TiThSmallOutline } from "react-icons/ti";

const HoverDevCards = () => {
  return (
    <div className="p-6 fadeInUp-animation  cursor-default">
      <p className="text-3xl font-bold mb-6 text-white glow ">Features</p>
      <div className="grid gap-4  grid-cols-2 lg:grid-cols-4">
        <Card
          title="Uploads"
          subtitle="Seamless image uploading"
          Icon={IoCloudUploadOutline}
        />
        <Card 
        title="Editor"
        subtitle="Advanced text styling options"
        Icon={LiaEditSolid} />
        <Card
          title="Privacy"
          subtitle="User-only content access"
          Icon={MdOutlinePrivacyTip}
        />
        <Card 
        title="Management"
         subtitle="Easy article control"  
         Icon={TiThSmallOutline} />
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, Icon, href }) => {
  return (
    <div
      
      className="w-full p-4 rounded border-[0px] h-48 border-slate-300 relative overflow-hidden group bg-white"
    >
      <div className=" absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
      <div className="flex justify-center items-center">

      <Icon className="mb-2  text-5xl text-blue-700 group-hover:text-white transition-colors relative z-10 duration-300" />
      </div>
      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </div>
  );
};

export default HoverDevCards;