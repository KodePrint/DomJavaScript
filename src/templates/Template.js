import getData from "../utils/getData";


const Template = async () => {
    const data = await getData();
    const listTemplatePokes = []
    data.forEach(pokemon => {
        let template = `
        
        `
    });
}

export default Template;