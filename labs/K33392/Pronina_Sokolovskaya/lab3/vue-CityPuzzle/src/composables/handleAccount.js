import { ref } from 'vue';

export function handleAccount() {
    const purchasedQuestsData = ref([]);

    const fetchQuests = () => {
        fetch('http://127.0.0.1:8090/api/collections/purchased_quest/records')
            .then(Response => Response.json())
            .then(data => {
                const purchasedQuests = data.items;
                purchasedQuests.forEach(item => {
                    fetch("http://127.0.0.1:8090/api/collections/quest_card/records").then(Response => Response.json()).then(data => {
                        const quest_to_add = data.items.find(it => it.id === item.quest_id);
                        purchasedQuestsData.value.push(quest_to_add);
                    });
                });
            });
    }

    return {
        fetchQuests,
        purchasedQuestsData,
    }
}