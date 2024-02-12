
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem
} from "../ui/form";

//*  
const formSchema = z.object({
    firstname: z.string().min(2, {
        message: "What's your name?",
    }),
    surname: z.string().min(2, {
        message: "What's your name?",
    }),
    email: z.string().min(2, {
        message: "You'll use this when you log in",
    }),
    password: z.string().min(6, {
        message: "Atleast 6 numbers, letters and punctuation marks",
    }),
});

//*  
export function SignUpModal() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstname: '',
            surname: '',
            email: '',
            password: '',
        }
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);

    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="secondary"
                    className="mt-4 w-[200px] h-[50px] font-semibold text-md mx-auto"
                >
                    Create new account
                </Button>
            </DialogTrigger>

            {/* LOGIN CONTAINER */}
            <DialogContent className="p-0 max-[375px]:w-[280px] max-[500px]:w-[300px] w-[450px] md:w-[800px] rounded-md shadow-xl border dark:border-gray-600">
                <DialogHeader className="py-2 md:py-4">
                    <DialogTitle className="text-2xl md:text-3xl px-8">
                        Sign Up
                    </DialogTitle>
                    <DialogDescription className="px-8">
                        Anyone who has this link will be able to view this.
                    </DialogDescription>
                    <hr />
                </DialogHeader>

                {/* FORM ===================> */}
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="p-4 md:p-8 flex flex-col gap-4"
                    >
                        {/* NAME */}
                        <section className="flex flex-col md:flex-row justify-between w-full gap-4">
                            {/* FirstName */}
                            <FormField
                                control={form.control}
                                name="firstname"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                placeholder="Firstname"
                                                className="p-4 h-[40px] border-gray-300 text-md w-full"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            {/* SurName*/}
                            <FormField
                                control={form.control}
                                name="surname"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                placeholder="Surname"
                                                className="p-4 h-[40px] border-gray-300 text-md w-full"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </section>

                        {/* EMAIL & PASSWORD */}
                        <section className="flex flex-col md:flex-row justify-between w-full gap-4">
                            {/* Email */}
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                placeholder="Email Address"
                                                className="p-4 h-[40px] border-gray-300 text-md w-full"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            {/* Password */}
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                placeholder="Password"
                                                className="p-4 h-[40px] border-gray-300 text-md w-full"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </section>
                    </form>

                </Form>

                {/* <============= FOOTER */}
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button
                            type="button"
                            variant="secondary"
                        >
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
