import { Button } from "@/components/ui/button";
export default function LogginSessions() {
    return (
        <div className="space-y-4">
            <h3 className="text-lg font-medium">Login Sessions</h3>
            <div className="space-y-4">
                <div className="rounded-lg border p-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="font-medium">Current Session</p>
                            <p className="text-sm text-muted-foreground">Tokyo, Japan • Edge on Windows</p>
                        </div>
                        <div>
                            <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-100">
                                Active Now
                            </span>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg border p-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="font-medium">Device: Tablet</p>
                            <p className="text-sm text-muted-foreground">Berlin, Germany • Chrome on Android</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-sm text-muted-foreground">2 hours ago</p>
                            <Button className="cursor-pointer" variant="outline" size="sm">Log Out</Button>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg border p-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="font-medium">Device: Office PC</p>
                            <p className="text-sm text-muted-foreground">Paris, France • Firefox on Linux</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-sm text-muted-foreground">5 days ago</p>
                            <Button className="cursor-pointer" variant="outline" size="sm">Log Out</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <Button className="cursor-pointer" variant="outline">View All Sessions</Button>
            </div>
        </div>
    )
}