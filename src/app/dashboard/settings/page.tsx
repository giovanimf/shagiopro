
import { DashboardLayout } from "@/components/DashboardLayout";
import { DashboardHeader } from "@/components/DashHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import FormSettingsPassoword from "./components/FormSettingsPassoword";
import LogginSessions from "./components/LogginSettions";

export default function Settings() {
    return (
        <DashboardLayout>
            <div className="flex flex-col gap-4">
                <DashboardHeader
                    heading="Settings"
                    subheading="Manage your account preferences and update your personal information."
                />
                <Card>
                    <CardHeader>
                        <CardTitle>Security Settings</CardTitle>
                        <CardDescription>
                            Manage your password and security preferences.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <FormSettingsPassoword />
                        <Separator />
                        <LogginSessions />
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
}
