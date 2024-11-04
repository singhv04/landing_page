import { allIcons } from "@/icons/all-icons";

const Legacy: React.FC = () => {
  const { oldWay, newWay } = allIcons;

  return (
    <div className="cg mx-auto w-[90%] text-foreground lg:w-[65%]">
      {/* Header Section */}
      <h1 className="header-text mb-8 text-center text-2xl font-medium">
        Old Way{" "}
        <span className=" hidden md:inline">
          <span className="">vs</span>{" "}
          <span className=" text-emerald-500">New Way</span>
        </span>
      </h1>
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
        {/* Old Way Card */}
        <div className="flex flex-col justify-between rounded-lg border-2 border-emerald-500/25 bg-background p-6 shadow-lg shadow-emerald-500/50">
          <div className="p-4">
            <ul className="space-y-3 text-muted">
              <li className="flex items-center gap-4 text-sm md:text-lg">
                {oldWay} Manual call handling.
              </li>
              <li className="flex items-center gap-4 text-sm md:text-lg">
                {oldWay} Limited hours for support.
              </li>
              <li className="flex items-center gap-4 text-sm md:text-lg">
                {oldWay} High staffing and training costs.
              </li>
              <li className="flex items-center gap-4 text-sm md:text-lg">
                {oldWay} Inconsistent customer service.
              </li>
              <li className="flex items-center gap-4 text-sm md:text-lg">
                {oldWay} Limited call insights.
              </li>
              <li className="flex items-center gap-4 text-sm md:text-lg">
                {oldWay} Complex, time-consuming integrations.
              </li>
            </ul>
          </div>
        </div>

        <h1 className="header-text mb-0 text-center text-2xl font-medium md:hidden text-emerald-500">
          New Way
        </h1>
        {/* New Way Card */}
        <div className="flex flex-col justify-between rounded-lg border-2 border-emerald-500/25 bg-background p-6 shadow-lg shadow-emerald-500/50">
          <div className="p-4">
            <ul className="space-y-3 text-muted">
              <li className="flex items-center gap-4 text-sm md:text-lg">
                {newWay} Automated, intelligent responses.
              </li>
              <li className="flex items-center gap-4 text-sm md:text-lg">
                {newWay} 24/7 automated assistance.
              </li>
              <li className="flex items-center gap-4 text-sm md:text-lg">
                {newWay} Consistent, brand-aligned tone.
              </li>
              <li className="flex items-center gap-4 text-sm md:text-lg">
                {newWay} Cost-effective voice automation.
              </li>
              <li className="flex items-center gap-4 text-sm md:text-lg">
                {newWay} Real-time analytics dashboard.
              </li>
              <li className="flex items-center gap-4 text-sm md:text-lg">
                {newWay} Seamless integration with existing systems.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legacy;
