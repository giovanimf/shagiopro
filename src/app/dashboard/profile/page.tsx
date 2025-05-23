import { DashboardLayout } from "@/components/DashboardLayout";
import { DashboardHeader } from "@/components/DashHeader";
import ProfileForm from "./components/FormProfile";

export default function Profile() {
    return (
        <DashboardLayout>
            <div className="flex flex-col gap-4">
                <DashboardHeader
                    heading="Profile"
                    subheading="Welcome back, Giovani! Here's an overview of your profile ."
                />
                <ProfileForm />
            </div>
        </DashboardLayout>
    );
}
