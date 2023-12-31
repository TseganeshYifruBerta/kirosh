import { designer1 } from "@/public";
import Image from "next/image";
import { Icon } from "@mdi/react";
import { mdiStar } from "@mdi/js"

const DesignerDetails : React.FC = () => {
    return (
      <div>
        <div className="grid sm:grid-cols-2 grid-cols-1 font-bold gap-4 pb-16 pt-10">
        <div className="pl-6">
        
        <div className="w-full max-lg:h-[240px] lg:h-[300px]">
          <div className="relative w-1/2 h-full">
            <Image
              src={designer1}
              alt="designer"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
          <div>
            <div>Olivia Rodriguez</div>
            <div>876 Cedar Road, Seaside, USA</div>
            <div>
              <span>5+ Year Expirience</span>
            </div>
            <div className="flex flex-wrap">
            <Icon path={mdiStar} size={1} color="#D5695C" />
            <Icon path={mdiStar} size={1} color="#D5695C" />
            <Icon path={mdiStar} size={1} color="#D5695C" />
            <Icon path={mdiStar} size={1} color="#D5695C" />
            <Icon path={mdiStar} size={1} color="#D5695C" />
          </div>
          </div>
        </div>
        <div className="w-full -ml-72 pt-4">
          <div className="text-2xl pb-6">Bio</div>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur voluptates nisi eveniet aliquid provident consectetur,
            neque aliquam commodi nemo vel facere eligendi rerum officiis
            tenetur placeat quos ex quaerat repudiandae cum expedita, nesciunt
            corporis adipisci perferendis distinctio? Aliquid, quibusdam iste!
            Modi animi rem consectetur sit et ipsam corporis unde nihil?
          </div>
        </div>
       
      </div>
    
      </div> 
    );
}

export default DesignerDetails;