import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";
// psql "postgres://default:wrfax7NOdX9n@ep-young-field-a4r8hsb2.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require"
// psql "postgres://default:wrfax7NOdX9n@ep-young-field-a4r8hsb2.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require"
export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
