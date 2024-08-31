import clsx from "clsx";
import { useContext } from "react";
import { ModalContext } from "../../lib/contexts/ModalContext";

export function Icon(props: any) {
  const { title, icon, isActive, rowId, colId = 1 } = props;
  const { isOpening, setIsOpening } = useContext(ModalContext);

  const myClassName = clsx(
    "grid text-center",
    {
      "hover:rounded-[0.25rem] hover:bg-[rgba(255,255,255,.15)] p-1":
        title !== "",
    },
  );

  return (
    <li className={myClassName} onDoubleClick={() => setIsOpening(!isOpening)}>
      {icon}
      <span className="text-sm">{title}</span>
    </li>
  );
}
