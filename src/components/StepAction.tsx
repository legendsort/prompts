import _ from "lodash";
import clsx from "clsx";

export interface StepActionProps extends React.HTMLAttributes<HTMLDivElement> {
  current: number;
  total: number;
}

export default function StepAction({
  className,
  current = 1,
  total = 6,
  ...rest
}: StepActionProps) {
  const getCurrent = (current: number, total: number) =>
    current > total ? total : current;

  return (
    <div className={clsx(className, "relative")} {...rest}>
      <div className="absolute left-3 top-1 w-[calc(100%-24px)] h-4 bg-white" />
      <div
        className={clsx("absolute left-3 top-1 h-4 bg-yellow")}
        style={{
          width: `calc((100% - 24px) * ${(
            (1.0 * getCurrent(current, total - 1)) /
            (total - 1)
          ).toFixed(5)})`,
        }}
      />
      <div className="relative flex justify-between">
        {_.range(1, total + 1).map((i) => (
          <div
            key={i}
            className={clsx(
              "flex items-center justify-center w-6 h-6 text-grey font-bold border border-white rounded-full",
              i <= getCurrent(current, total)
                ? "bg-yellow border-white"
                : "bg-white border-yellow"
            )}
          >
            {i}
          </div>
        ))}
      </div>
    </div>
  );
}
