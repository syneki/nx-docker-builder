const { setOutput, setFailed, info, getInput } = require('@actions/core');
const { fetch, Headers } = require('undici');
const semver = require('semver');

const getAuthToken = async (repository) => {
  const url = `https://auth.docker.io/token?service=registry.docker.io&scope=repository:${repository}:pull,push`;
  const response = await fetch(url);

  if (response.ok) {
    return await response.json();
  }

  throw new Error('Failed to fetch authentication token.');
};

const getTags = async (repository) => {
  const { token } = await getAuthToken(repository);
  const url = `https://registry.hub.docker.com/v2/${repository}/tags/list`;
  const response = await fetch(url, {
    headers: new Headers({
      authorization: `Bearer ${token}`,
    }),
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error('Failed to fetch tags from Docker Hub.');
};

const main = async () => {
  try {
    const ignoredTags = getInput('ignored-tags').split(',');

    const { tags: nodeTags } = await getTags('library/node');
    const { tags: builderTags } = await getTags('gperdomor/nx-docker');

    const regex = /^(14|16|18)\.\d{1,2}\.\d{1,2}-alpine$/;

    const toBuild = new Set(
      nodeTags.filter((tag) => regex.test(tag) && !ignoredTags.includes(tag))
    );
    const currentTags = builderTags.filter((tag) => regex.test(tag));

    currentTags.forEach((tag) => {
      toBuild.delete(tag);
    });

    const sortedTags = semver.sort([...toBuild]);
    const latest = sortedTags?.slice(-1)?.[0] || '';

    if (sortedTags.length > 0) {
      info(`Calculated tags to build:\n${sortedTags.join('\n')}`);
      setOutput('empty_matrix', false);
    } else {
      info(`No new tags to be build`);
      setOutput('empty_matrix', true);
    }

    setOutput('matrix', sortedTags);
    setOutput('latest', latest.startsWith('16') ? latest : '');
  } catch (error) {
    setFailed(error.message);
  }
};

main();
