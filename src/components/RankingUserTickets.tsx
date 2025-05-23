import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const activities = [
    { id: 1, user: { name: "Alice", avatar: "" }, ticketsResolved: 123 },
    { id: 2, user: { name: "Bob", avatar: "" }, ticketsResolved: 87 },
    { id: 3, user: { name: "Charlie", avatar: "" }, ticketsResolved: 45 },
    { id: 4, user: { name: "Diana", avatar: "" }, ticketsResolved: 68 },
    { id: 5, user: { name: "Ethan", avatar: "" }, ticketsResolved: 152 },
    //{ id: 6, user: { name: "Fiona", avatar: "" }, ticketsResolved: 99 },
]

const RankingUserTickets = () => {
    return (
        <Card className='w-full md:w-1/2'>
            <CardHeader>
                <CardTitle>Top Performers</CardTitle>
                <CardDescription>Users ranked by the number of tickets resolved this month</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {activities.map((activity) => (
                        <div
                            key={activity.id}
                            className="overflow-hidden rounded-lg border transition-all duration-200"
                        >
                            <div className="flex items-center gap-4 p-3 hover:bg-muted/50 transition-colors duration-200">
                                <Avatar>
                                    <AvatarImage
                                        src={activity.user.avatar || "/placeholder.svg"}
                                        alt={activity.user.name}
                                    />
                                    <AvatarFallback className='bg-primary text-white'>{activity.user.name.charAt(0)}</AvatarFallback>
                                </Avatar>

                                <div className="flex-1 space-y-1">
                                    <p className="text-sm font-medium leading-none">
                                        {activity.user.name}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        Tickets resolved this month: {activity.ticketsResolved}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

export default RankingUserTickets;