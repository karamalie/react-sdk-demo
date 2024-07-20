import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { TriaProvider } from "@tria-sdk/authenticate-react";
import "@tria-sdk/authenticate-react/dist/style.css";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <TriaProvider
      initialConfig={{
        analyticsKeys: {
          clientId: "65cd02ce-dad6-43d6-b8ad-2fb3ab13b8d3",
          projectId: "a9ebd349-606c-4696-9639-0f399386a3d1",
        },
        chain: "FUSE",
        aa: {
          pimlicoApiKey: "af86d1ab-0dc4-4be7-96eb-ce9fc9fd48c0",
          isSponsored: true,
          sponsorshipPolicyIds: {
            FUSE: "sp_cheerful_thing",
            POLYGON: "sp_slim_namor",
          },
          accountType: "Etherspot",
          supportAa: true,
        },
      }}
      initialUIConfig={{
        modalMode: true,
        // enablePasswordLogin: true,
        darkMode: true,
        // otpBgColor: "#ffffff00",
        // otpTextColor: "#000000",
        // otpBoxBgColor: "#D0D0D00D",
        // otpBorderColor: "rgba(0,0,0,0.5)",
        // passwordInputBgColor: "rgba(208, 208, 208, 0.05)",
        // passwordInputTextColor: "#101010",
        // passwordInputBorderColor: "rgba(0, 0, 0, 0.25)",
      }}
      initialWalletUIConfig={{
        darkMode: true,
      }}
    >
      <Component {...pageProps} />
    </TriaProvider>
  );
}
