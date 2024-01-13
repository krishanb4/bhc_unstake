import numeral from "numeral";

interface PoolCardDetailsProps {
  tvl?: number;
  name?: string;
}

const PoolCardDetails: React.FC<
  React.PropsWithChildren<PoolCardDetailsProps>
> = ({ tvl, name }) => {
  return (
    <div className="flex justify-center col-span-2 space-x-4">
      <span className="px-4 py-2 text-white hidden md:flex col-span-2 justify-center">
        {Number(tvl) > 0.001 ? tvl : 0} {name}
      </span>
    </div>
  );
};

export default PoolCardDetails;
