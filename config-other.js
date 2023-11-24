module.exports = {
  platform: "github",
  "extends": [
    "github>platform-engineering-org/.github"
  ],
  onboardingConfig: {
    "$schema": "https://docs.renovatebot.com/renovate-schema.json",
    "extends": [
      "github>platform-engineering-org/.github"
    ]
  },
  hostRules: [
    {
      "hostType": "docker",
      "matchHost": "docker.io",
      "username": process.env.DOCKER_HUB_USERNAME,
      "password": process.env.DOCKER_HUB_TOKEN
    }
  ],
  autodiscover: false,
  repositories: [
    "crc-org/crc-cloud",
    "devfile/registry",
    "thepetk/registry",
    "ralphbean/dnf-plugin-lockfile",
    "kubevirt/hyperconverged-cluster-operator"
  ],
  constraints: {
    go: "1.19"
  }
};
