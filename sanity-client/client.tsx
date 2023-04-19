import sanityClient from "@sanity/client";

const client = sanityClient({
    projectId: "u0pkzdiq",
    dataset: "production",
    useCdn: true
});

export default client;