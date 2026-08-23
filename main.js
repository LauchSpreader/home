/*
setInterval(() => {
    console.log(navigator.userAgent);
}, 1000); */

async function checkTor() {
    console.log("checking if onion server is available");
    try {
        const response = await fetch(
            "http://torsedz565kauwu4duvxduwzpihukecrid2riw5lkyxypunhfmerbmid.onion/",
            {
                method: "GET",
                redirect: "manual"
            }
        );

        console.log("antwort: ", response.status);
        console.log("typ: ", response.type);

        if (response.status === 200 || response.status === 302) {
            console.log("server ist erreichbar");
        } else {
            console.log("server ist nicht erreichbar");
        }

    } catch (e) {
        console.error("anfrage ist fehlgeschlagen: ", e);
    }
}

checkTor();
