const apiurl = ''
const user = {
    id: 4,
    name: 'Raghul',
    email: 'raghul.2002@srit.org',
    mobile: 8248469714,
    date: '14/07/2003'
}
const postData = async () => {
    try
    {
        const response = await fetch("http://localhost:3000/users", {
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
}

const deleteData = async (id = 2) => {
    try
    {
        const response = await fetch ("http://localhost:3000/users/" + id, {
            method: "DELETE"
        })
    }
    catch(err)
    {
        console.log(err)
    }
}
