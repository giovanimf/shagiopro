import { DashboardLayout } from "@/components/DashboardLayout";
import { DashboardHeader } from "@/components/DashHeader";
import { FormReset } from "./components/FormReset";

export default function Profile() {
    return (
        <DashboardLayout>
            <div className="flex flex-col gap-4">
                <DashboardHeader
                    heading="Reset Password"
                    subheading="Change your password here."
                />
                <FormReset />
            </div>
        </DashboardLayout>
    );
}
