const timelineArray = [
    {
        year: "Imperial Edict 342/26-NYX (M36)",
        href: "/edict.html",
        eventt: 
"By directive of the Adeptus Administratum, the Forge Worlds Lychesis, Clotho, and Atropos are bound in triumvirate authority over the Beacon of Nyx. All surrounding systems are subject to tithe and levy under their collective oversight.",
    },
    {
        year: "Warp storms (M38)",
        href: "/warpstorms.html",
        eventt: 
"Incidence of warp turbulence in the Nyxan Reach is reported. They gradually worsen.",
    },
    {
        year: "Failure to comply (M39)",
        href: "/tithes.html",
        eventt: 
"Subjects within the Nyx system fail to deliver tithes as decreed under Edict 342/26-NYX. The Magos-Fabricator petitions for the support of the Adeptus Astartes.",
    },
    {
        year: "Raptors arrive (M40)",
        href: "/raptors.html",
        eventt: 
"By order of the Administratum, the Raptors Chapter deploys forces to the Nyxan Reach",
    },
    {
        year: "Conditions worsen (M41)",
        href: "/conditionsworsen.html",
        eventt: "After centuries of enforcement, warp disturbances continue to worsen and tithes arrive incomplete or not at all.",
    },
    {
        year: "Dark Angels fleet becomes stranded (M41)",
        href: "/darkangels.html",
        eventt: 
"A Dark Angels fleet, in transit, becomes detained within the Nyxan Reach by warp turbulence.",
    },
        {
        year: "Dark Angels assume complete authority over the sector. (M41)",
        href: "/soleauthority.html",
        eventt: 
"Proclamation received from the Dark Angels Chapter regarding their assumption of authority over the Beacon of Nyx and attendant forges..",
    },
];

function gfg() {
    timelineArray.map((e, i) => {
        let clss = "right";
        let dot = "dotRight";
        if (i % 2 == 0) {
            clss = "left";
            dot = "dotLeft";
        }
        const year = document.createElement("h3");
        const link = document.createElement("a");
        link.innerHTML = e.year;
        link.href = e.href;
        year.append(link);
        const eventt = document.createElement("p");
        eventt.innerText = e.eventt;
        const item = document.createElement("div");
        item.appendChild(year);
        item.appendChild(eventt);
        item.classList.add("card");
        const contain = document.createElement("div");
        const li = document.createElement("li");
        contain.classList.add(dot);
        contain.appendChild(item);
        li.appendChild(contain);
        li.classList.add(clss);
        document.getElementById("menu").appendChild(li);
    });
}
gfg();