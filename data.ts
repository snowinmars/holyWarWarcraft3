export type Gold = {
	readonly "level": number;
	readonly "price": number;
	readonly "priceIncludingFood": number;
	readonly "currentIncome": number;
	readonly "increaseIncomeBy": "string";
	readonly "resultIncome": number;
	readonly "bybackItselfAfter": number;
	readonly "bybackItselfAfterIncludingFood": number;
}

export type Food = {
	readonly "level": number;
	readonly "price": number;
	readonly "currentFood": number;
	readonly "increaseFoodBy": string;
	readonly "resultFood": number;
}

export type MeleeDamage = {
	readonly "level": number;
	readonly "price": number;
	readonly "currentDamage": number;
	readonly "increaseDamageBy": string;
	readonly "resultDamage": string;
}

export type RangeDamage = {
	readonly "level": number;
	readonly "price": number;
	readonly "currentDamage": number;
	readonly "increaseDamageBy": string;
	readonly "resultDamage": string;
}

export type Armour = {
	readonly "level": number;
	readonly "price": number;
	readonly "currentArmourHp": string;
	readonly "increaseArmourHpBy": string;
	readonly "resultArmourHp": string;
}

export type ManaRegeneration = {
	readonly "level": number;
	readonly "price": number;
	readonly "currentManaRegeneration": string;
	readonly "increaseManaRegenerationBy": string;
	readonly "resultManaRegeneration": string;
}

export type Haste = {
	readonly "level": number;
	readonly "price": number;
	readonly "currentPercent": string;
	readonly "increasePercentBy": string;
	readonly "resultPercent": string;
}

export type Range = {
	readonly "level": number;
	readonly "price": number;
	readonly "currentRange": string;
	readonly "increaseRangeBy": string;
	readonly "resultRange": string;
}

export const golds: Gold[] = [
    {
        "level": 1,
        "price": 32,
        "priceIncludingFood": 32,
        "currentIncome": 30,
        "increaseIncomeBy": "+5",
        "resultIncome": 35,
        "bybackItselfAfter": 6.4,
        "bybackItselfAfterIncludingFood": 6.4
    },
    {
        "level": 2,
        "price": 48,
        "priceIncludingFood": 63,
        "currentIncome": 35,
        "increaseIncomeBy": "+6",
        "resultIncome": 41,
        "bybackItselfAfter": 8,
        "bybackItselfAfterIncludingFood": 10.5
    },
    {
        "level": 3,
        "price": 64,
        "priceIncludingFood": 79,
        "currentIncome": 41,
        "increaseIncomeBy": "+7",
        "resultIncome": 48,
        "bybackItselfAfter": 9.14,
        "bybackItselfAfterIncludingFood": 11.28
    },
    {
        "level": 4,
        "price": 80,
        "priceIncludingFood": 102.5,
        "currentIncome": 48,
        "increaseIncomeBy": "+8",
        "resultIncome": 56,
        "bybackItselfAfter": 10,
        "bybackItselfAfterIncludingFood": 12.81
    },
    {
        "level": 5,
        "price": 96,
        "priceIncludingFood": 118.5,
        "currentIncome": 56,
        "increaseIncomeBy": "+9",
        "resultIncome": 65,
        "bybackItselfAfter": 10.66,
        "bybackItselfAfterIncludingFood": 13.16
    },
    {
        "level": 6,
        "price": 112,
        "priceIncludingFood": 132,
        "currentIncome": 65,
        "increaseIncomeBy": "+10",
        "resultIncome": 75,
        "bybackItselfAfter": 11.2,
        "bybackItselfAfterIncludingFood": 13.2
    },
    {
        "level": 7,
        "price": 128,
        "priceIncludingFood": 148,
        "currentIncome": 75,
        "increaseIncomeBy": "+11",
        "resultIncome": 86,
        "bybackItselfAfter": 11.63,
        "bybackItselfAfterIncludingFood": 13.45
    },
    {
        "level": 8,
        "price": 144,
        "priceIncludingFood": 164,
        "currentIncome": 86,
        "increaseIncomeBy": "+12",
        "resultIncome": 98,
        "bybackItselfAfter": 12,
        "bybackItselfAfterIncludingFood": 13.66
    },
    {
        "level": 9,
        "price": 160,
        "priceIncludingFood": 185,
        "currentIncome": 98,
        "increaseIncomeBy": "+13",
        "resultIncome": 111,
        "bybackItselfAfter": 12.3,
        "bybackItselfAfterIncludingFood": 14.23
    },
    {
        "level": 10,
        "price": 176,
        "priceIncludingFood": 201,
        "currentIncome": 111,
        "increaseIncomeBy": "+14",
        "resultIncome": 125,
        "bybackItselfAfter": 12.57,
        "bybackItselfAfterIncludingFood": 14.35
    },
    {
        "level": 11,
        "price": 192,
        "priceIncludingFood": 217,
        "currentIncome": 125,
        "increaseIncomeBy": "+15",
        "resultIncome": 140,
        "bybackItselfAfter": 12.8,
        "bybackItselfAfterIncludingFood": 14.46
    },
    {
        "level": 12,
        "price": 208,
        "priceIncludingFood": 253,
        "currentIncome": 140,
        "increaseIncomeBy": "+16",
        "resultIncome": 156,
        "bybackItselfAfter": 13,
        "bybackItselfAfterIncludingFood": 15.81
    },
    {
        "level": 13,
        "price": 224,
        "priceIncludingFood": 269,
        "currentIncome": 156,
        "increaseIncomeBy": "+17",
        "resultIncome": 173,
        "bybackItselfAfter": 13.17,
        "bybackItselfAfterIncludingFood": 15.82
    },
    {
        "level": 14,
        "price": 240,
        "priceIncludingFood": 292.5,
        "currentIncome": 173,
        "increaseIncomeBy": "+18",
        "resultIncome": 191,
        "bybackItselfAfter": 13.33,
        "bybackItselfAfterIncludingFood": 16.25
    },
    {
        "level": 15,
        "price": 256,
        "priceIncludingFood": 308.5,
        "currentIncome": 191,
        "increaseIncomeBy": "+19",
        "resultIncome": 210,
        "bybackItselfAfter": 13.47,
        "bybackItselfAfterIncludingFood": 16.23
    },
    {
        "level": 16,
        "price": 272,
        "priceIncludingFood": 332,
        "currentIncome": 210,
        "increaseIncomeBy": "+20",
        "resultIncome": 230,
        "bybackItselfAfter": 13.6,
        "bybackItselfAfterIncludingFood": 16.6
    },
    {
        "level": 17,
        "price": 288,
        "priceIncludingFood": 348,
        "currentIncome": 230,
        "increaseIncomeBy": "+21",
        "resultIncome": 251,
        "bybackItselfAfter": 13.71,
        "bybackItselfAfterIncludingFood": 16.57
    },
    {
        "level": 18,
        "price": 304,
        "priceIncludingFood": 349,
        "currentIncome": 251,
        "increaseIncomeBy": "+22",
        "resultIncome": 273,
        "bybackItselfAfter": 13.81,
        "bybackItselfAfterIncludingFood": 15.86
    },
    {
        "level": 19,
        "price": 320,
        "priceIncludingFood": 365,
        "currentIncome": 273,
        "increaseIncomeBy": "+23",
        "resultIncome": 296,
        "bybackItselfAfter": 13.91,
        "bybackItselfAfterIncludingFood": 15.86
    },
    {
        "level": 20,
        "price": 336,
        "priceIncludingFood": 381,
        "currentIncome": 296,
        "increaseIncomeBy": "+24",
        "resultIncome": 320,
        "bybackItselfAfter": 14,
        "bybackItselfAfterIncludingFood": 15.87
    }
]

export const foods: Food[] = [
    {
        "level": 1,
        "price": 30,
        "currentFood": 10,
        "increaseFoodBy": "+10",
        "resultFood": 20
    },
    {
        "level": 2,
        "price": 45,
        "currentFood": 20,
        "increaseFoodBy": "+11",
        "resultFood": 31
    },
    {
        "level": 3,
        "price": 60,
        "currentFood": 31,
        "increaseFoodBy": "+12",
        "resultFood": 43
    },
    {
        "level": 4,
        "price": 75,
        "currentFood": 43,
        "increaseFoodBy": "+13",
        "resultFood": 56
    },
    {
        "level": 5,
        "price": 90,
        "currentFood": 56,
        "increaseFoodBy": "+14",
        "resultFood": 70
    },
    {
        "level": 6,
        "price": 105,
        "currentFood": 70,
        "increaseFoodBy": "+15",
        "resultFood": 85
    },
    {
        "level": 7,
        "price": 120,
        "currentFood": 85,
        "increaseFoodBy": "+16",
        "resultFood": 101
    },
    {
        "level": 8,
        "price": 135,
        "currentFood": 101,
        "increaseFoodBy": "+17",
        "resultFood": 118
    },
    {
        "level": 9,
        "price": 150,
        "currentFood": 118,
        "increaseFoodBy": "+18",
        "resultFood": 136
    },
    {
        "level": 10,
        "price": 165,
        "currentFood": 136,
        "increaseFoodBy": "+19",
        "resultFood": 155
    },
    {
        "level": 11,
        "price": 180,
        "currentFood": 155,
        "increaseFoodBy": "+20",
        "resultFood": 175
    },
    {
        "level": 12,
        "price": 195,
        "currentFood": 175,
        "increaseFoodBy": "+21",
        "resultFood": 296
    },
    {
        "level": 13,
        "price": 210,
        "currentFood": 296,
        "increaseFoodBy": "+22",
        "resultFood": 218
    }
]

export const meleeDamages: MeleeDamage[] = [
    {
        "level": 1,
        "price": 30,
        "currentDamage": 0,
        "increaseDamageBy": "+10",
        "resultDamage": "+10"
    },
    {
        "level": 2,
        "price": 40,
        "currentDamage": "+10",
        "increaseDamageBy": "+10",
        "resultDamage": "+20"
    },
    {
        "level": 3,
        "price": 50,
        "currentDamage": "+20",
        "increaseDamageBy": "+10",
        "resultDamage": "+30"
    },
    {
        "level": 4,
        "price": 60,
        "currentDamage": "+30",
        "increaseDamageBy": "+10",
        "resultDamage": "+40"
    },
    {
        "level": 5,
        "price": 70,
        "currentDamage": "+40",
        "increaseDamageBy": "+10",
        "resultDamage": "+50"
    },
    {
        "level": 6,
        "price": 80,
        "currentDamage": "+50",
        "increaseDamageBy": "+10",
        "resultDamage": "+60"
    },
    {
        "level": 7,
        "price": 90,
        "currentDamage": "+60",
        "increaseDamageBy": "+10",
        "resultDamage": "+70"
    },
    {
        "level": 8,
        "price": 100,
        "currentDamage": "+70",
        "increaseDamageBy": "+10",
        "resultDamage": "+80"
    },
    {
        "level": 9,
        "price": 110,
        "currentDamage": "+80",
        "increaseDamageBy": "+10",
        "resultDamage": "+90"
    },
    {
        "level": 10,
        "price": 120,
        "currentDamage": "+90",
        "increaseDamageBy": "+10",
        "resultDamage": "+100"
    },
    {
        "level": 11,
        "price": 130,
        "currentDamage": "+100",
        "increaseDamageBy": "+10",
        "resultDamage": "+110"
    },
    {
        "level": 12,
        "price": 140,
        "currentDamage": "+110",
        "increaseDamageBy": "+10",
        "resultDamage": "+120"
    },
    {
        "level": 13,
        "price": 150,
        "currentDamage": "+120",
        "increaseDamageBy": "+10",
        "resultDamage": "+130"
    },
    {
        "level": 14,
        "price": 160,
        "currentDamage": "+130",
        "increaseDamageBy": "+10",
        "resultDamage": "+140"
    },
    {
        "level": 15,
        "price": 170,
        "currentDamage": "+140",
        "increaseDamageBy": "+10",
        "resultDamage": "+150"
    }
]

export const rangeDamages: RangeDamage[] = [
    {
        "level": 1,
        "price": 30,
        "currentDamage": 0,
        "increaseDamageBy": "+8",
        "resultDamage": "+8"
    },
    {
        "level": 2,
        "price": 40,
        "currentDamage": "+8",
        "increaseDamageBy": "+8",
        "resultDamage": "+16"
    },
    {
        "level": 3,
        "price": 50,
        "currentDamage": "+16",
        "increaseDamageBy": "+8",
        "resultDamage": "+24"
    },
    {
        "level": 4,
        "price": 60,
        "currentDamage": "+24",
        "increaseDamageBy": "+8",
        "resultDamage": "+32"
    },
    {
        "level": 5,
        "price": 70,
        "currentDamage": "+32",
        "increaseDamageBy": "+8",
        "resultDamage": "+40"
    },
    {
        "level": 6,
        "price": 80,
        "currentDamage": "+40",
        "increaseDamageBy": "+8",
        "resultDamage": "+48"
    },
    {
        "level": 7,
        "price": 90,
        "currentDamage": "+56",
        "increaseDamageBy": "+8",
        "resultDamage": "+64"
    },
    {
        "level": 8,
        "price": 100,
        "currentDamage": "+64",
        "increaseDamageBy": "+8",
        "resultDamage": "+72"
    },
    {
        "level": 9,
        "price": 110,
        "currentDamage": "+72",
        "increaseDamageBy": "+8",
        "resultDamage": "+80"
    },
    {
        "level": 10,
        "price": 120,
        "currentDamage": "+80",
        "increaseDamageBy": "+8",
        "resultDamage": "+88"
    },
    {
        "level": 11,
        "price": 130,
        "currentDamage": "+88",
        "increaseDamageBy": "+8",
        "resultDamage": "+96"
    },
    {
        "level": 12,
        "price": 140,
        "currentDamage": "+96",
        "increaseDamageBy": "+8",
        "resultDamage": "+104"
    },
    {
        "level": 13,
        "price": 150,
        "currentDamage": "+104",
        "increaseDamageBy": "+8",
        "resultDamage": "+112"
    },
    {
        "level": 14,
        "price": 160,
        "currentDamage": "+112",
        "increaseDamageBy": "+8",
        "resultDamage": "+120"
    },
    {
        "level": 15,
        "price": 170,
        "currentDamage": "+120",
        "increaseDamageBy": "+8",
        "resultDamage": "+128"
    }
]

export const armours: Armour[] = [
    {
        "level": 1,
        "price": 30,
        "currentArmourHp": "0",
        "increaseArmourHpBy": "+1/+5%",
        "resultArmourHp": "+1/+5%"
    },
    {
        "level": 2,
        "price": 40,
        "currentArmourHp": "+1/+5%",
        "increaseArmourHpBy": "+1/+5%",
        "resultArmourHp": "+2/+10%"
    },
    {
        "level": 3,
        "price": 50,
        "currentArmourHp": "+2/+10%",
        "increaseArmourHpBy": "+1/+5%",
        "resultArmourHp": "+3/+15%"
    },
    {
        "level": 4,
        "price": 60,
        "currentArmourHp": "+3/+15%",
        "increaseArmourHpBy": "+1/+5%",
        "resultArmourHp": "+4/+20%"
    },
    {
        "level": 5,
        "price": 70,
        "currentArmourHp": "+4/+20%",
        "increaseArmourHpBy": "+1/+5%",
        "resultArmourHp": "+5/+25%"
    },
    {
        "level": 6,
        "price": 80,
        "currentArmourHp": "+5/+25%",
        "increaseArmourHpBy": "+1/+5%",
        "resultArmourHp": "+6/+30%"
    },
    {
        "level": 7,
        "price": 90,
        "currentArmourHp": "+6/+30%",
        "increaseArmourHpBy": "+1/+5%",
        "resultArmourHp": "+7/+35%"
    },
    {
        "level": 8,
        "price": 100,
        "currentArmourHp": "+7/+35%",
        "increaseArmourHpBy": "+1/+5%",
        "resultArmourHp": "+8/+40%"
    },
    {
        "level": 9,
        "price": 110,
        "currentArmourHp": "+8/+40%",
        "increaseArmourHpBy": "+1/+5%",
        "resultArmourHp": "+9/+45%"
    },
    {
        "level": 10,
        "price": 120,
        "currentArmourHp": "+9/+45%",
        "increaseArmourHpBy": "+1/+5%",
        "resultArmourHp": "+10/+50%"
    },
    {
        "level": 11,
        "price": 130,
        "currentArmourHp": "+10/+50%",
        "increaseArmourHpBy": "+1/+5%",
        "resultArmourHp": "+11/+55%"
    },
    {
        "level": 12,
        "price": 140,
        "currentArmourHp": "+11/+55%",
        "increaseArmourHpBy": "+1/+5%",
        "resultArmourHp": "+12/+60%"
    },
    {
        "level": 13,
        "price": 150,
        "currentArmourHp": "+12/+60%",
        "increaseArmourHpBy": "+1/+5%",
        "resultArmourHp": "+13/+65%"
    },
    {
        "level": 14,
        "price": 160,
        "currentArmourHp": "+13/+65%",
        "increaseArmourHpBy": "+1/+5%",
        "resultArmourHp": "+14/+70%"
    },
    {
        "level": 15,
        "price": 170,
        "currentArmourHp": "+14/+70%",
        "increaseArmourHpBy": "+1/+5%",
        "resultArmourHp": "+15/+75%"
    }
]

export const manaRegenerations: ManaRegeneration[] = [
    {
        "level": 1,
        "price": 30,
        "currentManaRegeneration": "0",
        "increaseManaRegenerationBy": "+0.5",
        "resultManaRegeneration": "+0.5"
    },
    {
        "level": 2,
        "price": 40,
        "currentManaRegeneration": "+0.5",
        "increaseManaRegenerationBy": "+0.5",
        "resultManaRegeneration": "+1.0"
    },
    {
        "level": 3,
        "price": 50,
        "currentManaRegeneration": "+1.0",
        "increaseManaRegenerationBy": "+0.5",
        "resultManaRegeneration": "+1.5"
    },
    {
        "level": 4,
        "price": 60,
        "currentManaRegeneration": "+1.5",
        "increaseManaRegenerationBy": "+0.5",
        "resultManaRegeneration": "+2.0"
    },
    {
        "level": 5,
        "price": 70,
        "currentManaRegeneration": "+2.0",
        "increaseManaRegenerationBy": "+0.5",
        "resultManaRegeneration": "+2.5"
    },
    {
        "level": 6,
        "price": 80,
        "currentManaRegeneration": "+2.5",
        "increaseManaRegenerationBy": "+0.5",
        "resultManaRegeneration": "+3.0"
    },
    {
        "level": 7,
        "price": 90,
        "currentManaRegeneration": "+3.0",
        "increaseManaRegenerationBy": "+0.5",
        "resultManaRegeneration": "+3.5"
    },
    {
        "level": 8,
        "price": 100,
        "currentManaRegeneration": "+3.5",
        "increaseManaRegenerationBy": "+0.5",
        "resultManaRegeneration": "+4.0"
    },
    {
        "level": 9,
        "price": 110,
        "currentManaRegeneration": "+4.0",
        "increaseManaRegenerationBy": "+0.5",
        "resultManaRegeneration": "+4.5"
    },
    {
        "level": 10,
        "price": 120,
        "currentManaRegeneration": "+4.5",
        "increaseManaRegenerationBy": "+0.5",
        "resultManaRegeneration": "+5.0"
    },
    {
        "level": 11,
        "price": 130,
        "currentManaRegeneration": "+5.0",
        "increaseManaRegenerationBy": "+0.5",
        "resultManaRegeneration": "+5.5"
    },
    {
        "level": 12,
        "price": 140,
        "currentManaRegeneration": "+5.5",
        "increaseManaRegenerationBy": "+0.5",
        "resultManaRegeneration": "+6.0"
    },
    {
        "level": 13,
        "price": 150,
        "currentManaRegeneration": "+6.0",
        "increaseManaRegenerationBy": "+0.5",
        "resultManaRegeneration": "+6.5"
    },
    {
        "level": 14,
        "price": 160,
        "currentManaRegeneration": "+6.5",
        "increaseManaRegenerationBy": "+0.5",
        "resultManaRegeneration": "+7.0"
    },
    {
        "level": 15,
        "price": 170,
        "currentManaRegeneration": "+7.0",
        "increaseManaRegenerationBy": "+0.5",
        "resultManaRegeneration": "+7.5"
    }
]

export const hastes: Haste[] = [
    {
        "level": 1,
        "price": 30,
        "currentPercent": "0",
        "increasePercent by": "+5%",
        "resultPercent": "+5%"
    },
    {
        "level": 2,
        "price": 40,
        "currentPercent": "+5%",
        "increasePercent by": "+5%",
        "resultPercent": "+10%"
    },
    {
        "level": 3,
        "price": 50,
        "currentPercent": "+10%",
        "increasePercent by": "+5%",
        "resultPercent": "+15%"
    },
    {
        "level": 4,
        "price": 60,
        "currentPercent": "+15%",
        "increasePercent by": "+5%",
        "resultPercent": "+20%"
    },
    {
        "level": 5,
        "price": 70,
        "currentPercent": "+20%",
        "increasePercent by": "+5%",
        "resultPercent": "+25%"
    },
    {
        "level": 6,
        "price": 80,
        "currentPercent": "+25%",
        "increasePercent by": "+5%",
        "resultPercent": "+30%"
    },
    {
        "level": 7,
        "price": 90,
        "currentPercent": "+30%",
        "increasePercent by": "+5%",
        "resultPercent": "+35%"
    },
    {
        "level": 8,
        "price": 100,
        "currentPercent": "+35%",
        "increasePercent by": "+5%",
        "resultPercent": "+40%"
    },
    {
        "level": 9,
        "price": 110,
        "currentPercent": "+40%",
        "increasePercent by": "+5%",
        "resultPercent": "+45%"
    },
    {
        "level": 10,
        "price": 120,
        "currentPercent": "+45%",
        "increasePercent by": "+5%",
        "resultPercent": "+50%"
    },
    {
        "level": 11,
        "price": 130,
        "currentPercent": "+50%",
        "increasePercent by": "+5%",
        "resultPercent": "+55%"
    },
    {
        "level": 12,
        "price": 140,
        "currentPercent": "+55%",
        "increasePercent by": "+5%",
        "resultPercent": "+60%"
    },
    {
        "level": 13,
        "price": 150,
        "currentPercent": "+60%",
        "increasePercent by": "+5%",
        "resultPercent": "+65%"
    },
    {
        "level": 14,
        "price": 160,
        "currentPercent": "+65%",
        "increasePercent by": "+5%",
        "resultPercent": "+70%"
    },
    {
        "level": 15,
        "price": 170,
        "currentPercent": "+70%",
        "increasePercent by": "+5%",
        "resultPercent": "+75%"
    }
]

export const ranges: Range[] = [
    {
        "level": 1,
        "price": 30,
        "currentRange": "0",
        "increaseRangeBy": "+30",
        "resultRange": "+30"
    },
    {
        "level": 2,
        "price": 40,
        "currentRange": "+30",
        "increaseRangeBy": "+30",
        "resultRange": "+60"
    },
    {
        "level": 3,
        "price": 50,
        "currentRange": "+60",
        "increaseRangeBy": "+30",
        "resultRange": "+90"
    },
    {
        "level": 4,
        "price": 60,
        "currentRange": "+90",
        "increaseRangeBy": "+30",
        "resultRange": "+120"
    },
    {
        "level": 5,
        "price": 70,
        "currentRange": "+120",
        "increaseRangeBy": "+30",
        "resultRange": "+150"
    },
    {
        "level": 6,
        "price": 80,
        "currentRange": "+150",
        "increaseRangeBy": "+30",
        "resultRange": "+180"
    },
    {
        "level": 7,
        "price": 90,
        "currentRange": "+180",
        "increaseRangeBy": "+30",
        "resultRange": "+210"
    },
    {
        "level": 8,
        "price": 100,
        "currentRange": "+210",
        "increaseRangeBy": "+30",
        "resultRange": "+240"
    },
    {
        "level": 9,
        "price": 110,
        "currentRange": "+240",
        "increaseRangeBy": "+30",
        "resultRange": "+270"
    },
    {
        "level": 10,
        "price": 120,
        "currentRange": "+270",
        "increaseRangeBy": "+30",
        "resultRange": "+300"
    },
    {
        "level": 11,
        "price": 130,
        "currentRange": "+300",
        "increaseRangeBy": "+30",
        "resultRange": "+330"
    },
    {
        "level": 12,
        "price": 140,
        "currentRange": "+330",
        "increaseRangeBy": "+30",
        "resultRange": "+360"
    },
    {
        "level": 13,
        "price": 150,
        "currentRange": "+360",
        "increaseRangeBy": "+30",
        "resultRange": "+390"
    },
    {
        "level": 14,
        "price": 160,
        "currentRange": "+390",
        "increaseRangeBy": "+30",
        "resultRange": "+420"
    },
    {
        "level": 15,
        "price": 170,
        "currentRange": "+420",
        "increaseRangeBy": "+30",
        "resultRange": "+450"
    }
]
