setInterval(() => {
    console.log(navigator.userAgent);
}, 1000);

async function checkTor() {
    try {
        const response = await fetch(
            "http://torsedz565kauwu4duvxduwzpihukecrid2riw5lkyxypunhfmerbmid.onion/",
            {
                method: "POST",
                body: "test"
            }
        );

        if (response.status === 200) {
            console.log("server ist erreichbar");
            return true;
        }

        console.log("server antwortet mit: ", response.status);
        return false;
    } catch (e) {
        console.log("server ist nicht erreichbar");
        return false;
    }
}
