
export const appendScript = (scriptToAppend) => {
    const link = document.createElement("link");
    link.href = scriptToAppend;
    link.rel = "stylesheet";
    link.async = true;
    document.head.appendChild(link);
}


export const removeScript = (scriptToremove) => {
    let allsuspects=document.getElementsByTagName("link");
    for (let i=allsuspects.length; i>=0; i--){
if (allsuspects[i] && allsuspects[i].getAttribute("href")!==null 
  && allsuspects[i].getAttribute("href").indexOf(`${scriptToremove}`) !== -1 ){
           allsuspects[i].parentNode.removeChild(allsuspects[i])
        }    
    }
}

