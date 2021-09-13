import Prismic from "@prismicio/client";

const apiEndpoint = String(process.env.PRISMIC_URL);
const accessToken = String(process.env.PRISMIC_TOKEN);
export const client = Prismic.client(apiEndpoint, { accessToken });
