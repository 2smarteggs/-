

function getFoodCategory(nutritions) {
    const { protein, carbohydrate, fat, fiber } = nutritions;

    // 计算食品总热量
    const totalCalories = protein * 4 + carbohydrate * 4 + fat * 9;

    // 根据热量占比计算食品分类
    const proteinPercentage = protein * 4 / totalCalories;
    const carbohydratePercentage = carbohydrate * 4 / totalCalories;
    const fatPercentage = fat * 9 / totalCalories;
    const fiberPercentage = fiber ? fiber * 2 / totalCalories : 0;

    if (proteinPercentage > 0.25) {
        return 'protein';
    } else if (carbohydratePercentage > 0.6) {
        return 'carbohydrate';
    } else if (fatPercentage > 0.35) {
        return 'fat';
    } else if (fiberPercentage > 0.02) {
        return 'fiber';
    } else {
        return 'uncategorized';
    }
}

export const ALGORITHMS = {
    GET_FOOD_CATEGORY: getFoodCategory,
}