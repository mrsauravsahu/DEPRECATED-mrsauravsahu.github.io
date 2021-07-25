Writing code is great, creating something new is exciting and it getting utilised by others is the best. But the most difficult part is maintaining this code. 

Even though maintenance has many parts to it, in this blog, let’s discuss about versioning. 

## An Introduction to Software Versioning

### What is software versioning?

Software versioning in a nutshell is just tagging your library with a meaningful version number to make sure that the consumers of your library are aware of the feature set available to them. 

### Do I need versioning?

Well, it is not mandated but versioning can have a lot of benefits. While working with simpler projects, versioning might not be an issue but when working in a team, good versioning will align with timelines. Other pros include — 

- It gives a clear picture of what changes are happening with new releases.
- It is easier to backtrack if new changes have severe issues and bugs.
- Versioning provides a way of documentation.

I’m sure there are many more pros of versioning. Feel free to add them in the comments. 

### The simplest versioning scheme

Let’s see if there are issues with versioning now? Well, for starters, doing good versioning is difficult. The simplest versioning scheme would be just incrementing a number — v1, v2 etc. this captures changes fairly well and can be used for small projects. It is a good starting point. 

However, this scheme doesn’t make it clear, the type of changes going in any new version. So we need a more “semantic” versioning scheme. Enter, the **[Semantic Versioning 2.0.0 Spec](https://semver.org/).** Semantic Versioning or “semver” for short, gives a great documented way of documenting. The gist of which is —

![semver summary from semver.org](/store/49-software-versioning-an-intro-with-gitversion/images/semver-summary.jpeg)

### How can I setup semver for my project?

Well, semver is a specification, so following it manually is a good way to start. You can just make sure that your git tags or release branch names follow the right format and add the change-logs in the commit message. 

## GitVersion — A more automated approach to versioning

One of the best ways to automate versioning is with [GitVersion](https://gitversion.net/). GitVersion is a tool to help with  versioning through your git history and commit messages.

> Note: All code related to this blog is available here — [blog-semver@github](https://github.com/mrsauravsahu/blog-semver). Over the next few weeks, I'll be working on improving it so you can always find the latest code here.

### My git workflow setup

For my projects, I use a simplified version of GitFlow — read more about it [here](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow). But the gist of it is this —

- My main work happens on the `develop` branch. This is where I merge all my changes. If I need to distribute my app, I retain stable releases on the `master` branch.
- I branch out all my feature branches from `develop`
- `hotfixes` are created directly from `master` and fixed and merged back. And pulled into `develop` as well.

### Let's setup GitVersion

For this example, I have a node project. For node projects, the version of the app is present in the `package.json` and `package-lock.json` files — in the `"version"` property.

```json
{
  "name": "blog-semver",
  "version": "0.1.0",
  "description": "setting up semver for your projects with Github Actions",

  ...

}
```

Now, let's setup GitVersion. You can install GitVersion with one of these methods - [https://gitversion.net/docs/usage/cli/installation](https://gitversion.net/docs/usage/cli/installation). Once you have GitVersion installed, let's create a gitversion.yml config. You can use `$ gitversion init` to create this file. I have a simple config, which looks like —

```yaml
branches: {}
ignore:
  sha: []
merge-message-formats: {}
```

With the defaults, a PR merge to develop will bump the version with a minor change. So, the first version is `0.1.0`, then `0.2.0` and so on...

Now if you inspect the [CI Github Actions YML File](https://github.com/mrsauravsahu/blog-semver/blob/main/.github/workflows/ci.yml), you see this stage which calculates the next version with GitVersion. 

```yaml
- name: install gitversion
	uses: gittools/actions/gitversion/setup@v0.9.7
    with:
    versionSpec: '5.x'

- name: execute gitversion
  id: gitversion
  uses: gittools/actions/gitversion/execute@v0.9.7
  with:
    useConfigFile: true
    configFilePath: gitversion.yml
```

> Note: As I mentioned, GitVersion uses git history to calculate the next version, so you'll have to modify your checkout step as well.

```yaml
- name: checkout to branch
  uses: actions/checkout@v2
  with:
    fetch-depth: 0 # <--- get the entire history
```

GitVersion spits out more detailed version values, but I stick to the `MajorMinorPatch` field. Here's what the rest of the fields look like —

```json
{
  "Major": 1,
  "Minor": 0,
  "Patch": 0,
  "PreReleaseTag": "alpha.4",
  "PreReleaseTagWithDash": "-alpha.4",
  "PreReleaseLabel": "alpha",
  "PreReleaseLabelWithDash": "-alpha",
  "PreReleaseNumber": 4,
  "WeightedPreReleaseNumber": 4,
  "BuildMetaData": null,
  "BuildMetaDataPadded": "",
  "FullBuildMetaData": "Branch.develop.Sha.801d0ae8327c24b387690dcd7c0838107e6f5260",
  "MajorMinorPatch": "1.0.0",
  "SemVer": "1.0.0-alpha.4",
  "LegacySemVer": "1.0.0-alpha4",
  "LegacySemVerPadded": "1.0.0-alpha0004",
  "AssemblySemVer": "1.0.0.0",
  "AssemblySemFileVer": "1.0.0.0",
  "FullSemVer": "1.0.0-alpha.4",
  "InformationalVersion": "1.0.0-alpha.4+Branch.develop.Sha.801d0ae8327c24b387690dcd7c0838107e6f5260",
  "BranchName": "develop",
  "EscapedBranchName": "develop",
  "Sha": "801d0ae8327c24b387690dcd7c0838107e6f5260",
  "ShortSha": "801d0ae",
  "NuGetVersionV2": "1.0.0-alpha0004",
  "NuGetVersion": "1.0.0-alpha0004",
  "NuGetPreReleaseTagV2": "alpha0004",
  "NuGetPreReleaseTag": "alpha0004",
  "VersionSourceSha": "5ba4cd98ab31085a2e8057e2d00738bdc0118031",
  "CommitsSinceVersionSource": 4,
  "CommitsSinceVersionSourcePadded": "0004",
  "UncommittedChanges": 0,
  "CommitDate": "2021-07-24"
}
```

I'm currently working on a new step in Github Actions which writes this new version into the `package.json` and `package-lock.json` files and makes a commit, freezing the version into the source code. So, the commit history looks like this —

![gitversion in github actions](/store/49-software-versioning-an-intro-with-gitversion/images/gitversion-in-github-actions.png)

Here's the current Github Actions step which auto commits the version file changes. Note: I'm still actively working on this Github Action, so expect some changes there. 😉 Also, if you notice the `package.json` and `package-lock.json` files, the formatting is a little weird. I'm still working on that. 😂

```yaml
- name: write version to project
  run: |
    NEXT_VERSION=${{ steps.gitversion.outputs.MajorMinorPatch }}
    echo "NEXT_VERSION=v$NEXT_VERSION"
    git checkout ${GITHUB_HEAD_REF#refs/heads/} && git pull origin ${GITHUB_HEAD_REF#refs/heads/} 
    
    FILE=./package.json
    MODIFIED_FILE_CONTENTS=`node -e "const data = require('$FILE'); let modifiedData = { ...data, version: '$NEXT_VERSION' }; console.log(JSON.stringify(modifiedData, undefined, 2))"`
    echo $MODIFIED_FILE_CONTENTS > $FILE
    FILE=./package-lock.json
    MODIFIED_FILE_CONTENTS=`node -e "const data = require('$FILE'); let modifiedData = { ...data, version: '$NEXT_VERSION' }; console.log(JSON.stringify(modifiedData, undefined, 2))"`
    echo $MODIFIED_FILE_CONTENTS > $FILE
    
    git config --global user.name "Github Actions" && git config --global user.email "noreply@github.com"
    git add package* 
    {
      git commit -m "[skip ci] bump version to $NEXT_VERSION" &&
      git push origin ${GITHUB_HEAD_REF#refs/heads/}
      echo finished writing new version
    } || {
      echo no new version detected
    }
```

### How do I bump my version?

So, if you see with each PR, the minor version gets bumped by default. But what if you're not making a minor change? What if it is just a patch? Well, because GitVersion respects commit messages, you can create an empty commit with the message `+semver: patch` to bump the patch version.

Here's the message for other types of version changes —

```yaml
major-version-bump-message: '\+semver:\s?(breaking|major)'
minor-version-bump-message: '\+semver:\s?(feature|minor)'
patch-version-bump-message: '\+semver:\s?(fix|patch)'
no-bump-message: '\+semver:\s?(none|skip)'
```

If you want to bump from `0.x.x` to `1.0.0`, a `+semver: major` message doesn't work. Found this the hard way, but you need to set the `next-version: 1.0.0` field in the `gitversion.yml` file. This [commit](https://github.com/mrsauravsahu/blog-semver/pull/6/commits/1c4f3b0a67516e360021047f1e1726bf304b0d03) — shows the same. This is only when the next-version is less than `1.0.0`, `+semver: major` should work after that.

So, that is an introduction to versioning and how to implement it with GitVersion and Github Actions. Happy coding!

— Saurav