"use client";

import Image from "next/image";
import appLogo from "/public/logo.svg";
import Link from "next/link";
import React from "react";
import { useState } from "react";

export default function HeaderNav(currentPage) {
    const page = currentPage.currentPage

    return (
        <div className="h-[20%] w-full flex flex-row items-center">
            <Image className="mr-6" src={appLogo} alt="Logo" width={100} height={100} />
            <div className="h-[75%] w-[50%] flex flex-col justify-around">
                <div className="text-5xl font-thin">Capybaras Among Us</div>
                <div className="flex w-[30%] justify-between text-lg">
                    <Link href="/">{page == "capybaras" ? 
                        <div className="font-bold">Capybaras</div> :
                        <div>Capybaras</div>
                    }</Link>
                    <Link href="/supplies">{page == "supplies" ? 
                        <div className="font-bold">Supplies</div> :
                        <div>Supplies</div>
                    }</Link>
                </div>
            </div>
        </div>
    );
}