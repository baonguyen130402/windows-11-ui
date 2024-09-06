import clsx from "clsx";

export function Icon(props: any) {
  const { title, icon, isActive, rowId, colId = 1 } = props;

  const myClassName = clsx(
    "grid text-center",
    {
      "hover:rounded-[0.25rem] hover:bg-[rgba(255,255,255,.15)] p-1":
        title !== "",
    },
  );

  return (
    <li className={myClassName} onDoubleClick={() => console.log(title)}>
      {icon}
      <span className="text-sm">{title}</span>
    </li>
  );
}
