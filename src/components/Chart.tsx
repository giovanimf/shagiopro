"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    { month: "January", myTickets: 186, totalTickets: 280 },
    { month: "February", myTickets: 305, totalTickets: 400 },
    { month: "March", myTickets: 237, totalTickets: 350 },
    { month: "April", myTickets: 73, totalTickets: 290 },
    { month: "May", myTickets: 209, totalTickets: 370 },
    { month: "June", myTickets: 214, totalTickets: 390 },
]

const chartConfig = {
    myTickets: {
        label: "My Tickets",
        color: "var(--primary-hex)",
    },
    totalTickets: {
        label: "Total Tickets",
        color: "var(--secondary-hex)",
    },
} satisfies ChartConfig

export function Chart() {
    return (
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full md:w-1/2">
            <BarChart data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="myTickets" fill={chartConfig.myTickets.color} radius={4} />
                <Bar dataKey="totalTickets" fill={chartConfig.totalTickets.color} radius={4} />
            </BarChart>
        </ChartContainer>
    )
}
