"use client";

import { ColorSchemesSwitcher } from "@/components/color-schemes-switcher";
import { RootState } from "@/store";
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  Code,
  Group,
  Text,
  Title,
} from "@mantine/core";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function Home() {
  const { statuses } = useSelector((state: RootState) => state.general);

  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShellHeader>
        <Group className="h-full px-md">
          <Image
            className="dark:invert"
            src="https://nextjs.org/icons/next.svg"
            alt="logo"
            width={100}
            height={100}
          />
        </Group>
      </AppShellHeader>
      <AppShellMain>
        <Title className="text-center mt-20">
          Welcome to{" "}
          <Text
            inherit
            variant="gradient"
            component="span"
            gradient={{ from: "pink", to: "yellow" }}
          >
            Mantine
          </Text>{" "}
          +
          <Text
            inherit
            variant="gradient"
            component="span"
            gradient={{ from: "blue", to: "green" }}
          >
            TailwindCSS
          </Text>
        </Title>
        <Text
          className="text-center text-gray-700 dark:text-gray-300 max-w-[500px] mx-auto mt-xl"
          ta="center"
          size="lg"
          maw={580}
          mx="auto"
          mt="xl"
        >
          This starter Next.js project includes a minimal setup for Mantine with
          TailwindCSS. To get started edit page.tsx file.
        </Text>

        <div className="flex justify-center mt-10">
          <ColorSchemesSwitcher />
        </div>

        <div className="relative inline-flex group">
          <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <a
            href="#"
            title="Get quote now"
            className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
          >
            Get it now
          </a>
        </div>

        <Code>
          <pre>{JSON.stringify(statuses, null, 2)}</pre>
        </Code>
      </AppShellMain>
    </AppShell>
  );
}
