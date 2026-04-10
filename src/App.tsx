import { useState } from "react"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"

export default function App() {
  const [sliderValue, setSliderValue] = useState<number[]>([50])
  const [progressValue, setProgressValue] = useState(13)

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="flex justify-between items-center pb-8 border-b">
          <h1 className="text-4xl font-bold">Tailmater React Components</h1>
          <ModeToggle />
        </header>

        {/* Buttons */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
          <div className="flex gap-4">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </section>

        {/* Accordion */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Accordion</h2>
          <Accordion className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Tabs */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Tabs</h2>
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">Make changes to your account here.</TabsContent>
            <TabsContent value="password">Change your password here.</TabsContent>
          </Tabs>
        </section>

        {/* Dialogs and Sheets */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Dialogs & Sheets</h2>
          <div className="flex gap-4">
            <Dialog>
              <DialogTrigger render={<Button variant="outline" />}>
                Open Dialog
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <Sheet>
              <SheetTrigger render={<Button variant="outline" />}>
                Open Sheet
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </section>

        {/* Dropdowns */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Dropdowns</h2>
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline" />}>
              Open Dropdown
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>

        {/* Forms (Sliders & Progress) */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Forms & Progress</h2>
          <div className="space-y-8 max-w-sm">
            <div>
              <label htmlFor="example-slider" className="mb-2 block text-sm font-medium">Slider (Value: {sliderValue})</label>
              <Slider
                id="example-slider"
                value={sliderValue}
                onValueChange={(val) => setSliderValue(val as number[])}
                max={100}
                step={1}
              />
            </div>

            <div>
              <label id="progress-label" className="mb-2 block text-sm font-medium">Progress Bar ({progressValue}%)</label>
              <Progress aria-labelledby="progress-label" value={progressValue} />
              <Button
                variant="outline"
                size="sm"
                className="mt-2"
                onClick={() => setProgressValue(Math.min(100, progressValue + 10))}
              >
                Increase Progress
              </Button>
            </div>
          </div>
        </section>

        {/* Toast / Snackbar */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Snackbars (Toasts)</h2>
          <Button
            variant="outline"
            onClick={() => {
              toast("Event has been created", {
                description: "Sunday, December 03, 2023 at 9:00 AM",
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
              })
            }}
          >
            Show Snackbar
          </Button>
          <Toaster />
        </section>
      </div>
    </div>
  )
}
