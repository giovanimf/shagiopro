interface DashboardHeaderProps {
    heading: string;
    subheading: string;
}

export function DashboardHeader({ heading, subheading }: DashboardHeaderProps) {
    return (
        <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">{heading}</h1>
            <p className="text-muted-foreground">
                {subheading}
            </p>
        </div>
    );
}
