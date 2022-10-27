

export class Dog {
    id?: number;
    breed_name: string;
    experience_required: number;
    walk_distance: number;
    dog_size: number;
    grooming_time: number;
    guard: number;
    drools: number;
    allergy: number;
    noise: number;
    createdAt?: Date;
    updatedAt?: Date;

    constructor() {
        this.allergy = 1;
        this.breed_name = '';
        this.experience_required = 1;
        this.walk_distance = 1;
        this.drools = 1;
        this.noise = 1;
        this.dog_size = 1;
        this.grooming_time = 1;
        this.guard = 1;

    }
}