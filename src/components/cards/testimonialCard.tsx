import React from "react";

export default function TestimonialCard() {
  return (
    <div className="w-1/3 card-bg h-64 p-6">
      <div className="flex items-center justify-between">
        <div className="flex">
          <div className="w-14 h-14 rounded-full bg-slate-300"></div>
          <div className="text-white pl-6">
            <h4 className="text-xl">Sackie Jones Rio</h4>
            <p className="text-sm font-light opacity-70">
              Web Developer at Brizzy
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-teal-200"></div>
          <p className="text-white">4.8</p>
        </div>
      </div>

      <p className="text-white opacity-70 font-light pt-12">
        "Platform NFT marketplace terbaik yang miliknya pengguna mendapatkan
        banyak manfaat dan banyak bermunculan seperti pasar sebagus RAINFTB
        ini."
      </p>
    </div>
  );
}
