import fs from "fs";
import path from "path";

const targetNetwork = process.argv[2] || "localhost";
const deploymentsPath = path.join(__dirname, "../../hardhat/deployments", targetNetwork);
const templateFilePath = path.join(__dirname, "../subgraph.template.yaml");
const outputFilePath = path.join(__dirname, "../subgraph.yaml");

interface NetworkConfig {
    [network: string]: {
        [contractName: string]: {
            address: string;
            startBlock?: number;
        };
    };
}

const main = async () => {
    if (!fs.existsSync(deploymentsPath)) {
        console.error(`❌ Deployments directory not found for network '${targetNetwork}'`);
        process.exit(1);
    }

    if (!fs.existsSync(templateFilePath)) {
        console.error("❌ subgraph.template.yaml not found");
        process.exit(1);
    }

    // Assuming we are interested in the BatchRegistry contract
    const contractName = "BatchRegistry";
    const contractDeploymentPath = path.join(deploymentsPath, `${contractName}.json`);

    if (!fs.existsSync(contractDeploymentPath)) {
        console.error(`❌ Deployment file for contract '${contractName}' not found for network '${targetNetwork}'`);
        process.exit(1);
    }

    const contractDeployment = JSON.parse(fs.readFileSync(contractDeploymentPath, "utf8"));

    let templateContent = fs.readFileSync(templateFilePath, "utf8");

    // Replace placeholders
    templateContent = templateContent.replace(/{{network}}/g, targetNetwork);
    templateContent = templateContent.replace(/{{address}}/g, contractDeployment.address);
    templateContent = templateContent.replace(/{{startBlock}}/g, (contractDeployment.receipt?.blockNumber || 0).toString());

    fs.writeFileSync(outputFilePath, templateContent);

    console.log(`✅ Generated subgraph.yaml for ${targetNetwork} with address ${contractDeployment.address}`);
};

main();
