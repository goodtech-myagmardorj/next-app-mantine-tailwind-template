import type { Metadata } from "next";
import {
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from "@mantine/core";
import theme from "./theme";
import "./globals.css";
import ReduxProvider from "@/providers/redux";
import { Toaster } from "react-hot-toast";
import { ModalsProvider } from "@mantine/modals";

export const metadata: Metadata = {
  title: "Next App Mantine Tailwind Template",
  description: "Next App Mantine Tailwind Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <ReduxProvider>
          <MantineProvider theme={theme}>
            <ModalsProvider
            // modals={{
            //   confirm: ConfirmModal,
            // }}
            >
              {children}
            </ModalsProvider>
            <Toaster />
          </MantineProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
