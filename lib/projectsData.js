export const getprojectsData = async ()=>{
    const sanity = `*[_type == "projects"]{name,description,image}`;
    const url = `https://xhim8nbd.api.sanity.io/v2021-06-07/data/query/production?query=${sanity}`;
    let projectsData = "";
    const response = await fetch(url)
    projectsData = await response.json();
   
    return projectsData.result;
}