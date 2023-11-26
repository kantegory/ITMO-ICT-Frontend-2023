// function parseJson(jsonObject) {
//     let parsed = JSON.stringify(jsonObject);
//     console.log(parsed);
//     parsed = parsed.replace('"', "");
//     parsed = parsed.replace('"', "");
//     return parsed;
// }

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

document.addEventListener('DOMContentLoaded', function () {
    console.log("DOMContentLoaded");
    fetch("http://127.0.0.1:8090/api/collections/quest_card/records")
        .then(Response => Response.json())
        .then(data => {

            let questsTypes = new Map();
            data.items.forEach((element) => {
                console.log("json item ");
                console.log(typeof element);
                let curType = element["type"];
                console.log(curType);
                // return;

                if (!questsTypes.has(curType)) {
                    questsTypes.set(curType, []);
                }

                questsTypes.get(curType).push(element);
            });

            questsTypes.forEach((quests, questType) => {
                if (questType.length === 0) {
                    return;
                }

                let questsSection = document.getElementsByClassName("quests")[0];
                let questsRow = questsSection.children[0].children[0];
                questsRow.appendChild(document.createElement("div"));
                questsColumn = questsRow.children[1];
                questsColumn.classList.add("col-xl-9");
                questsColumn.classList.add("col-md-12");
                questsColumn.classList.add("col-sm-12");

                let groupName = questsColumn.appendChild(document.createElement("h4"));
                groupName.className = "color2";
                groupName.textContent = questType;

                let questGroup = questsColumn.appendChild(document.createElement("div"));
                questGroup.classList.add("quest-group");

                quests.forEach((quest) => {
                    let questCard = questGroup.appendChild(document.createElement("div"));
                    questCard.classList.add("quest-card");
                    let category = "cat-" + quest["category"];
                    questCard.classList.add(category);
                    questCard.id = quest["id"];

                    let questImg = questCard.appendChild(document.createElement("img"));
                    questImg.src = quest["picture"];
                    questImg.alt = quest["picture_alt_text"];

                    let questContent = questCard.appendChild(document.createElement("div"));
                    questContent.className = "quest-content";

                    let price = questContent.appendChild(document.createElement("p"));
                    price.className = "price text-center";
                    price.textContent = quest["price"] + " \u20bd";

                    let name = questContent.appendChild(document.createElement("h6"));
                    name.className = "text-center";
                    name.textContent = quest["name"];

                    let description = questContent.appendChild(document.createElement("p"));
                    description.className = "text-center color3 quest_description";
                    description.textContent = quest["description"];

                    let categoryBlock = questContent.appendChild(document.createElement("div"));
                    categoryBlock.className = "category";
                    let categotyWord = categoryBlock.appendChild(document.createElement("p"));
                    categotyWord.className = "text-black quest_description filter";
                    categotyWord.textContent = "Категория:";
                    let questCategory = categoryBlock.appendChild(document.createElement("p"));
                    questCategory.className = "color3 quest_description";
                    questCategory.textContent = parseCategory(quest["category"]);

                    let durationBlock = questContent.appendChild(document.createElement("div"));
                    durationBlock.className = "duration";
                    let durationWord = durationBlock.appendChild(document.createElement("p"));
                    durationWord.className = "text-black quest_description filter"
                    durationWord.textContent = "Время в пути:";
                    let questDuration = durationBlock.appendChild(document.createElement("p"));
                    questDuration.className = "color3 quest_description"
                    questDuration.textContent = quest["duration"];


                    let buyButton = questCard.appendChild(document.createElement("button"));
                    // buyButton.classList.add("q-btn");
                    buyButton.type = "button";
                    buyButton.className = "btn btn-primary primary-button questcard-button";
                    buyButton.textContent = "Купить";
                    // addToPurchased(buyButton, quest["id"]);
                })
            })
        })
})