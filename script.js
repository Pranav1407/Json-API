const apiurl = ''
const user = {
    id: 4,
    name: 'Raghul',
    email: 'raghul.2002@srit.org',
    mobile: 8248469714,
    date: '14/07/2003'
}
function handleRequest(){
const postData = async () => {
    try
    {
        const response = await fetch("https://pranav1407.github.io/Json-API/db.json", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(user)
        })
    }
    catch(err)
    {
        alert(err)
    }
}}

const deleteData = async (id = 2) => {
    try
    {
        const response = await fetch ("https://pranav1407.github.io/Json-API/db.json" + id, {
            method: "DELETE"
        })
    }
    catch(err)
    {
        console.log(err)
    }
}
