/* setInterval(() => {
    console.log(navigator.userAgent);
}, 1000);
*/ 

//es treten immernoch netzwerk fehler beim fetch auf. aber auch durch die origin policy wird das lesen verboten...
async function check() {
    try {
        const response = await fetch(
            "http://hostings5tgjtamwlbfp4nfy3m4u2q3oktqnei2euvceed6duw74mtqd.onion/",
            {
                method: "GET",
                redirect: "manual"
            }
        );
        console.log("antwort: ", response.status);
        console.log("typ: ", response.type);

        if (response.status === 200 || response.status === 302 || response.status === 304) {
            console.log("server erreichbar");
        } else {
            console.log("server nicht erreichbar");
        }
    } catch (e) {
        console.error("anfrage ist fehlgeschlagen:", e);
    }
}

check();
