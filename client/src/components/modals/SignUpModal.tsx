
import { EMPTY_PATH, z } from "zod"
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "../ui/form"

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
})

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

            {/*  */}
            <DialogContent className="max-[375px]:w-[280px] p-0 py-4 max-[375px]:p-2 w-[400px] md:w-[500px] rounded-md">

                <DialogHeader>
                    <DialogTitle className="text-2xl md:text-3xl px-4">
                        Sign Up
                    </DialogTitle>
                    <DialogDescription className="px-4">
                        Anyone who has this link will be able to view this.
                    </DialogDescription>
                    <hr />
                </DialogHeader>


                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="p-4 flex flex-col gap-4"
                    >

                        <section className="flex justify-between w-full gap-4">
                            {/* EMAIL */}
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
                            {/* SURNAME */}
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
                        <section className="flex justify-between w-full gap-4">
                            {/* EMAIL */}
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
                            {/* SURNAME */}
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

                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
