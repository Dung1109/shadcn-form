import { z } from "zod";

export const userSchema = z
    .object({
        username: z.string().trim().min(1, {
            message: "Username is required",
        }),
        email: z.string().trim().email({
            message: "Invalid email",
        }),
        message: z.string().trim().min(1, {
            message: "Message is required",
        }),
        password: z.string().trim().min(1, {
            message: "Password is required",
        }),
        confirmPassword: z.string().trim().min(1, {
            message: "Confirm password is required",
        }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords must match",
    });

export type UserData = z.infer<typeof userSchema>;
