function addToPurchased(el) {
    let id = el.parentNode.parentNode.id;

    fetch("http://127.0.0.1:8090/api/collections/quest_card/records").then(Response => Response.json()).then(data => {
        let quests = data.items;
        let quest_to_buy = quests.find(quest => quest.id === id);
        // console.log(quest_to_buy);
        if (quest_to_buy) {
            fetch("http://127.0.0.1:8090/api/collections/purchased_quest/records", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({quest_id: quest_to_buy.id})
            }).then(r => r.json())
                .catch(err => console.error(err));
        }
        else {
            console.log("not found");
        }
    })
}