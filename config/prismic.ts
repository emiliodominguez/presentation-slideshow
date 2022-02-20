import { createClient, getRepositoryEndpoint } from "@prismicio/client";

const repoName = String(process.env.PRISMIC_REPO_NAME);
const accessToken = String(process.env.PRISMIC_TOKEN);
const endpoint = getRepositoryEndpoint(repoName);
export const client = createClient(endpoint, { accessToken });
