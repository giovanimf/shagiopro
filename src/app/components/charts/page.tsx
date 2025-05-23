"use client"
import { DashboardLayout } from "@/components/DashboardLayout";
import { DashboardHeader } from "@/components/DashHeader";
import { AreaChartExample } from "./components/AreaChartExample";
import { LineChartDotsExample } from "./components/LineChartDotsExample";
import { BarChartExample } from "./components/BarChartExample";
import { AreaChartInteractiveExample } from "./components/AreaChartInteractiveExample";

export default function Charts() {
    return (
        <DashboardLayout>
            <div className="flex flex-col gap-6">
                <DashboardHeader
                    heading="Charts"
                    subheading="Practical examples showcasing different types of chart components."
                />
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                    <LineChartDotsExample />
                    <BarChartExample />
                    <AreaChartExample />
                    <AreaChartInteractiveExample />
                </div>
            </div>
        </DashboardLayout>
    );
}
