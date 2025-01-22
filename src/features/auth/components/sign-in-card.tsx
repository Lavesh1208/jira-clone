"use client";

import { DottedSeparator } from "@/components/doted-separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signUpWithGithub, signUpWithGoogle } from "@/lib/oauth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { z } from "zod";
import { useLogin } from "../api/use-login";
import { loginSchema } from "../schemas";

export const SignInCard = () => {
	const { mutate, isPending } = useLogin();

	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = (values: z.infer<typeof loginSchema>) => {
		mutate({
			json: values,
		});
	};

	return (
		<Card className="w-full h-full md:w-[487px] border-none shadow-none">
			<CardHeader className="flex items-center justify-center text-center p-7">
				<CardTitle className="text-2xl">Welcome back!</CardTitle>
			</CardHeader>
			<div className="px-7">
				<DottedSeparator />
			</div>
			<CardContent className="p-7">
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<FormField
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											{...field}
											type="email"
											placeholder="Enter email address"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											{...field}
											type="password"
											placeholder="Enter password"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button disabled={isPending} size="lg" className="w-full">
							Login
						</Button>
					</form>
				</Form>
			</CardContent>
			<div className="px-7">
				<DottedSeparator />
			</div>
			<CardContent className="p-7 flex flex-col gap-y-4">
				<Button
					onClick={() => signUpWithGoogle()}
					disabled={false}
					variant={"secondary"}
					size="lg"
					className="w-full"
				>
					<FcGoogle className="mr-2 size-5" />
					Login with Google
				</Button>
				<Button
					onClick={() => signUpWithGithub()}
					disabled={false}
					variant={"secondary"}
					size="lg"
					className="w-full"
				>
					<FaGithub className="mr-2 size-5" />
					Login with Github
				</Button>
			</CardContent>
			<div className="px-7">
				<DottedSeparator />
				<CardContent className="p-7 flex items-center justify-center">
					<p>
						Don&apos;t have an account?
						<Link href="/sign-up">
							<span className="text-blue-700">&nbsp;Sign Up</span>
						</Link>
					</p>
				</CardContent>
			</div>
		</Card>
	);
};
