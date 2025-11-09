# Averer-Websdk-Quickstart

## Description

This repository provides a quick start guide and example integration for using the Averer Web SDK.

Follow the steps below to clone, configure, and run the project locally.

## 🚀 Getting Started

1. Clone the Repository

```shell
git clone https://github.com/Averer/averer-websdk-quickstart.git
cd averer-websdk-quickstart
```

2. Configure .npmrc

To install the Averer Web SDK from GitHub Packages, add the following content inside .npmrc :

```
@redbellynetwork:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

3. Generate a GitHub Personal Access Token (PAT)

You’ll need a GitHub token with permission to read private packages.

- Follow this [GitHub guide](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) to create a Personal Access Token.

- When creating the token, make sure to enable the read:packages permission.

- Export your token as an environment variable:

```
export GITHUB_TOKEN=your_generated_token_here
```

4. Install Dependencies

Once your .npmrc is set up and the token is configured, install the dependencies:

```shell
npm install
```

5. Run the Example

Start the development server:

```shell
npm run dev
```

By default, the app will be served at (http://localhost:3000)

6. Start Integrating the SDK

You can now explore the code to see how the Averer Web SDK is integrated and start modifying it for your use case.
