
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import {
    Dialog,
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
    FormItem,
    FormLabel
} from "../ui/form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

// SIGN-UP SCHEMA  
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
    gender: z.enum(['male', 'female', 'custom']),
    date: z.string(),
    month: z.string(),
    year: z.string(),
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

    //* SIGN-UP BUTTON 
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
            <DialogContent className="p-0 max-[500px]:w-full w-[450px] md:w-[800px] rounded-md shadow-xl border">
                <DialogHeader>
                    <DialogTitle className="text-2xl md:text-3xl px-8 pt-4">
                        Sign Up
                    </DialogTitle>
                    <DialogDescription className="pb-2 px-8">
                        It quick and easy.
                    </DialogDescription>

                    <hr />

                </DialogHeader>

                {/* FORM ===================> */}
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="flex flex-col gap-4"
                    >
                        {/* NAME */}
                        <section className="flex flex-col md:flex-row justify-between gap-4 px-4 md:px-8">
                            {/* FirstName */}
                            <FormField
                                control={form.control}
                                name="firstname"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                placeholder="Firstname"
                                                className="p-4 h-[40px] text-md w-full"
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
                                                className="p-4 h-[40px] text-md w-full"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </section>

                        {/* EMAIL & PASSWORD */}
                        <section className="flex flex-col md:flex-row justify-between w-full gap-4 px-4 md:px-8">
                            {/* Email */}
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                placeholder="Email Address"
                                                className="p-4 h-[40px] text-md w-full"
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
                                                type="password"
                                                placeholder="Password"
                                                className="p-4 h-[40px] text-md w-full"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </section>

                        {/* BIRTH */}
                        <section className="px-6 md:px-8 flex gap-4 items-end">
                            <div className="w-full">
                                <h2 className="text-sm text-gray-500 dark:text-gray-400 pb-2">
                                    Date of birth
                                </h2>

                                <FormField
                                    control={form.control}
                                    name="date"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                            >
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue
                                                            placeholder="13"
                                                        />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectItem value='1'>1</SelectItem>
                                                        <SelectItem value='2'>2</SelectItem>
                                                        <SelectItem value='3'>3</SelectItem>
                                                        <SelectItem value='4'>4</SelectItem>
                                                        <SelectItem value='5'>5</SelectItem>
                                                        <SelectItem value='6'>6</SelectItem>
                                                        <SelectItem value='7'>7</SelectItem>
                                                        <SelectItem value='8'>8</SelectItem>
                                                        <SelectItem value='9'>9</SelectItem>
                                                        <SelectItem value='10'>10</SelectItem>
                                                        <SelectItem value='11'>11</SelectItem>
                                                        <SelectItem value='12'>12</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </FormItem>
                                    )}
                                />
                            </div>

                            {/* MONTH */}
                            <FormField
                                control={form.control}
                                name="month"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue
                                                        placeholder="Feb"
                                                    />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value='Jan'>Jan</SelectItem>
                                                    <SelectItem value='Feb'>Feb</SelectItem>
                                                    <SelectItem value='Mar'>Mar</SelectItem>
                                                    <SelectItem value='Apr'>Apr</SelectItem>
                                                    <SelectItem value='May'>May</SelectItem>
                                                    <SelectItem value='June'>June</SelectItem>
                                                    <SelectItem value='July'>July</SelectItem>
                                                    <SelectItem value='Aug'>Aug</SelectItem>
                                                    <SelectItem value='Sep'>Sep</SelectItem>
                                                    <SelectItem value='Oct'>Oct</SelectItem>
                                                    <SelectItem value='Nov'>Nov</SelectItem>
                                                    <SelectItem value='Dec'>Dec</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />

                            {/* YEARS */}
                            <FormField
                                control={form.control}
                                name="year"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue
                                                        placeholder="2024"
                                                    />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value='1997'>1997</SelectItem>
                                                    <SelectItem value='1996'>1996</SelectItem>
                                                    <SelectItem value='1995'>1995</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />
                        </section>

                        {/* GENDER */}
                        <section className="px-6 md:px-8 flex flex-col gap-2">
                            <h2 className="text-sm text-gray-500 dark:text-gray-400">
                                Gender
                            </h2>

                            <FormField
                                control={form.control}
                                name="gender"
                                render={({ field }) => (
                                    <FormItem className="">
                                        <FormControl>
                                            <RadioGroup
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                                className="flex justify-between space-y-1"
                                            >
                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                        <RadioGroupItem value="male" />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">
                                                        Male
                                                    </FormLabel>
                                                </FormItem>
                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                        <RadioGroupItem value="female" />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">
                                                        Female
                                                    </FormLabel>
                                                </FormItem>
                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                        <RadioGroupItem value="custom" />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">
                                                        Custom
                                                    </FormLabel>
                                                </FormItem>
                                            </RadioGroup>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </section>

                        {/* POLICY */}
                        <p className="text-xs text-gray-500 p-4 md:px-8">
                            By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.
                        </p>

                        {/* <============= FOOTER */}
                        <DialogFooter>
                            <Button
                                type="submit"
                                variant="secondary"
                                className="w-full rounded-none font-semibold text-md h-[50px]"
                            >
                                Signup
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>

            </DialogContent>
        </Dialog >
    )
}

//* Use </DialogClose> if you want to close modal when click