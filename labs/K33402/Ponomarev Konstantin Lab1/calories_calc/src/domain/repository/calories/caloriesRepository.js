import {BaseResponse} from "@/domain/model/response/baseResponse";
import {ErrorResponse} from "@/domain/model/response/errorResponse";
import {FoodCategory} from "@/domain/model/food/FoodCategory";
import {ProteinsType} from "@/domain/model/food/ProteinsType";
import {FatsType} from "@/domain/model/food/FatsType";
import {CarbohydratesType} from "@/domain/model/food/CarbohydratesType";

export class CaloriesRepository {
    /** @type {CaloriesApi} **/
    api;

    constructor(api) {
        this.api = api
    }

    async sendBodyParameters(userId, bodyParameters) {

        const response = await this.api.sendBodyParameters(userId, bodyParameters)
        const baseResponse = new BaseResponse(response.data)
        if (!baseResponse.success) {
            const errorResponse = new ErrorResponse(baseResponse)
            throw Error(errorResponse.errorMessage)
        }
    }

    async getBodyParameters(userId) {
        const response = await this.api.getBodyParameters(userId)
        const baseResponse = new BaseResponse(response.data)
        if (!baseResponse.success) {
            const errorResponse = new ErrorResponse(baseResponse)
            throw Error(errorResponse.errorMessage)
        }
        return baseResponse.response
    }

    async getCalculatedCalories(userId) {
        const response = await this.api.getCalculatedRation(userId)
        const baseResponse = new BaseResponse(response.data)
        if (!baseResponse.success) {
            const errorResponse = new ErrorResponse(baseResponse)
            throw Error(errorResponse.errorMessage)
        }
        return baseResponse.response
    }

    getFoodByQuery(searchQuery, category, proteins, fats, carbohydrates) {
        // Здесь точно так же обращаюсь к апи как и выше, однако для ускорения процесса решил сделать фикс эррей

        const filteredQuery = this.#getFoodArray().filter(food => {
            let matchesSearchQuery = true
            if (searchQuery) {
                const regex = new RegExp(searchQuery, 'i')
                matchesSearchQuery = regex.test(food.name)
            }

            let matchesCategory = true;
            if (category) {
                matchesCategory = food.category === category;
            }

            let matchesProteins = true;
            if (proteins !== null) {
                switch (proteins) {
                    case ProteinsType.SMALL:
                        matchesProteins = food.proteins >= 0 && food.proteins <= 5
                        break
                    case ProteinsType.MEDIUM:
                        matchesProteins = food.proteins >= 6 && food.proteins <= 12
                        break
                    case ProteinsType.HIGH:
                        matchesProteins = food.proteins > 12
                        break
                }
            }
            let matchesFats = true;
            if (fats !== null) {
                switch (fats) {
                    case FatsType.SMALL:
                        matchesFats = food.fats >= 0 && food.fats <= 5
                        break
                    case FatsType.MEDIUM:
                        matchesFats = food.fats >= 6 && food.fats <= 12
                        break
                    case FatsType.HIGH:
                        matchesFats = food.fats > 12
                        break
                }
            }
            let matchesCarbohydrates = true;
            if (carbohydrates !== null) {
                switch (carbohydrates) {
                    case CarbohydratesType.SMALL:
                        matchesCarbohydrates = food.carbohydrates >= 0 && food.carbohydrates <= 5
                        break
                    case CarbohydratesType.MEDIUM:
                        matchesCarbohydrates = food.carbohydrates >= 6 && food.carbohydrates <= 12
                        break
                    case CarbohydratesType.HIGH:
                        matchesCarbohydrates = food.carbohydrates > 12
                        break
                }
            }

            // Возвращаем результат сравнения всех условий
            return matchesSearchQuery && matchesCategory && matchesProteins && matchesFats && matchesCarbohydrates;
        })

        return filteredQuery
    }

    #getFoodArray() {
        return [
            {
                image: "https://thecanterburyhub.co.uk/wp-content/uploads/2018/02/200-x-200.jpg",
                name: "Творог",
                category: FoodCategory.MILK,
                calories: 350,
                proteins: 10,
                fats: 12,
                carbohydrates: 14
            },
            {
                image: "https://thecanterburyhub.co.uk/wp-content/uploads/2018/02/200-x-200.jpg",
                name: "Творожная смесь",
                category: FoodCategory.MILK,
                calories: 300,
                proteins: 50,
                fats: 62,
                carbohydrates: 70
            },
            {
                image: "https://thecanterburyhub.co.uk/wp-content/uploads/2018/02/200-x-200.jpg",
                name: "Тыква",
                category: FoodCategory.VEGETABLES,
                calories: 82,
                proteins: 9,
                fats: 11,
                carbohydrates: 14
            },
            {
                image: "https://thecanterburyhub.co.uk/wp-content/uploads/2018/02/200-x-200.jpg",
                name: "Ябокунь",
                category: FoodCategory.FISH,
                calories: 200,
                proteins: 150,
                fats: 140,
                carbohydrates: 160
            },
            {
                image: "https://thecanterburyhub.co.uk/wp-content/uploads/2018/02/200-x-200.jpg",
                name: "Яблоко",
                category: FoodCategory.VEGETABLES,
                calories: 150,
                proteins: 10,
                fats: 12,
                carbohydrates: 14
            },
            {
                image: "https://thecanterburyhub.co.uk/wp-content/uploads/2018/02/200-x-200.jpg",
                name: "Апельсины",
                category: FoodCategory.VEGETABLES,
                calories: 30,
                proteins: 12,
                fats: 1,
                carbohydrates: 15
            },
            {
                image: "https://thecanterburyhub.co.uk/wp-content/uploads/2018/02/200-x-200.jpg",
                name: "Морковь",
                category: FoodCategory.VEGETABLES,
                calories: 20,
                proteins: 12,
                fats: 1,
                carbohydrates: 15
            }
        ]
    }
}
