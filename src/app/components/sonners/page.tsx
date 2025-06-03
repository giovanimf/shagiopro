"use client";
import { DashboardLayout } from "@/components/DashboardLayout";
import { DashboardHeader } from "@/components/DashHeader";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { AlertTriangle } from "lucide-react";

export default function Sonners() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4">
        <DashboardHeader
          heading="Toasts"
          subheading="Practical examples of toasts using Sonner."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {/* Default Toast */}
          <Card className="bg-gradient-to-t from-primary/5 to-card dark:bg-card">
            <CardHeader>
              <CardTitle>Default Toast</CardTitle>
              <CardDescription>
                A simple toast with title and description.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() =>
                  toast("Hello, world!", {
                    description: "This is a default toast.",
                    className:
                      "bg-primary/10 border border-primary text-primary",
                  })
                }
              >
                Show Default Toast
              </Button>
            </CardContent>
          </Card>

          {/* Success Toast */}
          <Card className="bg-gradient-to-t from-primary/5 to-card dark:bg-card">
            <CardHeader>
              <CardTitle>Success Toast</CardTitle>
              <CardDescription>
                Displays a success notification.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() =>
                  toast.success("Operation completed successfully!", {
                    className:
                      "bg-primary/10 border border-primary text-primary",
                  })
                }
              >
                Show Success Toast
              </Button>
            </CardContent>
          </Card>

          {/* Error Toast */}
          <Card className="bg-gradient-to-t from-primary/5 to-card dark:bg-card">
            <CardHeader>
              <CardTitle>Error Toast</CardTitle>
              <CardDescription>Displays an error notification.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() =>
                  toast.error(
                    "An error occurred while processing your request.",
                    {
                      className:
                        "bg-destructive/10 border border-destructive text-destructive",
                    },
                  )
                }
              >
                Show Error Toast
              </Button>
            </CardContent>
          </Card>

          {/* Action Toast */}
          <Card className="bg-gradient-to-t from-primary/5 to-card dark:bg-card">
            <CardHeader>
              <CardTitle>Action Toast</CardTitle>
              <CardDescription>Includes an undo button.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() =>
                  toast("Item deleted.", {
                    className:
                      "bg-secondary/10 border border-secondary text-secondary",
                    action: {
                      label: "Undo",
                      onClick: () =>
                        toast("Action undone.", {
                          className:
                            "bg-primary/10 border border-primary text-primary",
                        }),
                    },
                  })
                }
              >
                Show Action Toast
              </Button>
            </CardContent>
          </Card>

          {/* Long Description Toast */}
          <Card className="bg-gradient-to-t from-primary/5 to-card dark:bg-card">
            <CardHeader>
              <CardTitle>Long Description Toast</CardTitle>
              <CardDescription>
                Useful for more detailed messages.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() =>
                  toast("Scheduled maintenance", {
                    className:
                      "bg-secondary/10 border border-secondary text-secondary",
                    description:
                      "The system will be unavailable from 12:00 AM to 6:00 AM next Saturday for scheduled maintenance. We apologize for the inconvenience.",
                  })
                }
              >
                Show Long Description Toast
              </Button>
            </CardContent>
          </Card>

          {/* Custom Icon Toast */}
          <Card className="bg-gradient-to-t from-primary/5 to-card dark:bg-card">
            <CardHeader>
              <CardTitle>Icon Toast</CardTitle>
              <CardDescription>
                Adds a custom icon to the toast.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() =>
                  toast("Important warning!", {
                    icon: <AlertTriangle className="text-yellow-500" />,
                    description:
                      " This action may have irreversible consequences.",
                    className:
                      "pl-4 bg-secondary/10 border border-secondary text-secondary",
                  })
                }
              >
                Show Icon Toast
              </Button>
            </CardContent>
          </Card>

          {/* Custom Duration Toast */}
          <Card className="bg-gradient-to-t from-primary/5 to-card dark:bg-card">
            <CardHeader>
              <CardTitle>Custom Duration Toast</CardTitle>
              <CardDescription>
                Disappears automatically after 10 seconds.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() =>
                  toast("This toast will disappear after 10 seconds.", {
                    duration: 10000,
                    className:
                      "bg-primary/10 border border-primary text-primary",
                  })
                }
              >
                Show Custom Duration Toast
              </Button>
            </CardContent>
          </Card>

          {/* Loading + Success Toast */}
          <Card className="bg-gradient-to-t from-primary/5 to-card dark:bg-card">
            <CardHeader>
              <CardTitle>Loading + Success Toast</CardTitle>
              <CardDescription>
                Shows a loading toast followed by a success toast.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => {
                  const id = toast.loading("Processing...", {
                    className:
                      "bg-secondary/10 border border-secondary text-secondary",
                  });
                  setTimeout(() => {
                    toast.success("Process completed!", {
                      id,
                      className:
                        "bg-primary/10 border border-primary text-primary",
                    });
                  }, 3000);
                }}
              >
                Show Loading Toast
              </Button>
            </CardContent>
          </Card>

          {/* Top Positioned Toast */}
          <Card className="bg-gradient-to-t from-primary/5 to-card dark:bg-card">
            <CardHeader>
              <CardTitle>Top Positioned Toast</CardTitle>
              <CardDescription>
                Change the position directly in the layout or via context.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() =>
                  toast("This toast is at the top.", {
                    position: "top-center",
                    className:
                      "bg-primary/10 border border-primary text-primary",
                  })
                }
              >
                Show Top Toast
              </Button>
            </CardContent>
          </Card>

          {/* Persistent Toast */}
          <Card className="bg-gradient-to-t from-primary/5 to-card dark:bg-card">
            <CardHeader>
              <CardTitle>Persistent Toast</CardTitle>
              <CardDescription>
                Does not close automatically; requires user action.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() =>
                  toast("This toast will only be closed manually.", {
                    duration: Infinity,
                    className:
                      "bg-secondary/10 border border-secondary text-secondary",
                  })
                }
              >
                Show Persistent Toast
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
