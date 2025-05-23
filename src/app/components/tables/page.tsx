import { DashboardLayout } from "@/components/DashboardLayout";
import { DashboardHeader } from "@/components/DashHeader";
import DataTableDemon from "./components/DataTable/DataTableDemon";
import TableSimple from "./components/TableSimple/TableSimple";

export default function Tables() {
    return (
        <DashboardLayout>
            <div className="flex flex-col gap-6">
                <DashboardHeader
                    heading="Tables"
                    subheading="Practical examples of data tables."
                />
                <TableSimple />
                <DataTableDemon />
            </div>
        </DashboardLayout >
    )
}
