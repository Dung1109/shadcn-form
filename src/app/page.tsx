"use client";

import * as React from "react";

import ModeToggle from "@/components/DarkToggle";

export default function Home() {
    return (
        <div className="fixed right-0 top-0 pr-8 pt-4">
            <ModeToggle />
        </div>
    );
}
