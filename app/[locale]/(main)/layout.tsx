"use client";
import { useState } from "react";
import { LayoutType } from "@/types";
import { Search, Sidebar } from "@/components";
import Image from "next/image";
import styles from "./layout.module.css";
import Link from "next/link";

export default function MainLayout({ children }: LayoutType) {
  const [search, setSearch] = useState("");
  return (
    <div className={styles.wrapper}>
      <Sidebar />

      <div className={styles.body}>
        <header className={styles.header}>
          <Image
            src="/assets/profile-photo.png"
            alt="profile picture"
            width={32}
            height={32}
            className={styles.profileMobile}
          />

          <div className={styles.search}>
            <Search
              onChange={setSearch}
              placeholder="Search for something here..."
              value={search}
            />
          </div>
          <div className={styles.searchMobile}>
            <Search
              onChange={setSearch}
              placeholder="Search here..."
              value={search}
            />
          </div>

          <Link href="/messages" className={styles.messageIconWrapper}>
            <Image
              src="/assets/message.svg"
              alt="profile picture"
              width={18}
              height={18}
              className={styles.message}
            />

            <Image
              src="/assets/message.svg"
              alt="messsage"
              width={24}
              height={24}
              className={styles.messageDesktop}
            />
          </Link>

          <div className={styles.profile}>
            <p className={styles.profileName}>Saleh Ahmed</p>
            <Image
              src="/assets/profile-photo.png"
              alt="profile picture"
              width={42}
              height={42}
            />
          </div>
        </header>

        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}
