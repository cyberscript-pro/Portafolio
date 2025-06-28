import { ForwardRefExoticComponent, RefAttributes } from "react";
import { IconType } from "react-icons";
import { LucideProps } from "lucide-react";
import z from "zod";

type ContactCardProps = {
  title: string;
  red: string;
  Icon:
    | IconType
    | ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
      >;
  red_title: string;
};

function ContactCard({ title, red, Icon, red_title }: ContactCardProps) {
  return (
    <div className="w-full rounded-xl overflow-hidden border border-gray-700 bg-gray-900 flex justify-between items-center">
      <div className="flex items-center justify-center pl-1">
        <div className="p-2 rounded-full">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="p-2 text-lg font-semibold">{title}</h3>
      </div>

      <div className="p-4 text-white">
        <div className="flex gap-3">
          <button
            onClick={() => {
              window.open(red, "_blank", "noopener,noreferrer");
            }}
            className={`text-sm bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded `}
          >
            {red_title}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
