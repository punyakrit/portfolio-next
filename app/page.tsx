import Par from "@/components/Par"
import Main from "@/components/Main"

import SideSocial from "@/components/SideSocial"

export default function page() {
  return (
    <div>
      <div className="bg-[#09001f] w-full h-screen text-white">
        <Par/>
        <div>

        <SideSocial/>
        <Main/>
        </div>

      </div>
    </div>
  )
}
