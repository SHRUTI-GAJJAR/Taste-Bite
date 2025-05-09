import { TiStarFullOutline } from "react-icons/ti";

const getRatingColor = (rating) => {
  if (rating < 2) return "bg-red-500";
  if (rating < 3) return "bg-yellow-500";
  if (rating < 4) return "bg-green-400";
  return "bg-green-500";
};

const RatingBadge = ({ rating }) => {
  const bgColor = getRatingColor(rating);

  return (
    <div
      className={`${bgColor} rating w-fit flex items-center justify-center rounded-sm px-[0.3rem] py-[0.08rem] gap-0.5 xl:rounded-md`}
    >
      <span className="ratingNumber text-sm xl:text-[0.925rem] 2xl:text-[1rem] text-white">
        {rating ? rating : "N/A"}
      </span>
      <span className="ratingIcon">
        <TiStarFullOutline className="text-white text-sm xl:text-[0.925rem] 2xl:text-[1rem]" />
      </span>
    </div>
  );
};

export default RatingBadge;
