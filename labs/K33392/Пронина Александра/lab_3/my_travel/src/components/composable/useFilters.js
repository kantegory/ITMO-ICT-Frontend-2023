import { ref, computed } from 'vue';

export default function useFilters(travels) {
    const filters = ref([
        { id: 'upcomingFilter', label: 'Предстоящие', checked: false },
        { id: 'ongoingFilter', label: 'В процессе', checked: false },
        { id: 'completedFilter', label: 'Завершенные', checked: false },
        { id: 'postponedFilter', label: 'Отложенные', checked: false },
        { id: 'cancelledFilter', label: 'Отмененные', checked: false }
    ]);

    const filteredTravels = computed(() => {
        return travels.filter(travel => {
            return filters.value.some(filter => filter.checked && filter.id === travel.status);
        });
    });

    return {
        filters,
        filteredTravels
    };
}
