"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { send } from "@/lib/email"
import { formSchema } from "@/lib/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { AlertCircle } from "lucide-react"
import { useState } from 'react'
import { useForm } from "react-hook-form"
import { z } from "zod"



export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            message: "",
            email: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        send(values);
        console.log(values);

    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsSubmitting(true)
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000))
        setIsSubmitting(false)
        setIsSubmitted(true)
    }

    if (isSubmitted) {
        return (
            <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>
                    Your message has been sent. We'll get back to you soon!
                </AlertDescription>
            </Alert>
        )
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea
                                    id="message"
                                    className='min-h-[120px]'
                                    {...field}
                                    required />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    className='text-white bg-[#8C3239] lg:h-8 md:h-6 h-7 2xl:text-base xl:text-md lg:text-sm md:text-xs hover:bg-[#8C3239]/80'>
                    Submit
                </Button>
            </form>
        </Form>

        // <form onSubmit={handleSubmit} className="space-y-6 w-full mx-auto">
        //     <div className="space-y-2">
        //         <Label htmlFor="name">Name</Label>
        //         <Input id="name" required />
        //     </div>
        //     <div className="space-y-2">
        //         <Label htmlFor="email">Email</Label>
        //         <Input id="email" type="email" required />
        //     </div>
        //     <div className="space-y-2">
        //         <Label htmlFor="message">Message</Label>
        //         <Textarea id="message" required />
        //     </div>
        //     <Button type="submit"
        //         
        //         disabled={isSubmitting}>
        //         {isSubmitting ? 'Sending...' : 'Send Message'}
        //     </Button>
        // </form>
    )
}