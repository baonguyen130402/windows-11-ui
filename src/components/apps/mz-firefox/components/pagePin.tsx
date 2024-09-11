import youtube from "../../../../assets/logo/youtube.png";

export function PagePin() {
  const pages = [
    {
      title: "Youtube",
      image: youtube,
    },
    {
      title: "Youtube",
      image: youtube,
    },
    {
      title: "Youtube",
      image: youtube,
    },
    {
      title: "Youtube",
      image: youtube,
    },
  ];

  return (
    <div className="flex items-center gap-4">
      {pages.map((page) => (
        <div className="flex flex-col items-center">
          <div className="flex items-center p-2 bg-[#333] rounded-[0.225rem] shadow-lg shadow-black">
            <img src={page.image} className="h-14 w-14" />
          </div>
          <span className="size-sm">{page.title}</span>
        </div>
      ))}
    </div>
  );
}
