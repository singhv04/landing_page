import { allIcons } from "@/icons/all-icons";

const Legacy: React.FC = () => {
  const { oldWay, newWay } = allIcons;

  return (
    <div className="cg mx-auto w-[90%] text-foreground lg:w-[65%]">
      {/* Header Section */}
      <h1 className="header-text mb-8 text-center text-2xl font-bold">
        Old Way vs New Way
      </h1>
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
        {/* Old Way Card */}
        <div className="flex flex-col justify-between rounded-lg border-2 border-emerald-500/25 bg-background p-6 shadow-lg transition-shadow duration-200 hover:shadow-emerald-500/50">
          <div className="mb-4 text-center">
            <h2 className="py-1 text-lg font-semibold md:text-2xl">Old Way</h2>
            <p className="text-xs text-muted md:text-sm">Common Pain Points</p>
          </div>
          <div className="p-4">
            <ul className="space-y-3">
              <li className="flex items-center gap-4 text-sm md:text-lg">
                {oldWay} Pain Point 1
              </li>
              <li className="flex items-center gap-4 text-sm md:text-lg">
                {oldWay} Pain Point 2
              </li>
              <li className="flex items-center gap-4 text-sm md:text-lg">
                {oldWay} Pain Point 3
              </li>
              <li className="flex items-center gap-4 text-sm md:text-lg">
                {oldWay} Pain Point 4
              </li>
            </ul>
          </div>
        </div>

        {/* New Way Card */}
        <div className="flex flex-col justify-between rounded-lg border-2 border-emerald-500/25 bg-background p-6 shadow-lg transition-shadow duration-200 hover:shadow-emerald-500/50">
          <div className="mb-4 text-center">
            <h2 className="py-1 text-lg font-semibold md:text-2xl">New Way</h2>
            <p className="text-xs text-muted md:text-sm">Proposed Solutions</p>
          </div>
          <div className="p-4">
            <ul className="space-y-3">
              <li className="flex items-center gap-4 text-sm md:text-lg">
                {newWay} Solution Point 1
              </li>
              <li className="flex items-center gap-4 text-sm md:text-lg">
                {newWay} Solution Point 2
              </li>
              <li className="flex items-center gap-4 text-sm md:text-lg">
                {newWay} Solution Point 3
              </li>
              <li className="flex items-center gap-4 text-sm md:text-lg">
                {newWay} Solution Point 4
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legacy;
