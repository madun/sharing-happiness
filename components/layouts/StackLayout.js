import { useRouter } from "next/router";
import { ArrowBackIcon, ShareIcon } from "../atoms/Icons";

export default function StackLayout(props) {
  const router = useRouter();

  return (
    <div className="flex-1">
      <div className="z-10 bg-white absolute top-0 w-full flex justify-between border-b h-16 items-center px-4">
        <div className="flex pr-4 w-11/12">
          <div
            onClick={() => router.back()}
            className="cursor-pointer text-gray-500 pr-4"
          >
            <ArrowBackIcon fontSize="small" />
          </div>
          <span className="text-lg font-semibold truncate">{props.title}</span>
        </div>
        <div className="w-1/10 text-teal-400">
          <ShareIcon />
        </div>
      </div>
      <div className="bg-white h-full w-full px-5 pb-6 pt-20 overflow-y-auto">
        {props.children}
      </div>
    </div>
  );
}
