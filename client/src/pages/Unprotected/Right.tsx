import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SignUpModal } from "@/components/modals/SignUpModal"


const formSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(4, {
    message: 'd',
  })
})

//* 
const Right = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

  };

  return (
    <div className='md:flex-1 flex flex-col items-end'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 border p-4 md:p-8 max-[375px]:w-full w-[400px] rounded-md shadow-md"
        >
          {/* EMAIL */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Email address"
                    className="p-4 h-[60px] border-gray-300 text-md"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* PASSWORD */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Password"
                    className="p-4 h-[60px] border-gray-300 text-md"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* BUTTON */}
          <div className="flex flex-col gap-2">
            <Button
              variant='default'
              type="submit"
              className=" w-full font-semibold text-xl h-[50px] "
            >
              Login
            </Button>

            <button className="text-center text-teal-600 mb-4 hover:underline">
              Forget password?
            </button>

            <hr />

            <SignUpModal />
          </div>
        </form>

      </Form>
    </div>
  )
}

export default Right