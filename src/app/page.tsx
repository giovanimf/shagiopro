import { Chart } from "@/components/Chart";
import { DashboardLayout } from "@/components/DashboardLayout";
import { DashboardHeader } from "@/components/DashHeader";
import RankingUserTickets from "@/components/RankingUserTickets";
import { DashboardStats } from "@/components/StatsInfo";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4">
        <DashboardHeader
          heading="Dashboard"
          subheading="Welcome back, Giovani! Here's an overview of your account."
        />
        <DashboardStats />
        <div className="flex md:flex-row flex-col gap-4">
          <Chart />
          <RankingUserTickets />
        </div>
      </div>
    </DashboardLayout>
  );
}
