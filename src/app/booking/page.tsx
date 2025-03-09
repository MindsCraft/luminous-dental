// app/booking/page.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Booking() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
        Book an Appointment
      </h1>
      <form className="max-w-md mx-auto space-y-6">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" type="text" placeholder="John Doe" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="john.doe@example.com" />
        </div>
        <div>
          <Label htmlFor="service">Service</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cleaning">Teeth Cleaning</SelectItem>
              <SelectItem value="fillings">Fillings</SelectItem>
              <SelectItem value="orthodontics">Orthodontics</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="date">Preferred Date</Label>
          <Input id="date" type="date" />
        </div>
        <Button type="submit" className="w-full">
          Submit Appointment
        </Button>
      </form>
    </div>
  );
}
