document.addEventListener("DOMContentLoaded", () => {
    fetch("http://127.0.0.1:8090/api/collections/purchased_quest/records").then(Response => Response.json()).then(data => {
        let purchased_quests = data.items;
        console.log(purchased_quests);
        purchased_quests.forEach(item => {
            fetch("http://127.0.0.1:8090/api/collections/quest_card/records").then(Response => Response.json()).then(data => {
                let quest_to_show = data.items.find(it => it.id === item.quest_id);

                // console.log(quest_to_show);

                const purchased_items = document.getElementById("purchased_items");
                // console.log(purchased_items);

                const quest_card = document.createElement("div");
                quest_card.className = "card user_quest_item";

                // console.log(quest_to_show);

                let quest_pic = quest_card.appendChild(document.createElement("img"));
                quest_pic.src = quest_to_show.picture;

                let quest_name = quest_card.appendChild(document.createElement("p"));
                quest_name.className = "user_quest_name";
                quest_name.textContent = quest_to_show.name;

                purchased_items.appendChild(quest_card);
                console.log(quest_card);
            })
            }
        )

    })

})