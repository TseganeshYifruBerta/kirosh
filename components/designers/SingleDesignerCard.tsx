import { designer1 } from "@/public";
import { mdiStar } from "@mdi/js";
import Image from "next/image";
import { Icon } from "@mdi/react";
interface DesignerProps {
  name: string,
  address: string,
  bio: string,
  id: number
}
const SingleDesignerCard: React.FC<DesignerProps> = ({name, address, bio, id}) => {
  return (
    <div className="flex flex-wrap">
      <div className="w-1/2 lg:h-[300px]">
          <div className="relative w-full h-full">
            <Image
              src={designer1}
              alt="designer"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      <div className="w-1/2 p-2">
        <div className="pb-8 h-[100px]">
          <div className="font-bold text-2xl max-sm:text-sm">
            <span>{name}</span>
          </div>
          <div className="text-primary text-xs">
            <span>{address}</span>
          </div>
          <div className="flex flex-wrap">
            <Icon path={mdiStar} size={1} color="#D5695C" />
            <Icon path={mdiStar} size={1} color="#D5695C" />
            <Icon path={mdiStar} size={1} color="#D5695C" />
            <Icon path={mdiStar} size={1} color="#D5695C" />
            <Icon path={mdiStar} size={1} color="#D5695C" />
          </div>
        </div>
        <div className="pb-6 text-sm max-sm:hidden sm:h-[160px]">
          <span>
          {bio}
          </span>
        </div>
        <div className="flex flex-wrap justify-end h-[25px]">
          <button className="flex flex-wrap justify-center rounded-lg self-end bg-primary sm:w-3/5 text-sm font-bold max-sm:p-1 p-2">
            <span>+ Follow</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleDesignerCard;
