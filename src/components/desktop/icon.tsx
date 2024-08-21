export function Icon(props: any) {
  const { title, icon, isActive, rowId, colId = 1 } = props;

  const myClassName =
    `row-start-${rowId} col-start-${colId} grid text-center hover:bg-[rgba(255,255,255,.15)] hover:rounded-[0.25rem] p-1`;

  return (
    <li className={myClassName}>
      {icon}
      <span className="text-sm">{title}</span>
    </li>
  );
}
