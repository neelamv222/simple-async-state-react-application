import { SEARCH_ENDPOINT } from "../constants";

// asyc call to fetch list of repositories.
const getReactRepos = () => fetch(SEARCH_ENDPOINT, { method: 'GET' })
  .then(response => response.json())
  .then(result => result.items)
  .then(repos => repos
    .map(({forks, name, stargazers_count, html_url}) => ({
      forks,
      name,
      stars: stargazers_count,
      url: html_url,
    })),
);

export default getReactRepos
