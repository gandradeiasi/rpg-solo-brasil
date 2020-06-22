export class DiceRoller {
    static roll(dice_amount,dice_max,dice_modifier) {
        return Math.random() * dice_max + 1 + dice_modifier;
    }
}