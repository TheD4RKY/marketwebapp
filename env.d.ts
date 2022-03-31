declare namespace NodeJS {
    export interface ProcessEnv {
        NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: string;
        STRIPE_SECRET_KEY: string;
    }
}

declare module "next-stripe";
declare module "next-stripe/client";