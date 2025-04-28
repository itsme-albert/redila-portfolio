
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="w-full py-24 md:py-32" id="contact">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Contact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get In Touch
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a question or want to work together? Reach out to me.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 lg:grid-cols-3">
          <Card className="lg:col-span-2 border-none">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form below to get in touch with me.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" className="border-sm border-gray-500"/>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email" className="border-sm border-gray-500"/>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Subject" className="border-sm border-gray-500"/>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message" rows={5} className="border-sm border-gray-500"/>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">Send Message</Button>
            </CardFooter>
          </Card>
          <Card className='border-none'>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Other ways to reach me</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">albertmejicoredila@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <p className="text-sm text-muted-foreground">+63 963 819 6445</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">334 Kalabasa Street, Tumana, Sta Maria, Bulacan, Philippines</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}