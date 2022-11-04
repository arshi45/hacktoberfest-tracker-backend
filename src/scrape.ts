import { Octokit, App } from "octokit";
import { AppDataSource } from "./connenction";
import { Org } from "./entities/org";

const octo = new Octokit({});

AppDataSource.initialize()
.then(() =>
    console.log("Running")
).catch((err) => {
    console.log(err)
});

async function update(){

    const orgRepository = AppDataSource.getRepository(Org);

    const [listOrgs,length] = await orgRepository.findAndCount({select:['uName']})
    let count:number = length
    console.log(listOrgs)
    // while(count--){
    //     const data = await octo.request("GET /users/{owner}/repos",{
    //         owner:listOrgs[count]
    //     });
    //     const newData = await orgRepository.findOneBy({
    //         uName:listOrgs[count].uName
    //     });
    //     newData.contributionList = {list:['Arsh','Second']}
    //     newData.contributorList = {list:['Arsh','Second']}
    //     newData.issueList = {list:['Arsh','Second']}
    //     newData.totalContributions = 40
    //     newData.totalRepoList = {list:['Arsh','Second']}
    //     newData.totalCommits = 20
    //     newData.totalIssues = 10
    //     newData.totalRepos = 30
    //     orgRepository.save(newData)
    // }

    // const comments:any = await octo.request()
    
    // setTimeout(update,5000)
}

update()




