import { LoaderProvider } from "@/app/components/context/loaderContext";

const MyApp = ({ Component, pageProps }) => {
    return (

        <LoaderProvider>

            <Component {...pageProps} />

        </LoaderProvider>

    )

};

export default MyApp