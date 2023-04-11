export class Cylinder {
    public static getVolume(radius: number, height: number): number {
        return this.getPerimeter(radius) * height + 2 * this.getBaseArea(radius);
    }

    private static getPerimeter(radius: number) {
        return 2 * Math.PI * radius;
    }

    private static getBaseArea(radius: number) {
        return Math.PI * radius * radius;
    }
}