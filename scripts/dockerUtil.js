const util = require("util");
const child_process = require("child_process");
const exec = util.promisify(child_process.exec);
const parseArgs = require("minimist");

/**
 * Executes a command then prints STDOUT and STDERR.
 * Any command that errors will cause the process to exit with error code 1.
 * @param {*} command
 * @param {*} cwd
 */
const executeCommand = async (command, cwd = null) => {
  console.log(`Executing: ${command} in ${cwd || "."}`);
  try {
    const { stdout, stderr } = await exec(command, { cwd });
    console.log(`Finished: ${command} in ${cwd || "."}`);
    console.log("STDOUT:");
    console.log(stdout || "None");
    console.log("STDERR:");
    console.log(stderr || "None");
    return stdout;
  } catch (error) {
    console.log(`Error Executing: ${command} in ${cwd || "."}`);
    console.log("STDOUT:");
    console.log(error.stdout || "None");
    console.log("STDERR:");
    console.log(error.stderr || "None");
    process.exit(1);
  }
};

const buildDockerImage = async (pkg, tag) => {
  const path = `./packages/${pkg}`;
  const image = `rooknj/prysmalight-${pkg}:${tag}`;
  const latest = `rooknj/prysmalight-${pkg}:latest`;
  console.log("Pulling", latest);
  await executeCommand(`docker pull ${latest}`);
  console.log("Building", image);
  await executeCommand(
    `docker build --cache-from ${latest} -t ${image} ${path}`
  );
};

const publishDockerImage = async (pkg, tag) => {
  await executeCommand(`docker push rooknj/prysmalight-${pkg}:${tag}`);
};

// Builds the package (Note: using -t local. Change docker build so i dont need to include a tag for building)
const buildPackage = async (packageName, tag) => {
  if (!process.env.TRAVIS || packageWasChanged(packageName)) {
    const branchName = process.env.TRAVIS_BRANCH;
    if (branchName) {
      if (branchName === "master") {
        tag = "latest";
      } else {
        tag = "test";
      }
    }
    buildDockerImage(packageName, tag);
  } else {
    console.log(
      `Currently in CI and ${packageName} was not changed. Skipping build`
    );
  }
};

const deployPackage = async (packageName, tag) => {
  if (!process.env.TRAVIS || packageWasChanged(packageName)) {
    const branchName = process.env.TRAVIS_BRANCH;
    if (branchName) {
      if (branchName === "master") {
        tag = "latest";
      } else {
        tag = "test";
      }
    }
    publishDockerImage(packageName, tag);
  } else {
    console.log(
      `Currently in CI and ${packageName} was not changed. Skipping deploy`
    );
  }
};

// Process all command line arguments
const processArgs = async args => {
  // a tag is required if not in CI
  if (!args.t && !process.env.TRAVIS) {
    console.log("Not in CI and no tag was given. Aborting");
    process.exit(1);
  }
    packages.forEach(pack => buildPackage(pack, args.t));
  
};

// Returns an array of objects in the shape of:
// node -x hey -y cool chocolatey crackers =>
// {_: [chocolatey, crackers], x: hey, y: cool}
const args = parseArgs(process.argv.slice(2));
processArgs(args);
