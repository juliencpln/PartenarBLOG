import Footer from "@/app/_components/footer";
import CtaBanner from "@/app/_components/cta-banner";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://blog.partenar.com'),
  title: "Blog Partenar - Actualités et analyses du marketing d'influence",
  description: "Découvrez les dernières tendances, analyses et conseils sur l'écosystème des partenariats entre créateurs de contenu et marques.",
  keywords: "partenariats, créateurs, influenceurs, marques, marketing d'influence, sponsoring, collaboration",
  authors: [{ name: "Partenar" }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
  },
  openGraph: {
    title: "Partenar Blog",
    description: "Découvrez les dernières tendances sur les partenariats créateurs-marques",
    url: "https://blog.partenar.com",
    siteName: "Partenar Blog",
    images: [HOME_OG_IMAGE_URL],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partenar Blog",
    description: "Découvrez les dernières tendances sur les partenariats créateurs-marques",
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#279BFF" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />

        <script>
            !function(t,e){var o,n,p,r;e.__SV||(window.posthog && window.posthog.__loaded)||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init Dr Ur fi Lr zr ci Or jr capture Ai calculateEventProperties qr register register_once register_for_session unregister unregister_for_session Jr getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey displaySurvey cancelPendingSurvey canRenderSurvey canRenderSurveyAsync identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty Gr Br createPersonProfile Vr Cr Kr opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing get_explicit_consent_status is_capturing clear_opt_in_out_capturing Hr debug O Wr getPageViewId captureTraceFeedback captureTraceMetric Rr".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
            posthog.init('phc_Wr41ijXl3qQdCKkjs7Xx2fZyRmtliy4pqDxTEO6c4Jg', {
                api_host: 'https://eu.i.posthog.com',
                defaults: '2025-11-30',
                person_profiles: 'always', // or 'always' to create profiles for anonymous users as well
            })
        </script>
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">{children}</div>
        <CtaBanner />
        <Footer />
      </body>
    </html>
  );
}
