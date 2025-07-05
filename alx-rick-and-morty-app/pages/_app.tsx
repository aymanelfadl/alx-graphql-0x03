import ErrorBoundary from "@/components/ErrorBoundary";
import client from "@/graphql/apolloClient";
import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps)
{
  return (
    <ErrorBoundary >
      <ApolloProvider client={client} >
        <Component {...pageProps} />;
      </ApolloProvider>
    </ErrorBoundary>
  )
}
