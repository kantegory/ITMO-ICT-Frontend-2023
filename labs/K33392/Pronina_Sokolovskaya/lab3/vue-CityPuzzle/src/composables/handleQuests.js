import { ref } from 'vue';

export function handleQuests() {
    const questsData = ref([]);

    const fetchQuests = () => {
        fetch('http://127.0.0.1:8090/api/collections/quest_card/records')
            .then(Response => Response.json())
            .then(data => {
                let questsTypes = new Map();
                data.items.forEach((element) => {
                    let curType = element["type"];

                    if (!questsTypes.has(curType)) {
                        questsTypes.set(curType, []);
                    }

                    questsTypes.get(curType).push(element);
            });

            questsTypes.forEach((quests, questType) => {
                if (questType.length === 0) {
                    return;
                }

                questsData.value.push({
                    questType,
                    quests,
                });
            });    
        });
    }

    const purchaseQuest = (questId) => {
        fetch('http://127.0.0.1:8090/api/collections/purchased_quest/records', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({quest_id: questId})
        })
        .then(response => response.json())
        .then(data => {

        })
    }

    function parseCategory(category) {
        let result = "";
        if (category === "art") {
            result = "В мире искусства";
        } else if (category === "love") {
            result = "Дела сердечные";
        } else if (category === "history") {
            result = "История и мистика";
        } else if (category === "society") {
            result = "Питерская интеллигенция";
        }
        return result;
    }

    return {
        questsData,
        fetchQuests,
        parseCategory,
        purchaseQuest,
    };
}