const HeaderTitle = ({ title }) => {
  return (
    <>
      <div className="gap-2 w-full flex sm:top-[6rem] z-10">
        <h2 className="rounded-md w-full bg-[linear-gradient(to_right,#e53935,#e35d5b)] px-3 py-1 text-xl font-semibold text-white sm:rounded-xl sm:px-4 sm:py-1.5 sm:text-2xl md:font-semibold">
          {title}
        </h2>
      </div>
    </>
  );
};

export default HeaderTitle;
