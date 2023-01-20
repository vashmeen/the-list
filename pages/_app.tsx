
import '@unocss/reset/sanitize/sanitize.css'
import '@unocss/reset/tailwind.css'
import "@/styles/reset.css";
import 'uno.css'
import "@/styles/globals.css";


import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Link from '@/components/Link';
import Icon from '@/components/Icon';
import { ThemeProvider } from 'next-themes'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react';
import { useUser } from '@supabase/auth-helpers-react';
import supabaseClient from '@/utils/supabase';
export default function App({ Component, pageProps }: AppProps) {
  return (
  <SessionContextProvider
  supabaseClient={supabaseClient}
  initialSession={pageProps.initialSession}
>
    <ThemeProvider attribute="class">
      <div className=' mx-auto h-full grid' style={{ gridTemplateRows: "auto 1fr auto" }}>
    <header>
      <Link  href='/'>
        The<br />List
      </Link>
    </header>
        <main className='p-4 max-w-screen'>
            <Component {...pageProps} />
        </main>
        <footer className='mbs-10'>
        </footer>
      </div>
    </ThemeProvider>
</SessionContextProvider>
);
}
